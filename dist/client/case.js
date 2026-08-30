(function () {
  'use strict';

  const cases = window.CASES || {};
  const order = window.CASE_ORDER || Object.keys(cases);
  const isRu = window.PORTFOLIO_LOCALE === 'ru';
  const isStaticCase = !isRu && /\/cases\/[^/]+\.html$/.test(window.location.pathname);
  const pathPrefix = isStaticCase ? '../' : '';
  const assetHref = (href = '') => {
    if (!href || /^(?:https?:|data:|blob:|#|mailto:|tel:)/.test(href)) return href;
    return `${pathPrefix}${href.replace(/^\.\//, '')}`;
  };
  const caseLink = caseId => isRu
    ? `case-ru.html?case=${encodeURIComponent(caseId)}`
    : `${pathPrefix}cases/${encodeURIComponent(caseId)}.html`;
  const ui = isRu ? {
    caseBy: 'Кейс по продуктовому дизайну · Никита Мухортов',
    archive: 'Архивный кейс',
    historicalScreens: 'Исходные экраны проекта',
    source: 'Источник',
    measuredEvidence: 'Измеримое доказательство',
    problemRail: 'Проблема',
    problemHeading: 'Почему существующий сценарий не работал для людей и бизнеса',
    tradeoffs: 'Решения, которые изменили направление',
    researchRail: 'Исследование и продуктовая работа',
    framingHeading: 'Как я сформулировал задачу и выбрал продуктовое направление',
    shapedSolution: 'Что повлияло на решение',
    edgeCases: 'Критические пограничные сценарии',
    interactionDetail: 'Деталь интерфейса',
    separateCases: 'Отдельные продуктовые кейсы',
    separateHeading: 'Разные проблемы, решения и запущенные результаты',
    separateIntro: 'Эти инициативы опирались на общую дизайн-практику, но у каждой были свои архитектура и критерии успеха.',
    productCase: 'Продуктовый кейс',
    problem: 'Проблема',
    myWork: 'Моя работа',
    scopeBoundary: 'Границы роли:',
    shippedRail: 'Запущенный опыт',
    productModel: 'Продуктовая модель в интерфейсе',
    resultRail: 'Результат и влияние',
    resultHeading: 'Что изменилось и каков был мой вклад',
    challenge: 'Задача',
    productDirection: 'Продуктовое направление',
    researchIteration: 'Исследование и итерации',
    findingDirection: 'Как мы нашли продуктовое направление',
    myOwnership: 'Моя зона ответственности',
    validation: 'Как проверяли',
    researchChanged: 'Что изменило исследование',
    decision: 'Решение',
    productChapter: 'Часть продукта',
    shippedExperience: 'Запущенный опыт',
    productFeature: 'Продукт по функциям',
    productPortfolio: 'Портфель продуктов',
    separateStories: 'Отдельные проблемы и продуктовые истории',
    productWork: 'Продуктовая работа',
    outcome: 'Результат',
    evidenceWork: 'Доказательство из проекта',
    postLaunch: 'Аналитика после запуска',
    evaluation: 'Как оценивать запущенный продукт',
    metric: 'Метрика',
    result: 'Результат',
    evidence: 'Доказательство',
    mechanism: 'Продуктовый механизм',
    sources: 'Источники',
    role: 'Роль',
    period: 'Период',
    scope: 'Зона ответственности',
    product: 'Продукт',
    nextCase: 'Следующий кейс',
    viewCase: 'Открыть кейс',
    relatedResearch: 'Связанное исследование',
    paperCopy: 'В более поздней работе с Lund University смежная задача — проверка многофайловых изменений агента — превратилась в проверенный IDE-прототип.',
    viewResearch: 'Открыть кейс исследования',
    readPaper: 'Читать статью'
  } : {};
  const label = (key, fallback) => isRu ? (ui[key] || fallback) : fallback;
  const localizedHref = (href = '') => {
    const localCase = href.match(/^case\.html\?case=([^&#]+)/);
    if (localCase) return isRu
      ? `case-ru.html?case=${localCase[1]}`
      : caseLink(decodeURIComponent(localCase[1]));
    return assetHref(href);
  };
  const requested = document.body.dataset.case || new URLSearchParams(window.location.search).get('case');
  const id = cases[requested] ? requested : order[0];
  const item = cases[id];
  const root = document.getElementById('case-root');

  if (!item || !root) return;

  const escapeHtml = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const attr = escapeHtml;
  const paragraphs = (items = []) => items.map(text => `<p>${escapeHtml(text)}</p>`).join('');
  const list = (items = []) => items.length ? `<ul>${items.map(text => `<li>${escapeHtml(text)}</li>`).join('')}</ul>` : '';

  function setMetadata() {
    if (isStaticCase) return;
    const title = isRu ? `${item.title} — ${ui.caseBy}` : `${item.title} — Product design case by Nikita Mukhortov`;
    document.title = title;
    const description = item.deck;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (descriptionMeta) descriptionMeta.content = description;
    if (ogTitle) ogTitle.content = title;
    if (ogDescription) ogDescription.content = description;
  }

  function coverMedia(cover, eager = false) {
    if (!cover) {
      return `<div class="work-card__media" aria-label="${attr(label('archive', 'Archive case'))}"><div style="padding:36px;color:#9a9c96;text-align:center;text-transform:uppercase;font-size:11px;letter-spacing:.08em">${escapeHtml(label('archive', 'Focused archive story'))}<br>${escapeHtml(label('historicalScreens', 'Historical English screens pending'))}</div></div>`;
    }
    if (cover.type === 'video') {
      return `<div class="work-card__media ${attr(cover.className || '')}"><video muted autoplay loop playsinline controls preload="metadata" poster="${attr(assetHref(cover.poster || ''))}"><source src="${attr(assetHref(cover.src))}" type="video/mp4"></video></div>`;
    }
    if (cover.type === 'phones') {
      return `<div class="work-card__media work-card__media--phones ${attr(cover.className || '')}">${cover.srcs.map((src, index) => `<img src="${attr(assetHref(src))}" alt="${attr(item.title)} interface ${index + 1}" ${eager && index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>`).join('')}</div>`;
    }
    if (cover.type === 'cropPhones') {
      return `<div class="work-card__media work-card__media--koshelek-crops ${attr(cover.className || '')}">${cover.srcs.map((src, index) => `<span class="koshelek-screen-crop"><img src="${attr(assetHref(src))}" alt="${attr(item.title)} interface ${index + 1}" ${eager && index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}></span>`).join('')}</div>`;
    }
    return `<div class="work-card__media ${attr(cover.className || '')}"><img src="${attr(assetHref(cover.src))}" alt="${attr(item.title)} product interface" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}></div>`;
  }

  function heroCover() {
    return `
      <div class="work-card ${attr(item.cover?.cardClassName || '')} ${attr(item.tone || '')}">
        <div class="work-card__copy">
          <p class="work-card__label">${escapeHtml(item.employer)} · ${escapeHtml(item.period)}</p>
          <h3>${escapeHtml(item.headline)}</h3>
          <p class="work-card__summary">${escapeHtml(item.deck)}</p>
          <div class="work-card__proof">${item.proof.map(proof => `<span>${escapeHtml(proof[0])}</span>`).join('')}</div>
        </div>
        ${coverMedia(item.cover, true)}
      </div>`;
  }

  const storyCopy = (key, fallback = []) => {
    const value = item.integratedStory?.[key];
    if (Array.isArray(value)) return value.filter(Boolean);
    if (value) return [value];
    return Array.isArray(fallback) ? fallback.filter(Boolean) : [fallback].filter(Boolean);
  };

  const hasNumber = value => /\d/.test(String(value || ''));

  function outcomeValue(outcome) {
    const baseline = outcome?.baseline;
    const result = outcome?.result;
    const delta = outcome?.delta;
    const shortBaseline = baseline && String(baseline).length <= 20;
    const shortResult = result && String(result).length <= 20;

    if (shortBaseline && shortResult && hasNumber(baseline) && hasNumber(result)) {
      return `${baseline} to ${result}`;
    }
    if (hasNumber(result)) return result;
    if (hasNumber(delta)) return delta;
    if (hasNumber(baseline)) return baseline;
    return result || delta || baseline || '';
  }

  function evidenceStrip(outcomes = [], className = '') {
    if (!outcomes.length) return '';
    return `<div class="story-evidence ${attr(className)}" aria-label="Evidence connected to this part of the case">
      ${outcomes.slice(0, 2).map(outcome => {
        const source = outcome.source;
        const sourceLink = source?.[1]
          ? `<a href="${attr(localizedHref(source[1]))}" target="_blank" rel="noreferrer">${escapeHtml(source[0] || label('source', 'Source'))}</a>`
          : '';
        const detail = outcome.delta || '';
        return `<article class="story-evidence__item">
          ${outcome.timeframe ? `<p>${escapeHtml(outcome.timeframe)}</p>` : ''}
          <strong>${escapeHtml(outcomeValue(outcome))}</strong>
          <h3>${escapeHtml(outcome.metric || label('measuredEvidence', 'Measured evidence'))}</h3>
          ${detail ? `<span>${escapeHtml(detail)}</span>` : ''}
          ${sourceLink}
        </article>`;
      }).join('')}
    </div>`;
  }

  function storyEvidence() {
    const outcomes = item.outcomes || [];
    const problem = outcomes.find(outcome => outcome.phase === 'problem')
      || outcomes.find(outcome => outcome.category === 'research' && hasNumber(outcome.baseline))
      || outcomes.find(outcome => outcome.category === 'benchmark' && !/time-saving/i.test(outcome.metric || ''));
    const resultPriority = { direct: 0, team: 1, research: 2, proxy: 3, scope: 4, later: 5, model: 6, benchmark: 7 };
    const result = outcomes
      .filter(outcome => outcome !== problem && hasNumber(outcomeValue(outcome)))
      .sort((a, b) => (resultPriority[a.category] ?? 9) - (resultPriority[b.category] ?? 9))
      .slice(0, 2);
    return { problem: problem ? [problem] : [], result };
  }

  function storyProblem(problemEvidence) {
    const copy = storyCopy('problemEvidence', item.problem);
    return `<section class="story-section story-section--problem" id="case-content">
      <div class="story-section__rail"><span>01</span><p>${escapeHtml(label('problemRail', 'The problem'))}</p></div>
      <div class="story-section__main">
        <h2>${escapeHtml(label('problemHeading', 'Why the existing journey was failing users and the business'))}</h2>
        <div class="story-lead">${paragraphs(copy)}</div>
        ${evidenceStrip(problemEvidence, 'story-evidence--problem')}
      </div>
    </section>`;
  }

  function compactDecisions() {
    if (!item.decisions?.length) return '';
    return `<div class="story-decisions">
      <p class="story-subhead">${escapeHtml(label('tradeoffs', 'Trade-offs that changed the direction'))}</p>
      ${item.decisions.map(([option, rejected, chosen]) => `<article>
        <h3>${escapeHtml(option)}</h3>
        <p>${escapeHtml(rejected)}</p>
        <strong>${escapeHtml(chosen)}</strong>
      </article>`).join('')}
    </div>`;
  }

  function storyWork() {
    const copy = storyCopy('workNarrative', [...(item.roleCopy || []), ...(item.insights || [])]);
    return `<section class="story-section story-section--work">
      <div class="story-section__rail"><span>02</span><p>${escapeHtml(label('researchRail', 'Research & product work'))}</p></div>
      <div class="story-section__main">
        <h2>${escapeHtml(label('framingHeading', 'How I framed the problem and chose the product direction'))}</h2>
        <div class="story-lead">${paragraphs(copy)}</div>
        ${item.insights?.length ? `<div class="story-insights"><p class="story-subhead">${escapeHtml(label('shapedSolution', 'What shaped the solution'))}</p>${list(item.insights)}</div>` : ''}
        ${compactDecisions()}
        ${item.edgeCases?.length ? `<details class="story-edge-cases"><summary>${escapeHtml(label('edgeCases', 'Critical edge cases considered'))}</summary>${list(item.edgeCases)}</details>` : ''}
      </div>
    </section>`;
  }

  function storyJourney() {
    if (!item.journey?.length) return '';
    return `<ol class="story-journey" aria-label="Shipped product journey">${item.journey.map((step, index) => `<li>
      <span>${String(index + 1).padStart(2, '0')}</span>
      <div><strong>${escapeHtml(step[0])}</strong><p>${escapeHtml(step[1])}</p></div>
    </li>`).join('')}</ol>`;
  }

  function storyMedia() {
    if (!item.media?.length) return '';
    return `<div class="story-media-stack">${item.media.map((media, index) => {
      const step = item.journey?.[index];
      return `<article class="story-visual">
        <div class="story-visual__copy">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <h3>${escapeHtml(media.title || step?.[0] || label('interactionDetail', 'Interaction detail'))}</h3>
          <p>${escapeHtml(media.caption || step?.[1] || '')}</p>
        </div>
        ${mediaFigure(media, true)}
      </article>`;
    }).join('')}</div>`;
  }

  function storySubcases() {
    if (!item.subcases?.length) return '';
    return `<section class="story-section story-section--subcases">
      <div class="story-section__rail"><span>02</span><p>${escapeHtml(label('separateCases', 'Separate product cases'))}</p></div>
      <div class="story-section__main story-section__main--wide">
        <h2>${escapeHtml(label('separateHeading', 'Different problems, decisions, and shipped outcomes'))}</h2>
        <p class="story-subcases__intro">${escapeHtml(label('separateIntro', 'These initiatives shared a design operating model, but they did not share a feature architecture or a success metric.'))}</p>
      </div>
      <div class="story-subcases">${item.subcases.map((subcase, index) => {
        const sourceLinks = (subcase.sources || []).map(([sourceLabel, href]) => `<a class="source-link" href="${attr(localizedHref(href))}" target="_blank" rel="noreferrer">${escapeHtml(sourceLabel)}</a>`).join('');
        const media = subcase.media || [];
        return `<article class="story-subcase">
          <header class="story-subcase__header">
            <div><span>${String(index + 1).padStart(2, '0')}</span><p>${escapeHtml(subcase.label || label('productCase', 'Product case'))}</p></div>
            <div><h3>${escapeHtml(subcase.title)}</h3>${subcase.period ? `<p>${escapeHtml(subcase.period)}</p>` : ''}</div>
          </header>
          <div class="story-subcase__narrative">
            <article><p>${escapeHtml(label('problem', 'Problem'))}</p><span>${escapeHtml(subcase.problem)}</span></article>
            <article><p>${escapeHtml(label('myWork', 'My work'))}</p><span>${escapeHtml(subcase.work)}</span></article>
            <article><p>Shipped result</p><span>${escapeHtml(subcase.result)}</span></article>
          </div>
          ${subcase.metrics?.length ? `<div class="story-subcase__metrics" aria-label="Evidence for ${attr(subcase.title)}">${subcase.metrics.map(([value, label]) => `<article><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></article>`).join('')}</div>` : ''}
          ${subcase.scopeNote ? `<p class="story-subcase__scope-note"><strong>${escapeHtml(label('scopeBoundary', 'Scope boundary:'))}</strong> ${escapeHtml(subcase.scopeNote)}</p>` : ''}
          ${media.length ? `<div class="story-subcase__media ${media.length > 1 ? 'story-subcase__media--two' : ''}">${media.map(entry => mediaFigure(entry)).join('')}</div>` : ''}
          ${sourceLinks ? `<div class="sources story-subcase__sources">${sourceLinks}</div>` : ''}
        </article>`;
      }).join('')}</div>
    </section>`;
  }

  function storySolution() {
    return `<section class="story-section story-section--solution">
      <div class="story-section__rail"><span>03</span><p>${escapeHtml(label('shippedRail', 'Shipped experience'))}</p></div>
      <div class="story-section__main story-section__main--wide">
        <h2>${escapeHtml(label('productModel', 'The product model, shown in the interface'))}</h2>
        ${storyJourney()}
      </div>
      ${storyMedia()}
    </section>`;
  }

  function resultSupport() {
    const entries = Object.entries(item.impact || {});
    const ownership = entries.find(([label]) => /contribution|ownership/i.test(label));
    const measurement = entries.find(([label]) => /measurement|kpi|validation/i.test(label) && label !== ownership?.[0]);
    const selected = [ownership, measurement].filter(Boolean);
    if (!selected.length) return '';
    return `<div class="story-result-support">${selected.map(([label, text]) => `<article><p>${escapeHtml(label)}</p><span>${escapeHtml(text)}</span></article>`).join('')}</div>`;
  }

  function storyResult(resultEvidence) {
    const impactFallback = Object.values(item.impact || {}).slice(0, 2);
    const copy = storyCopy('resultNarrative', impactFallback);
    const sourceLinks = (item.sources || []).map(([sourceLabel, href]) => `<a class="source-link" href="${attr(localizedHref(href))}" ${href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${escapeHtml(sourceLabel)}</a>`).join('');
    return `<section class="story-section story-section--result" id="impact">
      <div class="story-section__rail"><span>${item.subcases?.length ? '03' : '04'}</span><p>${escapeHtml(label('resultRail', 'Result & impact'))}</p></div>
      <div class="story-section__main">
        <h2>${escapeHtml(label('resultHeading', 'What changed—and how my work contributed'))}</h2>
        <div class="story-lead">${paragraphs(copy)}</div>
        ${evidenceStrip(resultEvidence, 'story-evidence--result')}
        ${resultSupport()}
        ${sourceLinks ? `<div class="sources story-sources">${sourceLinks}</div>` : ''}
      </div>
    </section>`;
  }

  function integratedNarrative() {
    const evidence = storyEvidence();
    if (item.subcases?.length) {
      return `${storyProblem(evidence.problem)}${storySubcases()}${storyResult(evidence.result)}`;
    }
    return `${storyProblem(evidence.problem)}${storyWork()}${storySolution()}${storyResult(evidence.result)}`;
  }

  function caseShowcase() {
    return `<section class="case-showcase" aria-label="${attr(item.title)} interface preview">
      ${coverMedia(item.openingMedia || item.cover, true)}
    </section>`;
  }

  const impactEntry = pattern => Object.entries(item.impact || {})
    .find(([label]) => pattern.test(label));

  function openingStory() {
    const problem = storyCopy('problemEvidence', item.problem);
    const directionCopy = storyCopy('directionNarrative', [item.deck]);
    const challengeTitle = item.sectionTitles?.challenge || item.headline;
    const directionTitle = item.sectionTitles?.direction || item.journey?.[0]?.[0] || label('productDirection', 'Product direction');

    return `<section class="product-opening" id="case-content">
      <article class="product-opening__chapter">
        <p class="product-label">${escapeHtml(label('challenge', 'Challenge'))}</p>
        <h2>${escapeHtml(challengeTitle)}</h2>
        <div class="product-copy">${paragraphs(problem)}</div>
      </article>
      <article class="product-opening__chapter">
        <p class="product-label">${escapeHtml(label('productDirection', 'Product direction'))}</p>
        <h2>${escapeHtml(directionTitle)}</h2>
        <div class="product-copy">${paragraphs(directionCopy)}</div>
      </article>
    </section>`;
  }

  function researchAndDecisions() {
    const work = storyCopy('workNarrative', item.roleCopy);
    const decisions = (item.decisions || []).slice(0, 2);
    const insights = (item.insights || []).slice(0, 3);
    const ownership = impactEntry(/my contribution|ownership/i);
    const validation = impactEntry(/validation evidence|validation result|source evidence/i);

    return `<section class="product-process">
      <div class="product-process__story">
        <p class="product-label">${escapeHtml(label('researchIteration', 'Research and iteration'))}</p>
        <h2>${escapeHtml(item.sectionTitles?.process || label('findingDirection', 'Finding the product direction'))}</h2>
        <div class="product-copy product-copy--large">${paragraphs(work)}</div>
        ${(ownership || validation) ? `<div class="product-process__proof">
          ${ownership ? `<article><span>${escapeHtml(label('myOwnership', 'My ownership'))}</span><p>${escapeHtml(ownership[1])}</p></article>` : ''}
          ${validation ? `<article><span>${escapeHtml(label('validation', 'How it was validated'))}</span><p>${escapeHtml(validation[1])}</p></article>` : ''}
        </div>` : ''}
      </div>
      <div class="product-process__evidence">
        ${insights.length ? `<div class="product-process__list"><p class="product-label">${escapeHtml(label('researchChanged', 'What the research changed'))}</p>${list(insights)}</div>` : ''}
      </div>
      ${decisions.length ? `<div class="product-decisions">
        ${decisions.map(([option, rejected, chosen]) => `<article>
          <p class="product-label">${escapeHtml(label('decision', 'Decision'))}</p>
          <h3>${escapeHtml(option)}</h3>
          <p>${escapeHtml(rejected)}</p>
          <strong>${escapeHtml(chosen)}</strong>
        </article>`).join('')}
      </div>` : ''}
    </section>`;
  }

  function productChapters() {
    const journeySteps = item.journey || [];
    const media = item.media || [];
    const count = media.length || journeySteps.length;
    if (!count) return '';

    const chapters = Array.from({ length: count }, (_, index) => {
      const start = journeySteps.length ? Math.floor(index * journeySteps.length / count) : index;
      const end = journeySteps.length ? Math.max(start + 1, Math.floor((index + 1) * journeySteps.length / count)) : start + 1;
      const steps = journeySteps.slice(start, end);
      const visual = media[index];
      const title = visual?.title || steps.map(step => step[0]).filter(Boolean).join(' / ') || `${label('productChapter', 'Product detail')} ${index + 1}`;
      const copy = [];
      if (visual?.caption) copy.push(visual.caption);
      else steps.forEach(step => { if (step?.[1]) copy.push(step[1]); });

      return `<article class="product-chapter ${index % 2 ? 'product-chapter--reverse' : ''}">
        <div class="product-chapter__copy">
          <p class="product-label">${escapeHtml(label('productChapter', 'Product chapter'))} ${String(index + 1).padStart(2, '0')}</p>
          <h3>${escapeHtml(title)}</h3>
          <div class="product-copy">${paragraphs(copy)}</div>
        </div>
        ${visual ? `<div class="product-chapter__visual">${mediaFigure(visual, true)}</div>` : ''}
      </article>`;
    }).join('');

    return `<section class="product-chapters">
      <header class="product-chapters__header">
        <p class="product-label">${escapeHtml(label('shippedExperience', 'The shipped experience'))}</p>
        <h2>${escapeHtml(item.sectionTitles?.chapters || label('productFeature', 'The product, feature by feature'))}</h2>
        <p class="product-chapters__deck"><strong>${escapeHtml(item.product)}</strong><span>${escapeHtml(item.scope)}</span></p>
      </header>
      ${chapters}
    </section>`;
  }

  function subcaseChapters() {
    if (!item.subcases?.length) return '';
    return `<section class="product-chapters product-chapters--subcases">
      <header class="product-chapters__header">
        <p class="product-label">${escapeHtml(label('productPortfolio', 'Product portfolio'))}</p>
        <h2>${escapeHtml(item.sectionTitles?.chapters || label('separateStories', 'Separate problems, separate product stories'))}</h2>
        <p class="product-chapters__deck"><strong>${escapeHtml(item.product)}</strong><span>${escapeHtml(item.scope)}</span></p>
      </header>
      ${item.subcases.map((subcase, index) => {
        const media = subcase.media || [];
        return `<article class="product-subcase">
          <header class="product-subcase__header">
            <div><p class="product-label">${escapeHtml(subcase.label || `${label('productCase', 'Product case')} ${index + 1}`)}</p><span>${escapeHtml(subcase.period || '')}</span></div>
            <h3>${escapeHtml(subcase.title)}</h3>
          </header>
          <div class="product-subcase__story">
            <article><p class="product-label">${escapeHtml(label('problem', 'Problem'))}</p><p>${escapeHtml(subcase.problem)}</p></article>
            <article><p class="product-label">${escapeHtml(label('productWork', 'Product work'))}</p><p>${escapeHtml(subcase.work)}</p></article>
            <article><p class="product-label">${escapeHtml(label('outcome', 'Outcome'))}</p><p>${escapeHtml(subcase.result)}</p></article>
          </div>
          ${media.length ? `<div class="product-subcase__media">${media.map(entry => mediaFigure(entry, true)).join('')}</div>` : ''}
        </article>`;
      }).join('')}
    </section>`;
  }

  function finalMetrics() {
    const proof = (item.proof || [])
      .filter(([value]) => value && String(value).trim())
      .slice(0, 3)
      .map(([value, proofLabel]) => ({ value, label: proofLabel || label('evidenceWork', 'Evidence from the work') }));
    if (proof.length) return proof;

    const priority = { direct: 0, research: 1, team: 2, scope: 3, later: 4 };
    return (item.outcomes || [])
      .filter(outcome => ['direct', 'research', 'team', 'scope', 'later'].includes(outcome.category) && hasNumber(outcomeValue(outcome)))
      .sort((a, b) => (priority[a.category] ?? 9) - (priority[b.category] ?? 9))
      .slice(0, 3)
      .map(outcome => ({ value: outcomeValue(outcome), label: outcome.metric }));
  }

  function launchReview() {
    const review = item.launchReview;
    if (!review?.rows?.length) return '';

    return `<div class="launch-review">
      <header class="launch-review__header">
        <p class="product-label">${escapeHtml(review.label || label('postLaunch', 'Post-launch analytics'))}</p>
        <h3>${escapeHtml(review.heading || label('evaluation', 'How the shipped product should be evaluated'))}</h3>
        ${review.intro ? `<p>${escapeHtml(review.intro)}</p>` : ''}
      </header>
      <div class="launch-review__table" role="table" aria-label="Post-launch analytics and evidence status">
        <div class="launch-review__row launch-review__row--head" role="row">
          <span role="columnheader">${escapeHtml(label('metric', 'Metric'))}</span>
          <span role="columnheader">${escapeHtml(label('result', 'Result'))}</span>
          <span role="columnheader">${escapeHtml(label('evidence', 'Evidence'))}</span>
          <span role="columnheader">${escapeHtml(label('mechanism', 'Product mechanism'))}</span>
        </div>
        ${review.rows.map(([metric, result, evidence, mechanism]) => `<div class="launch-review__row" role="row">
          <strong role="cell">${escapeHtml(metric)}</strong>
          <b role="cell">${escapeHtml(result)}</b>
          <span role="cell">${escapeHtml(evidence)}</span>
          <p role="cell">${escapeHtml(mechanism)}</p>
        </div>`).join('')}
      </div>
      ${review.note ? `<p class="launch-review__note">${escapeHtml(review.note)}</p>` : ''}
    </div>`;
  }

  function outcomeFinale() {
    const copy = storyCopy('resultNarrative', Object.values(item.impact || {}).slice(0, 2));
    const sourceLinks = (item.sources || []).slice(0, 6).map(([sourceLabel, href]) => `<a href="${attr(localizedHref(href))}" ${href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${escapeHtml(sourceLabel)}</a>`).join('');

    return `<section class="product-outcomes" id="impact">
      <div class="product-outcomes__intro">
        <p class="product-label">${escapeHtml(label('result', 'Result'))}</p>
        <h2>${escapeHtml(item.sectionTitles?.result || label('resultHeading', 'What changed after the work'))}</h2>
        <div class="product-copy product-copy--large">${paragraphs(copy)}</div>
      </div>
      ${sourceLinks ? `<div class="product-outcomes__sources"><span>${escapeHtml(label('sources', 'Sources'))}</span>${sourceLinks}</div>` : ''}
    </section>`;
  }

  function editorialNarrative() {
    return `${openingStory()}${researchAndDecisions()}${item.subcases?.length ? subcaseChapters() : productChapters()}${outcomeFinale()}`;
  }

  function decisions() {
    if (!item.decisions?.length) return '';
    return `<section class="case-section">
      <div class="case-section__grid">
        <p class="case-section__label">Alternatives and decisions</p>
        <div class="case-section__body">
          <h2>What I considered—and why the product took this direction</h2>
          <div class="decision-list">${item.decisions.map(([option, rejected, chosen]) => `
            <article class="decision">
              <h3>${escapeHtml(option)}</h3>
              <p>${escapeHtml(rejected)} <strong>${escapeHtml(chosen)}</strong></p>
            </article>`).join('')}</div>
        </div>
      </div>
    </section>`;
  }

  function journey() {
    if (!item.journey?.length) return '';
    return `<section class="case-section case-section--dark">
      <div class="case-section__grid">
        <p class="case-section__label">Delivered product model</p>
        <div class="case-section__body">
          <h2>How the experience works end to end</h2>
          <div class="journey">${item.journey.map((step, index) => `
            <article><span>0${index + 1}</span><h3>${escapeHtml(step[0])}</h3><p>${escapeHtml(step[1])}</p></article>`).join('')}</div>
        </div>
      </div>
    </section>`;
  }

  function mediaFigure(media, compact = false) {
    const integrity = media.integrity ? `<span class="integrity-label">${escapeHtml(media.integrity)}.</span>` : '';
    let content = '';
    if (media.type === 'video') {
      content = `<div class="media-frame ${media.dark ? 'media-frame--dark' : ''} ${attr(media.className || '')}"><video controls muted playsinline preload="metadata" poster="${attr(assetHref(media.poster || ''))}"><source src="${attr(assetHref(media.src))}" type="video/mp4"></video></div>`;
    } else if (media.type === 'phones') {
      content = `<div class="media-frame media-frame--phones ${media.dark ? 'media-frame--dark' : ''} ${attr(media.className || '')}">${media.srcs.map((src, index) => `<img src="${attr(assetHref(src))}" alt="${attr(item.title)} interface step ${index + 1}" loading="lazy">`).join('')}</div>`;
    } else if (media.type === 'cropPhones') {
      content = `<div class="media-frame media-frame--koshelek-crops ${media.dark ? 'media-frame--dark' : ''} ${attr(media.className || '')}">${media.srcs.map((src, index) => `<span class="koshelek-screen-crop"><img src="${attr(assetHref(src))}" alt="${attr(item.title)} interface step ${index + 1}" loading="lazy"></span>`).join('')}</div>`;
    } else {
      content = `<div class="media-frame ${media.dark ? 'media-frame--dark' : ''} ${attr(media.className || '')}"><img src="${attr(assetHref(media.src))}" alt="${attr(media.caption || item.title)}" loading="lazy"></div>`;
    }
    const caption = compact ? integrity : `${integrity}${escapeHtml(media.caption || '')}`;
    return `<figure class="media-figure">${content}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
  }

  function mediaGallery() {
    if (!item.media?.length) return '';
    return `<section aria-label="Product interface examples">
      <div class="section-intro"><p>Interface and interaction</p><h2>The screens follow the journey from the first user action to the final outcome.</h2></div>
      <div class="media-stack">${item.media.map(mediaFigure).join('')}</div>
    </section>`;
  }

  function edgeCases() {
    if (!item.edgeCases?.length) return '';
    return `<section class="case-section">
      <div class="case-section__grid">
        <p class="case-section__label">Edge cases</p>
        <div class="case-section__body"><h2>The product had to work beyond the happy path</h2>${list(item.edgeCases)}</div>
      </div>
    </section>`;
  }

  function impact() {
    const rows = Object.entries(item.impact || {}).map(([label, text]) => `<tr><th scope="row">${escapeHtml(label)}</th><td>${escapeHtml(text)}</td></tr>`).join('');
    const sourceLinks = (item.sources || []).map(([sourceLabel, href]) => `<a class="source-link" href="${attr(localizedHref(href))}" ${href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${escapeHtml(sourceLabel)}</a>`).join('');
    const impactId = item.outcomes?.length || item.metrics?.items?.length ? 'impact-details' : 'impact';
    const label = item.outcomes?.length ? 'Evidence record' : 'Impact and evidence';
    const heading = item.outcomes?.length
      ? 'Ownership, supporting evidence, and the measurement record'
      : 'What I changed and how the result was evaluated';
    return `<section class="case-section" id="${impactId}">
      <div class="case-section__grid">
        <p class="case-section__label">${label}</p>
        <div class="case-section__body">
          <h2>${heading}</h2>
          <table class="impact-table"><tbody>${rows}</tbody></table>
          ${sourceLinks ? `<div class="sources">${sourceLinks}</div>` : ''}
        </div>
      </div>
    </section>`;
  }

  function relatedPaper() {
    if (!item.relatedPaper) return '';
    return `<section class="case-section case-section--dark">
      <div class="case-section__grid">
        <p class="case-section__label">${escapeHtml(label('relatedResearch', 'Related research'))}</p>
        <div class="case-section__body">
          <h2>Trust-Calibrated Code Review</h2>
          <p>${escapeHtml(label('paperCopy', 'My later work with Lund University turns the adjacent problem—reviewing multi-file agent changes—into a validated IDE prototype.'))}</p>
          <figure class="media-figure" style="margin-top:40px">
            <div class="media-frame media-frame--dark"><img src="${assetHref('assets/code-review-prototype-ai-judge.png')}" alt="Trust-Calibrated Code Review paper prototype" loading="lazy"></div>
            <figcaption style="color:#aaa">${isRu ? '17 участников discovery · 43 участника валидации · 7 дизайн-конструктов' : '17 discovery participants · 43 validation participants · 7 design constructs'}</figcaption>
          </figure>
          <div class="sources"><a class="source-link" style="border-color:#555" href="${caseLink('codereview')}">${escapeHtml(label('viewResearch', 'View research case'))}</a><a class="source-link" style="border-color:#555" href="https://arxiv.org/abs/2606.01969" target="_blank" rel="noreferrer">${escapeHtml(label('readPaper', 'Read the paper'))}</a></div>
        </div>
      </div>
    </section>`;
  }

  function nextCase() {
    const currentIndex = Math.max(0, order.indexOf(id));
    const nextId = order[(currentIndex + 1) % order.length];
    const next = cases[nextId];
    if (item.relatedPaper && nextId === 'codereview') return '';
    const nextTitle = item.nextCaseTitle || next.title;
    return `<section class="next-case"><p>${escapeHtml(label('nextCase', 'Next case'))}</p><a href="${caseLink(nextId)}"><h2>${escapeHtml(nextTitle)}</h2><span>${escapeHtml(label('viewCase', 'View case'))}</span></a></section>`;
  }

  function primaryLinks() {
    if (!item.primaryLinks?.length) return '';
    return `<div class="case-hero__actions">${item.primaryLinks.map(([linkLabel, href], index) =>
      `<a class="button ${index === 0 ? 'button--solid' : ''}" href="${attr(localizedHref(href))}" target="_blank" rel="noreferrer">${escapeHtml(linkLabel)}</a>`
    ).join('')}</div>`;
  }

  setMetadata();
  root.innerHTML = `
    <div class="page-shell case-${attr(id)}">
      <section class="case-hero">
        <div><p class="eyebrow">${escapeHtml(item.employer)}</p><h1>${escapeHtml(item.title)}</h1></div>
        <div class="case-hero__intro">
          <p class="case-hero__deck">${escapeHtml(item.deck)}</p>
          <dl class="case-meta">
            <div><dt>${escapeHtml(label('role', 'Role'))}</dt><dd>${escapeHtml(item.role)}</dd></div>
            <div><dt>${escapeHtml(label('period', 'Period'))}</dt><dd>${escapeHtml(item.period)}</dd></div>
            <div><dt>${escapeHtml(label('scope', 'Scope'))}</dt><dd>${escapeHtml(item.scope)}</dd></div>
            <div><dt>${escapeHtml(label('product', 'Product'))}</dt><dd><a href="${attr(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.product)}</a></dd></div>
          </dl>
          ${primaryLinks()}
        </div>
      </section>

      ${caseShowcase()}
      ${editorialNarrative()}
      ${relatedPaper()}
      ${nextCase()}
    </div>`;
})();
