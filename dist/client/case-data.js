window.CASE_ORDER = [
  'agentic', 'codereview', 'vscode', 'resharper', 'rider',
  'ton', 'top', 'tonwallet', 'autodeal', 'koshelek', 'simple', 'sbermobile', 'alfa'
];

window.CASES = {
  agentic: {
    employer: 'JetBrains · AI R&D',
    title: 'Agentic Markdown',
    headline: 'A reviewable workspace for agentic work',
    deck: 'I took a new agentic interaction model from problem research to a working coded prototype, moderated validation, and a public JetBrains waitlist campaign—before the company committed to full engineering investment.',
    period: '2025—present',
    role: 'Product Design Lead · R&D owner',
    scope: 'Product discovery, research, interaction design, coded prototyping, moderated testing, go-to-market',
    product: 'Public prototype and waitlist',
    integratedStory: {
      problemEvidence: 'Agentic work was being managed as chat history: the original goal disappeared inside the transcript, while the result was reviewed away from its acceptance criteria. That is a material product problem in a market where 46% of developers distrust AI accuracy, only 33% trust it, and 66% say AI output is often “almost right”.',
      workNarrative: 'I reframed the opportunity from “improve the chat” to “create a persistent object for agentic work”. I ran problem research, defined the interaction model and its guidance, built a reusable prototype design system, and coded the full goal to plan to execution to feedback to review journey. Moderated sessions let me refine the model before I prepared a public campaign with Marketing.',
      resultNarrative: 'The work moved from an internal hypothesis to a working public prototype and waitlist before JetBrains committed a production team. My direct result was reducing product and engineering decision risk: the team could observe comprehension, steering, and review in a realistic workflow and then test market demand. The 13-point trust gap defines the market opportunity for making agent work easier to inspect, steer, and trust.'
    },
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7490855432287158273/',
    tone: 'tone-purple',
    cover: { type: 'image', src: 'assets/agentic-cover-review-ready.png?v=2', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [
      ['13 pp AI trust gap', '46% distrust versus 33% trust in AI accuracy'],
      ['66% “almost right”', 'The market problem targeted by a persistent review artifact'],
      ['Prototype + waitlist', 'Public product evidence before full engineering investment']
    ],
    outcomes: [
      {
        category: 'proxy',
        metric: 'Evidence before full engineering investment',
        baseline: 'Internal concept',
        result: '5-stage public prototype + waitlist',
        timeframe: '2025',
        population: 'Developers evaluating a new agentic workflow',
        intervention: 'I combined problem research, product framing, an agent UX guideline and reusable design system, coded prototyping, moderated validation, and launch preparation in one R&D cycle.',
        mechanism: 'A working prototype made goal comprehension, steering, and review observable before a production build; the public waitlist added a demand signal before roadmap commitment.',
        attribution: 'I owned the research-to-prototype-to-campaign cycle directly; the next decision KPI is prototype-to-waitlist conversion and qualified demand.',
        source: ['Public prototype campaign', 'https://www.linkedin.com/feed/update/urn:li:activity:7490855432287158273/']
      },
      {
        category: 'benchmark',
        metric: 'Trust gap in AI-generated output',
        baseline: '33% trust accuracy',
        result: '46% distrust accuracy',
        delta: '+13 pp · 1.39×',
        timeframe: 'Stack Overflow Developer Survey · 2025',
        population: '33,244 developers answering the AI accuracy question',
        intervention: 'I moved the product away from an opaque chat transcript and made goal, acceptance criteria, plan, execution state, feedback, and review one persistent artifact.',
        mechanism: 'Persistent intent and explicit review make partial correctness visible earlier and give developers a concrete basis for steering or rejecting agent work.',
        evidence: '46% distrusted AI accuracy versus 33% who trusted it; 66% named “almost right” output as a top frustration and 45% said debugging AI code took more time.',
        attribution: 'This market evidence quantifies the problem my prototype targeted; the shipped prototype and public waitlist are my direct results.',
        source: ['Stack Overflow Developer Survey 2025', 'https://survey.stackoverflow.co/2025/ai']
      }
    ],
    problem: [
      'Developers already keep persistent instructions for AI agents in files such as AGENTS.md, but most agent interaction still happens in chat. The goal becomes buried in the transcript, context spreads across messages, and the final result is separated from the original intent.',
      'The product risk was equally important: a novel agentic concept could become an expensive roadmap item before the underlying problem and market interest were validated.'
    ],
    roleCopy: [
      'I combined several responsibilities in one R&D cycle. As a researcher, I ran problem interviews and identified the product problem. As a product designer, I framed the interaction model and built a working prototype for rapid hypothesis testing. I then ran moderated sessions, refined the solution, prepared the final concept, and partnered with Marketing on the public launch.',
      'Research and Product Management helped shape the validation method; Marketing partnered with me on campaign positioning and execution.'
    ],
    insights: [
      'The original goal and acceptance criteria need to remain visible throughout execution.',
      'Users need a reviewable artifact outside the chat transcript—not just better history search.',
      'Progress and intermediate feedback must stay connected to the original intent.',
      'A working multi-step prototype was required because static screens could not reproduce the loss of control.'
    ],
    decisions: [
      ['Improve chat with more context and history search', 'Rejected. A better transcript still does not create a formal artifact that can be reviewed independently from the conversation.', 'I used markdown as the persistent product object: goal, plan, progress, feedback, and result stay in one inspectable place.'],
      ['Design the final UI and move directly into engineering', 'Rejected. It would commit a delivery team before validating the product model.', 'I introduced rapid coded prototyping so the complete workflow could be tested in weeks rather than after a production build.'],
      ['Keep the concept internal', 'Rejected after moderated validation.', 'I worked with Marketing on a public prototype campaign and waitlist to create a stronger demand signal.']
    ],
    journey: [
      ['Frame', 'Define a persistent goal and explicit acceptance criteria.'],
      ['Plan', 'Make the agent plan visible and connected to project context.'],
      ['Execute', 'Show progress and allow feedback before the task is finished.'],
      ['Review', 'Evaluate changes against the original intent and request rework.']
    ],
    media: [
      { type: 'video', src: 'assets/jetbrains-agentic-markdown.mp4', poster: 'assets/agentic-cover-review-ready.png?v=2', dark: true, integrity: 'Working prototype · 2025', caption: 'The public prototype keeps the goal, acceptance criteria, agent progress, and review in one workspace.' },
      { type: 'image', src: 'assets/agentic-cover-review-ready.png?v=2', dark: true, integrity: 'Working prototype · 2025', caption: 'A persistent artifact lets the developer evaluate the result against the original intent instead of searching a transcript.' }
    ],
    edgeCases: [
      'Incomplete or ambiguous goals and acceptance criteria',
      'Changing direction while the agent is executing',
      'Feedback before completion and partial satisfaction of the goal',
      'Losing track of agent state or returning from the artifact to chat'
    ],
    impact: {
      'My contribution': 'Owned the cycle from problem research and product framing to a working coded prototype, moderated validation, and public launch.',
      'Validation evidence': 'Moderated developer sessions tested the complete multi-step interaction before production engineering began.',
      'Product result': 'JetBrains published a market-facing prototype and opened a waitlist before committing to a full production build.',
      'Decision impact': 'The team could evaluate user comprehension and market demand before making the larger roadmap investment.'
    },
    sources: [
      ['Public prototype campaign', 'https://www.linkedin.com/feed/update/urn:li:activity:7490855432287158273/']
    ],
    relatedPaper: true
  },

  rider: {
    employer: 'JetBrains · Rider',
    title: 'Rider',
    headline: 'Three independent product stories inside Rider',
    deck: 'I joined Rider as Product Design Lead and built its design practice from day one. This case now separates three different bodies of work: the design operating model, Rider-specific AI workflows, and the Monitoring tool window.',
    period: '2024—2026',
    role: 'Product Design Lead · from day one',
    scope: 'Design leadership, Rider core UX, AI experience, performance monitoring, research, mentoring, release quality',
    product: 'JetBrains Rider',
    integratedStory: {
      problemEvidence: 'Rider is not one linear workflow. It combines a mature .NET IDE, game-development tooling, debugging and profiling, and a growing AI layer. The portfolio previously collapsed independent releases into one story, which made the relationship between my leadership work and individual product features impossible to understand. The real challenge was twofold: build a repeatable design practice for the product, while treating AI and performance monitoring as separate problems with their own users, journeys, and success criteria.',
      workNarrative: 'I joined as Product Design Lead and built the practice from day one: discovery, validation, delivery partnership, and release review became one operating model. Within that system I remained hands-on on distinct product tracks. Rider AI focused on context, control, and reviewing generated changes inside coding workflows. Monitoring focused on moving from passive runtime signals to an actionable diagnosis path. They shared a design-quality process—not a user problem, feature architecture, or outcome metric.',
      resultNarrative: 'The direct leadership result was a repeatable design practice and three designers developed toward end-to-end product ownership. The two feature stories produced different shipped outcomes: a Rider-specific AI interaction model spanning completion, contextual actions, chat, and agent work; and a Monitoring journey connecting CPU, memory, and GC signals to profiler evidence and the responsible method. During my Rider period, the product’s surveyed primary-IDE share increased from 35% to 44%; that is a team-level adoption result, not a metric assigned to either feature alone.'
    },
    url: 'https://www.jetbrains.com/rider/',
    tone: 'tone-blue',
    cover: { type: 'image', src: 'assets/rider-current-code-completion.png', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [
      ['35% to 44%', 'Surveyed primary-IDE share during my leadership period'],
      ['3 designers', 'Mentored toward end-to-end product ownership'],
      ['3 separate stories', 'Design practice · Rider AI · Monitoring']
    ],
    metrics: {
      kind: 'product',
      eyebrow: 'Product adoption · 2024—2025',
      heading: 'Rider gained 9 percentage points of primary-IDE share during my product design leadership',
      summary: 'JetBrains’ annual .NET survey measured the product-level change among C# developers. My direct scope was Rider’s product design operating model and hands-on leadership on independent AI and Monitoring tracks.',
      items: [
        { type: '2024 baseline', value: '35%', label: 'C# developers naming Rider their primary IDE', source: ['JetBrains .NET survey', 'https://lp.jetbrains.com/the-state-of-dotnet-2025/'] },
        { type: '2025 result', value: '44%', label: 'C# developers naming Rider their primary IDE', source: ['JetBrains .NET survey', 'https://lp.jetbrains.com/the-state-of-dotnet-2025/'] },
        { type: 'Year-over-year change', value: '+9 pp', label: 'Primary-IDE share', detail: 'Measured across the period in which I led Rider product design.', source: ['JetBrains .NET survey', 'https://lp.jetbrains.com/the-state-of-dotnet-2025/'] }
      ]
    },
    outcomes: [
      {
        category: 'team',
        metric: 'Rider primary-IDE adoption among surveyed C# developers',
        baseline: '35%',
        result: '44%',
        delta: '+9 pp · +25.7% relative',
        timeframe: '2024 to 2025',
        population: 'C# developers in the JetBrains State of .NET survey',
        intervention: 'I built Rider\'s product design operating model, developed three designers, and led separate product work on Rider AI and Monitoring.',
        mechanism: 'The operating model moved discovery and validation upstream and gave independent feature teams a consistent way to frame, test, deliver, and review product decisions.',
        attribution: 'I directly owned the design practice and the product-design contribution described in the subcases. The adoption shift is the Rider team\'s outcome; engineering, marketing, and the 2024 non-commercial licence change also contributed.',
        source: ['JetBrains State of .NET 2025', 'https://lp.jetbrains.com/the-state-of-dotnet-2025/']
      },
      {
        category: 'direct',
        metric: 'Product design capability built inside Rider',
        result: '3 designers · 1 operating model',
        timeframe: '2024—2026',
        population: 'Rider product-design practice',
        intervention: 'I introduced one discovery to validation to delivery to release-review process and mentored designers through full product-area ownership.',
        mechanism: 'The operating model moved design quality upstream and created consistent decision and review criteria across releases.',
        attribution: 'Direct leadership scope: the process and team development were under my ownership.'
      }
    ],
    problem: [
      'Rider is a mature cross-platform IDE developed by multiple teams. Design leadership, AI interaction, and performance monitoring are different product problems and should not be presented as one feature narrative.',
      'The shared layer was the product-design operating model: each initiative still required its own discovery, interaction model, edge cases, release evidence, and success metrics.'
    ],
    roleCopy: [
      'I worked as the product design lead for Rider from the beginning of my scope: I built the operating model, embedded discovery and validation into product delivery, set review standards, and developed three product designers through structured framing, critique, and expanding ownership.',
      'I remained hands-on on Rider AI and Monitoring. The sections below separate my contribution and the shipped product evidence for each initiative.'
    ],
    insights: [
      'A design operating model can be shared across teams without pretending that their product problems are the same.',
      'Rider AI needed a consistent model for context, state, user control, and reviewing generated changes.',
      'Monitoring needed a diagnostic hierarchy from lightweight signals to profiler evidence and source code.',
      'Mentoring was tied to real product ownership: each designer learned to frame, validate, deliver, and review a product area.'
    ],
    decisions: [
      ['Describe all Rider releases as one connected ecosystem case', 'Rejected. It creates false causality between unrelated product features.', 'The portfolio now separates leadership, Rider AI, and Monitoring into independent product stories.'],
      ['Use design as a final review gate', 'Replaced with an operating model.', 'Problem framing, research, prototyping, handoff, design review, and release-quality review became one repeatable flow.']
    ],
    subcases: [
      {
        label: 'Leadership case',
        title: 'Establishing Rider\'s product design practice from day one',
        period: '2024—2026',
        problem: 'Design entered a large, multi-team IDE inconsistently and could arrive after the product direction was already fixed. That limited research, increased late rework, and made quality dependent on individual teams rather than a repeatable product process.',
        work: 'I joined as Product Design Lead, introduced one discovery to validation to delivery to release-review model, established critique and quality standards, and mentored three designers through expanding end-to-end ownership. Game development, core IDE, AI, and diagnostic work remained separate product areas inside the same operating system.',
        result: 'Three designers developed broader product ownership and teams gained one repeatable way to move from evidence to a reviewed release. During my Rider period, Rider\'s surveyed primary-IDE share grew from 35% to 44%; this is a whole-product team outcome, not a metric attributed to the process alone.',
        metrics: [['3', 'Designers mentored'], ['1', 'Discovery-to-release operating model'], ['35% to 44%', 'Surveyed primary-IDE share · team outcome']],
        media: [
          { type: 'image', src: 'assets/rider-official-islands-ui.png', dark: true, integrity: 'Rider product context · 2025', caption: 'A dense IDE requires design decisions to be made in the context of the complete workspace—not as isolated feature mockups.' }
        ],
        sources: [['State of .NET 2025', 'https://lp.jetbrains.com/the-state-of-dotnet-2025/']]
      },
      {
        label: 'Product case 01',
        title: 'A Rider-specific interaction model for AI',
        period: '2023—2025',
        problem: 'AI was entering Rider through code completion, contextual actions, chat, and longer-running agents. If each surface handled context, progress, review, and application differently, developers would have to relearn control at every level of autonomy.',
        work: 'I treated AI as part of the coding workflow rather than a separate mode. The interaction model connected four levels of assistance: low-interruption completion, an action beside the relevant code or error, project-aware conversation, and agent work with visible task state and a review step. I defined the principles for context, state, interruption, apply/reject, and recovery inside Rider.',
        result: 'Rider shipped the complete ladder from embedded assistance to Junie inside the IDE. The official 2025.2 release reported Junie running up to 30% faster and added remote-development support. My contribution was the interaction and control model; the speed improvement was an engineering and product-team release result.',
        metrics: [['4', 'Levels of AI assistance'], ['1', 'Shared model for context and control'], ['Up to 30%', 'Junie speed improvement · team release']],
        scopeNote: 'VS Code AI Assistant and ReSharper AI are not part of this subcase; they have separate portfolio cases.',
        media: [
          { type: 'image', src: 'assets/rider-current-code-completion.png', dark: true, integrity: 'Rider AI Assistant · shipped interface', caption: 'Contextual AI actions and chat remain attached to the code and preserve an explicit apply or reject decision.' },
          { type: 'image', src: 'assets/rider-official-junie-2025-2.png', dark: true, integrity: 'Rider 2025.2 · Junie', caption: 'Agent work introduces delegation, execution state, and review without turning Rider into a separate AI-only workspace.' }
        ],
        sources: [['Rider 2024.1', 'https://www.jetbrains.com/rider/whatsnew/2024-1/'], ['Rider 2025.2', 'https://www.jetbrains.com/rider/whatsnew/2025-2/']]
      },
      {
        label: 'Product case 02',
        title: 'Monitoring: from runtime signals to the responsible method',
        period: '2024.1—2025.2',
        problem: 'Developers could see that an application was slow or memory-heavy, but diagnosing the cause required switching between runtime metrics, a profiler snapshot, call stacks, and source code. A passive dashboard would expose data without helping users decide what to investigate next.',
        work: 'I worked on Monitoring as a standalone diagnostic journey: CPU, memory, and garbage-collection charts provide the lightweight overview; detected issues and selected time ranges create an investigation target; the next action opens call-stack evidence in the bundled profiler and navigates to the responsible method. The interaction had to support progressive depth without forcing every run into a full profiling session.',
        result: 'Monitoring launched for .NET in Rider 2024.1, expanded in 2024.2 to C++, Unity, and Unreal Engine contexts, and was reworked in 2025.2 with interactive CPU, memory, and GC charts, automatic Windows findings, and a direct path into dotTrace. These are shipped capability results; public adoption or time-to-diagnosis telemetry has not been published.',
        metrics: [['3', 'Primary runtime signal families'], ['3', 'Additional contexts: C++ · Unity · Unreal'], ['1', 'Finding-to-method investigation path']],
        scopeNote: 'The OpenTelemetry plugin is a separate Rider 2025.2 product and is not presented as part of Monitoring.',
        media: [
          { type: 'image', src: 'assets/rider-official-monitoring-2025-2.png', dark: true, integrity: 'Rider 2025.2 · Monitoring tool window', caption: 'Charts, detected issues, profiler evidence, and source navigation form one progressive diagnosis flow.' }
        ],
        sources: [['Rider 2024.1', 'https://www.jetbrains.com/rider/whatsnew/2024-1/'], ['Rider 2024.2', 'https://www.jetbrains.com/pages/rider/whatsnew/2024-2/'], ['Rider 2025.2', 'https://www.jetbrains.com/rider/whatsnew/2025-2/']]
      }
    ],
    edgeCases: [
      'AI: incomplete or stale project context, partial application, interruption, and recovery',
      'Monitoring: short-lived spikes, noisy signals, unsupported runtimes, and profiling overhead',
      'Leadership: different team maturity, platform constraints, and release cadences'
    ],
    impact: {
      'My contribution': 'Built Rider’s product design operating model, mentored three designers, and led the design contribution on separate Rider AI and Monitoring initiatives.',
      'Team result': 'One discovery-to-release process connected research, prototyping, delivery review, and release-quality review across the product area.',
      'Product result': 'Rider gained a coherent AI control model and a separate progressive Monitoring journey from lightweight signals to profiler evidence.',
      'Measured adoption': 'Rider’s surveyed primary-IDE share among C# developers increased from 35% in 2024 to 44% in 2025 (+9 percentage points).',
      'Measurement framework': 'Release reviews tracked AI activation and repeat use, task completion, accepted changes, recovery, support demand, and design lead time.'
    },
    sources: [
      ['Rider product', 'https://www.jetbrains.com/rider/'],
      ['Rider 2024.1 release', 'https://www.jetbrains.com/rider/whatsnew/2024-1/'],
      ['Rider 2024.2 release', 'https://www.jetbrains.com/pages/rider/whatsnew/2024-2/'],
      ['Rider 2025.2 release', 'https://www.jetbrains.com/rider/whatsnew/2025-2/'],
      ['State of .NET 2025', 'https://lp.jetbrains.com/the-state-of-dotnet-2025/']
    ]
  },

  autodeal: {
    employer: 'Yandex · Auto.ru',
    title: 'Safe Deal',
    headline: 'One transaction, two coordinated journeys',
    deck: 'I designed the linked buyer and seller journey behind Auto.ru Safe Deal. The product launched in October 2021 with the complete online transaction reported at 15 minutes or less.',
    period: '2020—2021',
    role: 'Lead Product Designer',
    scope: 'Two-sided marketplace UX, state modelling, prototyping, validation, desktop delivery',
    product: 'Auto.ru Safe Deal',
    integratedStory: {
      problemEvidence: 'Auto.ru helped a buyer find a car and contact its seller, but the transaction itself still moved through cash, manual document checks, and disconnected coordination. Tinkoff reported that more than 60% of online auto loans were cashed out, while an Auto.ru survey found that one in five people had encountered—or knew someone who had encountered—fraud in a private-car purchase.',
      workNarrative: 'I separated the transaction into two coordinated workspaces instead of forcing both participants through the same form. The buyer received four preparation tasks; the seller received five, including vehicle and bank details. A shared status layer in the deal page and chat always showed what the other side was doing and who needed to act next. I also designed parallel requests, bank checks, data correction, cancellation, and non-response states.',
      resultNarrative: 'Auto.ru and Tinkoff launched Safe Deal in October 2021. The shipped service connected document recognition, vehicle checks, contract preparation, protected payment, handover, cancellation, and recovery in one online journey reported at 15 minutes or less. I owned the two-sided interaction model shown in this case; the launch result belongs to the cross-functional product team.'
    },
    url: 'https://auto.ru/',
    tone: 'tone-red',
    cover: { type: 'image', src: 'assets/auto-safe-deal-chat-en.png', className: 'work-card__media--clean-ui work-card__media--editorial-interface work-card__media--auto-editorial' },
    proof: [
      ['≤15 min', 'Team launch outcome · end-to-end online transaction'],
      ['>60%', 'Problem baseline · online auto loans cashed out'],
      ['1 in 5', 'Problem evidence · direct or close-network fraud exposure']
    ],
    metrics: {
      kind: 'launch',
      eyebrow: 'Shipped product outcome · October 2021',
      heading: 'A private-car transaction moved from fragmented offline coordination to one online journey completed in 15 minutes or less',
      summary: 'The completion-time result is published launch evidence. The two risk figures are pre-launch baselines, not uplift claims.',
      items: [
        { type: 'Team launch outcome', value: '≤15 min', label: 'End-to-end online transaction', detail: 'Published by Tinkoff and Auto.ru at launch in October 2021.' },
        { type: 'Problem baseline', value: '>60%', label: 'Online auto loans previously cashed out', detail: 'Cash handling introduced delay and risk before the integrated payment journey.' },
        { type: 'Problem evidence', value: '1 in 5', label: 'People exposed to private-car fraud directly or through someone close', detail: 'Reported from an Auto.ru survey at launch.' }
      ]
    },
    launchReview: {
      label: 'Post-launch analytics',
      heading: 'The published outcome is strong; the remaining funnel needs internal telemetry',
      intro: 'I separate what the launch publicly proved from the metrics that would be required to claim conversion, fraud, or support uplift.',
      rows: [
        ['Time to completed deal', '≤15 min', 'Published team outcome', 'Shared status, recognition, contract preparation, protected payment, and handover removed manual coordination.'],
        ['On-platform completion', 'Not public', 'Primary funnel KPI', 'Request → seller acceptance → verified data → funded account → confirmed handover.'],
        ['Fraud and dispute rate', 'Not public', 'Risk KPI', 'Identity checks, vehicle checks, escrow, and explicit release conditions target preventable loss.'],
        ['Support contacts per deal', 'Not public', 'Operational KPI', 'Waiting, rejection, correction, cancellation, and recovery states target uncertainty and manual support.']
      ],
      note: 'Public sources do not disclose conversion, payment-success, fraud-reduction, dispute, cancellation, or support deltas. Those values should only be added from an internal launch dashboard or experiment readout.'
    },
    outcomes: [
      {
        category: 'research',
        phase: 'problem',
        metric: 'Online auto loans cashed out before the integrated journey',
        baseline: '>60%',
        timeframe: 'Problem baseline · 2021',
        intervention: 'The service replaced a cash-dependent handoff with protected funds held until confirmed handover.',
        mechanism: 'A nominal account reduces the need to order, carry, verify, and exchange a large amount of cash.',
        attribution: 'Published Tinkoff baseline; not a post-launch uplift.',
        source: ['Safe Deal launch coverage', 'https://www.dp.ru/a/2021/10/13/Tinkoff_i_Avto_ru_zapust']
      },
      {
        category: 'research',
        phase: 'problem',
        metric: 'People with direct or close-network fraud exposure',
        baseline: '1 in 5',
        timeframe: 'Problem evidence · 2021',
        intervention: 'The product added identity checks, vehicle checks, protected funds, and explicit confirmation.',
        mechanism: 'Verified participants and conditional release reduce ambiguous or irreversible transfers.',
        attribution: 'Auto.ru survey reported at launch; not a measured reduction.',
        source: ['Safe Deal launch coverage', 'https://www.dp.ru/a/2021/10/13/Tinkoff_i_Avto_ru_zapust']
      },
      {
        category: 'scope',
        metric: 'Participant workspaces in one synchronized transaction',
        result: '2 roles',
        timeframe: 'Designed scope · 2020—2021',
        intervention: 'I defined separate buyer and seller task models and connected them through shared status.',
        mechanism: 'Each side sees its own next action without losing visibility into the other participant’s progress.',
        attribution: 'Direct design contribution, verified in the source interface frames.'
      },
      {
        category: 'direct',
        metric: 'Distinct preparation tasks modelled in the interface',
        result: '4 buyer · 5 seller',
        timeframe: 'Designed scope · 2020—2021',
        intervention: 'I mapped the information and documents required from each participant instead of duplicating a single generic form.',
        mechanism: 'Asymmetric checklists reduce irrelevant input while the shared progress layer preserves coordination.',
        attribution: 'Direct design scope, visible in the buyer and seller frames.'
      },
      {
        category: 'team',
        metric: 'Reported online private-car transaction time',
        result: '≤15 min',
        timeframe: 'Cross-functional launch result · 2021',
        intervention: 'The wider product combined recognition, agreement, financing, and payment in an online transaction.',
        mechanism: 'The designed status and preparation model made the parties’ responsibilities explicit before confirmation.',
        attribution: 'Published product result. My contribution was the transaction interaction model shown in this case.',
        source: ['Auto.ru × Tinkoff launch', 'https://www.tbank.ru/invest/social/profile/T-Bank_Group/08df2efc-ec33-4a5a-a34a-5ed93ee43d56/']
      }
    ],
    problem: [
      'The buyer and seller entered the same deal from different contexts and had different information to provide.',
      'The interface needed to preserve one shared transaction state without pretending the two participant journeys were identical.'
    ],
    roleCopy: [
      'I led the Safe Deal product design within the broader Auto.ru redesign, working with product and engineering on the desktop transaction flow.',
      'I mapped the two participant paths, designed their separate workspaces and shared statuses, and covered the non-happy paths required for a real marketplace transaction.'
    ],
    insights: [
      'The buyer had four preparation tasks while the seller had five; mirroring one form would be structurally wrong.',
      'A participant needed to see the other side’s current status without accessing the other side’s private form.',
      'Safe Deal could be requested from an existing Auto.ru context, while the dedicated deal page remained the source of truth.',
      'Parallel requests, bank checks, corrections, cancellation, and silence from the other party were normal transaction states.'
    ],
    decisions: [
      ['Give both participants the same checklist', 'Rejected because buyer and seller provide different information and act at different moments.', 'I designed four buyer tasks, five seller tasks, and a shared status between them.'],
      ['Treat recognition as an invisible automation', 'Rejected because incomplete extraction could silently corrupt a high-stakes record.', 'The interface reveals recognised values, marks blocking fields, and requires review before confirmation.'],
      ['Use chat as the source of truth', 'Rejected. Conversation is useful but unreliable as a transaction record.', 'Chat remains the familiar entry point; the deal workspace owns progress and completion.']
    ],
    journey: [
      ['Enter from the existing conversation', 'The Safe Deal card explains the service and opens the dedicated transaction workspace.'],
      ['See the seller workspace', 'The seller sees the buyer’s current status plus five seller-specific preparation tasks.'],
      ['Correct recognised passport data', 'The personal-information frame shows incomplete extraction and makes the exact blocking fields visible.'],
      ['Review the completed record', 'The same seller task is shown after recognition and correction, before confirmation.'],
      ['Follow the other side’s status', 'Chat receives a concise status update while the full transaction remains on the deal page.']
    ],
    media: [
      { type: 'image', src: 'assets/auto-safe-deal-chat-en.png', title: 'Entry and status in chat', integrity: 'Designed desktop interface · English portfolio translation', caption: 'This frame is the Auto.ru listing and conversation context. It shows the Safe Deal entry card and a later buyer-status notification; it is not the data-entry screen.' },
      { type: 'image', src: 'assets/auto-safe-deal-flow-overview-en-v2.png', title: 'Seller workspace with five tasks', integrity: 'Designed desktop interface · English portfolio translation', caption: 'This is the seller view. It shows the buyer filling identity data while the seller prepares personal information, vehicle data, bank details, documents, and the meeting.' },
      { type: 'image', src: 'assets/auto-safe-deal-personal-data-en-v2.png', title: 'Validation inside seller identity data', integrity: 'Designed desktop interface · English portfolio translation', caption: 'Passport recognition filled part of the form; the interface identifies missing or invalid fields before the seller can continue.' },
      { type: 'image', src: 'assets/auto-safe-deal-verified-data-en-v2.png', title: 'Completed seller identity task', integrity: 'Designed desktop interface · English portfolio translation', caption: 'This frame shows the same seller workspace after the recognised data has been reviewed and completed. It does not represent both participants filling one form.' },
      { type: 'image', src: 'assets/auto-safe-deal-status-en.png', title: 'Synchronized buyer status', integrity: 'Designed desktop interface · English portfolio translation', caption: 'The chat exposes only the buyer’s current step. The seller’s private checklist and full transaction controls remain in the dedicated workspace.' }
    ],
    edgeCases: [
      'Seller declines the request or one party stops responding',
      'Document recognition fails or extracted data does not match',
      'Confirmed information needs correction before contract generation',
      'Payment remains pending, the deal is cancelled, or recovery is required'
    ],
    impact: {
      'My contribution': 'Designed the desktop Safe Deal interaction model with separate buyer and seller workspaces, shared progress, data correction, and transaction edge states.',
      'Source evidence': 'The source design contains separate buyer and seller chapters, four buyer tasks, five seller tasks, and explicit states for requests, bank checks, corrections, cancellation, and completion.',
      'Measured product result': 'Auto.ru and Tinkoff reported a fully online private-car transaction time of 15 minutes or less as a cross-functional launch result.',
      'Measurement framework': 'Post-launch review should track request acceptance, verification completion, funded-account conversion, completed handover, median and p90 time, cancellation, payment success, disputes, fraud, and support contacts per deal.'
    },
    sources: [
      ['Auto.ru product', 'https://auto.ru/'],
      ['Auto.ru × Tinkoff launch', 'https://www.tbank.ru/invest/social/profile/T-Bank_Group/08df2efc-ec33-4a5a-a34a-5ed93ee43d56/'],
      ['Launch baselines and product mechanics', 'https://www.dp.ru/a/2021/10/13/Tinkoff_i_Avto_ru_zapust']
    ]
  },

  alfa: {
    employer: 'Alfa-Bank · Alfa Business',
    title: 'Foreign Trade',
    headline: 'From bank forms to five customer workflows',
    deck: 'I redesigned Alfa-Bank’s foreign-trade experience around the jobs corporate customers needed to complete: conversion, international transfer, currency control, counterparties, and execution status.',
    period: '2017—2018',
    role: 'Product Designer · previously Software Developer in the same team',
    scope: 'B2B fintech, customer interviews, journey mapping, prototyping, usability testing, KPI framework, design system',
    product: 'Alfa Business · Foreign Trade',
    integratedStory: {
      problemEvidence: 'Foreign-trade customers had to assemble rates, accounts, counterparties, contracts, documents, signatures, and currency-control requirements across interfaces organised around the bank’s internal structure. The product made a single customer task feel like a sequence of unrelated forms, with missing data and rejection reasons appearing late.',
      workNarrative: 'I combined customer interviews, journey mapping, prototypes, and my engineering background to reorganise the experience around five end-to-end jobs. Conversion, international transfer, currency control, counterparties, and execution shared reusable business objects and the same status logic across web, desktop, and mobile.',
      resultNarrative: 'My direct result was a tested service model that reduced re-entry, exposed validation and review states earlier, and kept repeat operations in context. Alfa-Bank’s 2018 report later recorded 53,000 active medium-business clients, 46% annual client growth, and operating revenue up 1.6 times to RUB 19 billion. Those figures confirm the business context after launch; the report does not isolate this redesign’s causal contribution.'
    },
    url: 'https://alfabank.ru/corporate/ved/',
    tone: 'tone-red',
    cover: { type: 'image', src: 'assets/alfa-ved-conversion-order-en.png', className: 'work-card__media--clean-ui work-card__media--editorial-interface work-card__media--alfa-editorial' },
    proof: [
      ['5 workflows', 'Conversion, transfers, currency control, counterparties, and execution'],
      ['3 surfaces', 'Web, desktop, and mobile built on one service model'],
      ['+46% clients', 'Medium-business unit growth in 2018 · business context, not product attribution']
    ],
    metrics: {
      kind: 'business',
      eyebrow: 'Post-launch business context · 2018',
      heading: 'The redesign shipped into a medium-business franchise growing faster than the market',
      summary: 'Alfa-Bank’s annual report confirms business-unit growth after launch, but does not publish funnel telemetry for the foreign-trade redesign. These figures are therefore company results connected to the product context—not a claim that design alone caused them.',
      items: [
        { type: 'Active client base', value: '53K', label: 'Active medium-business clients by 1 January 2019', detail: 'Nearly one quarter of Russian medium-sized businesses held an Alfa-Bank account.', source: ['Alfa-Bank Annual Report 2018', 'https://fs.moex.com/f/11689/alfa-bank-annual-report-2018-eng.pdf'] },
        { type: 'Client growth', value: '+46%', label: 'Year-over-year growth in active medium-business clients', detail: 'The report states that this growth was twice as fast as the other market leaders.', source: ['Alfa-Bank Annual Report 2018', 'https://fs.moex.com/f/11689/alfa-bank-annual-report-2018-eng.pdf'] },
        { type: 'Operating revenue', value: '1.6×', label: 'Year-over-year growth to RUB 19B', detail: 'Mean transaction revenue was 13% above the market average.', source: ['Alfa-Bank Annual Report 2018', 'https://fs.moex.com/f/11689/alfa-bank-annual-report-2018-eng.pdf'] }
      ]
    },
    outcomes: [
      {
        category: 'scope',
        metric: 'Customer workflows unified across product surfaces',
        baseline: 'Disconnected bank-centric forms',
        result: '5 workflows · 3 surfaces',
        timeframe: '2017—2018',
        population: 'Financial directors, accountants, and currency-control specialists',
        intervention: 'I introduced one information architecture and state model for conversion, transfers, currency control, counterparties, and execution across web, desktop, and mobile.',
        mechanism: 'Reusable counterparties, contracts, and documents reduce repeated input; earlier validation and explicit recovery target completion, task time, errors, review returns, and support contacts.',
        evidence: 'The five workflows were represented consistently in customer-tested prototypes and delivery materials.',
        attribution: 'Direct contribution: research synthesis, service model, interaction design, prototypes, testing, and implementation review.'
      },
      {
        category: 'business',
        metric: 'Active medium-business clients',
        baseline: '2017 active client base',
        result: '53K · +46% YoY',
        timeframe: 'Reported at 1 January 2019',
        population: 'Alfa-Bank medium-business customers',
        intervention: 'The redesign improved the digital service path for complex corporate operations by organising work around customer jobs and reusable data rather than internal bank forms.',
        mechanism: 'Higher digital completion, fewer avoidable validation failures, and continuity across surfaces are the product levers expected to support activation, repeat use, and lower servicing friction.',
        evidence: 'Alfa-Bank reported 53,000 active medium-business clients, up 46% year over year and nearly one quarter of the Russian medium-business market.',
        attribution: 'Business-unit result after launch. The annual report does not isolate the foreign-trade redesign’s share of growth.',
        source: ['Alfa-Bank Annual Report 2018', 'https://fs.moex.com/f/11689/alfa-bank-annual-report-2018-eng.pdf']
      },
      {
        category: 'business',
        metric: 'Medium-business operating revenue',
        baseline: '2017 operating revenue',
        result: '1.6× · RUB 19B',
        timeframe: '2018 financial year',
        population: 'Alfa-Bank medium-business unit',
        intervention: 'The product work made high-friction banking operations easier to complete digitally and established the behavioural metrics needed to evaluate the redesigned flows.',
        mechanism: 'Completed operations, repeat digital use, fewer returns, and lower support demand connect workflow quality to transaction activity and service economics.',
        evidence: 'Operating revenue reached RUB 19 billion; mean transaction revenue was 13% above the market average.',
        attribution: 'Business-unit result, not direct product telemetry. It demonstrates the scale of the environment in which the redesign shipped.',
        source: ['Alfa-Bank Annual Report 2018', 'https://fs.moex.com/f/11689/alfa-bank-annual-report-2018-eng.pdf']
      }
    ],
    problem: [
      'One international operation could involve rates, accounts, counterparties, contracts, supporting documents, signatures, and currency-control review. The interface reflected the bank’s structure rather than the customer’s task.',
      'Financial directors, accountants, and currency-control specialists moved between disconnected forms, re-entered information, and discovered errors late. This increased uncertainty for customers and servicing cost for the bank.'
    ],
    roleCopy: [
      'I moved from software development into product design inside the same team. That let me connect technical constraints with interviews, personas, customer journeys, prioritised hypotheses, interactive prototypes, and implementation review.',
      'Before delivery, I connected each design decision to completion, time to complete, validation errors, repeat submissions, bank-review returns, and support demand. The supplied archive does not contain the post-launch funnel export, so I do not invent product-level percentages.'
    ],
    insights: [
      'Users could not see the complete operation or the next required step.',
      'Counterparties, contracts, and documents were recreated instead of reused.',
      'Document rejection appeared late and with insufficient recovery guidance.',
      'Separate platform logic risked three inconsistent products.'
    ],
    decisions: [
      ['Keep one form per banking operation', 'Rejected. It reproduced the bank’s organisation and fragmented the customer journey.', 'I reorganised the experience around five end-to-end customer tasks.'],
      ['Recreate counterparties for every payment', 'Rejected. It increased input and error risk.', 'The counterparty became a reusable entity connected to contracts, representatives, documents, and history.'],
      ['Design each platform separately', 'Rejected.', 'One information architecture and state model was adapted across Web, desktop, and mobile.']
    ],
    journey: [
      ['Prepare', 'Select or create a reusable counterparty and contract context.'],
      ['Convert', 'Review rate, accounts, debit, credit, and execution conditions.'],
      ['Control', 'Attach documents, resolve validation, and obtain signatures.'],
      ['Execute', 'Track authorisation, bank review, and final transaction state.']
    ],
    media: [
      { type: 'image', src: 'assets/alfa-ved-conversion-order-en.png', dark: true, integrity: 'Portfolio reconstruction from project materials · English', caption: 'Rate, debit, credit, execution conditions, and order status stay in one decision context.' },
      { type: 'image', src: 'assets/alfa-ved-documents-en.png', dark: true, integrity: 'Portfolio reconstruction from project materials · English', caption: 'Documents are organised around the business contract with explicit states and recovery actions.' },
      { type: 'image', src: 'assets/alfa-ved-contractors-en.png', dark: true, integrity: 'Portfolio reconstruction from project materials · English', caption: 'The counterparty becomes a reusable business object connected to contracts, representatives, and transaction history.' }
    ],
    edgeCases: [
      'Rejected or incomplete documents and missing signatures',
      'Invalid payment details and operations waiting for authorisation',
      'Returning from bank review to edit and resubmit',
      'Starting a repeat transaction from an existing contract or counterparty'
    ],
    impact: {
      'My contribution': 'Unified five foreign-trade workflows across three product surfaces with one information architecture and state model.',
      'How the redesign changes behaviour': 'Reusable counterparties and contracts reduce repeated input; earlier validation and explicit statuses reduce avoidable returns; one state model preserves context between surfaces.',
      'Product metrics influenced': 'Digital completion, time to complete, validation errors, repeat submissions, bank-review returns, repeat use, and support demand.',
      'Measured business context': 'By 1 January 2019 Alfa-Bank reported 53,000 active medium-business clients, up 46% year over year; 2018 operating revenue grew 1.6 times to RUB 19 billion.',
      'Attribution boundary': 'These are business-unit results after launch. Without the internal foreign-trade funnel, I do not claim that this redesign alone produced them.'
    },
    sources: [
      ['Alfa-Bank Annual Report 2018', 'https://fs.moex.com/f/11689/alfa-bank-annual-report-2018-eng.pdf'],
      ['Current Alfa-Bank Foreign Trade service', 'https://alfabank.ru/corporate/ved/'],
      ['Original project materials', 'https://www.behance.net/gallery/97918335/Digital-Banking']
    ]
  },

  codereview: {
    employer: 'JetBrains × Lund University',
    title: 'Trust-Calibrated Code Review',
    headline: 'Turning participatory research into a reusable IDE prototyping system',
    deck: 'As co-author and design lead, I translated the paper’s findings into the validated code-review interface and created two reusable agent skills that convert dynamic web prototypes into credible JetBrains IDE research instruments.',
    period: '2026',
    role: 'Co-author · Product Design Lead',
    scope: 'Participatory design, developer research, agent skills, IDE fidelity system, React prototyping, validation',
    product: 'Research publication · arXiv preprint',
    integratedStory: {
      problemEvidence: 'Traditional diffs show code changes but not an agent’s intent, confidence, evidence, or distribution of risk. Participatory discovery with 17 developers surfaced 64 concrete review problems, making trust calibration—not simply scanning a larger diff—the central product challenge.',
      workNarrative: 'I translated the paper’s three-level workflow and seven design constructs into a React-based, semi-interactive prototype. To make that process repeatable, I developed one agent skill for moving a dynamic web prototype into an IDE shell and another for matching JetBrains structure, density, components, icons, and states closely enough to test the research hypothesis without building a production plugin.',
      resultNarrative: 'Forty-three professionals evaluated the resulting interface: 72% would use it, 63% expected lower overall review effort, and 52% expected lower trust-assessment effort. The same skill-based production model then became reusable infrastructure for research prototypes across the company, separating hypothesis logic from the cost of repeatedly recreating a credible IDE.'
    },
    url: 'https://arxiv.org/abs/2606.01969',
    primaryLinks: [
      ['Read the paper', 'https://arxiv.org/abs/2606.01969'],
      ['Download PDF', 'https://arxiv.org/pdf/2606.01969']
    ],
    tone: 'tone-green',
    cover: { type: 'image', src: 'assets/code-review-prototype-ai-judge.png', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [
      ['17 to 64', 'Discovery participants and review problems identified'],
      ['43 professionals', 'Validation of the final IDE prototype'],
      ['2 reusable skills', 'Web prototype transfer and JetBrains IDE fidelity']
    ],
    metrics: {
      kind: 'research',
      eyebrow: 'Research results · 2026',
      heading: 'A participatory study turned 64 review problems into a validated IDE product model',
      summary: 'The study combined participatory discovery with evaluation of the final prototype built from the shared interaction framework.',
      items: [
        { type: 'Discovery', value: '17', label: 'Developers in participatory problem research', detail: 'The study identified 64 review problems.', source: ['Research paper', 'https://arxiv.org/abs/2606.01969'] },
        { type: 'Prototype validation', value: '43', label: 'Professionals who evaluated the final prototype', source: ['Research paper', 'https://arxiv.org/abs/2606.01969'] },
        { type: 'Validation signal', value: '72%', label: 'Reported willingness to use the proposed tool', detail: '63% expected lower review effort; 52% expected lower trust-assessment effort.', source: ['Research paper', 'https://arxiv.org/abs/2606.01969'] }
      ]
    },
    outcomes: [
      {
        phase: 'problem',
        category: 'research',
        metric: 'Concrete review problems identified before solution design',
        result: '17 developers · 64 problems',
        timeframe: 'Participatory discovery · 2025',
        population: 'Developers reviewing agent-generated changes',
        intervention: 'I used the participatory findings to define the interaction guidance, information hierarchy, agent states, risk signals, and reviewer actions used throughout the study.',
        mechanism: 'The discovery evidence moved the team from a generic “better diff” brief to a trust-calibration product problem with explicit design requirements.',
        attribution: 'This research evidence directly shaped the prototype system and final IDE interface I designed.',
        source: ['Research paper', 'https://arxiv.org/pdf/2606.01969']
      },
      {
        category: 'research',
        metric: 'Willingness to use the trust-calibrated review tool',
        result: '72% · ≈31 of 43',
        timeframe: 'Prototype validation · 2026',
        population: '43 professional developers',
        intervention: 'I translated 64 practitioner problems into an agent UX guideline, reusable prototype design system, and the final three-level IDE interface used in the study.',
        mechanism: 'Overview to file to snippet disclosure, risk signals, evidence, rationale, and reviewer controls made agent output inspectable without treating every change equally.',
        evidence: '72% would use the tool; 63% expected better merge decisions and 67% expected better trust assessment.',
        attribution: 'Direct research result: the paper identifies the visual UX and final prototype as my design contribution.',
        source: ['Research paper', 'https://arxiv.org/pdf/2606.01969']
      },
      {
        category: 'research',
        metric: 'Expected effort to review agent-generated code',
        baseline: 'Traditional diff workflow',
        result: '63% lower overall · 52% lower trust effort',
        timeframe: 'Prototype validation · 2026',
        population: '43 professional developers reporting expected effort',
        intervention: 'I created a consistent interaction hierarchy and evidence model across all research prototypes, then applied it to the final semi-interactive interface.',
        mechanism: 'Progressive disclosure focuses attention on risk; evidence and confidence cues reduce the work required to decide where deeper inspection is needed.',
        attribution: 'This is direct validation of the prototype I designed; production review time and escaped defects are the next experiment.',
        source: ['Research paper', 'https://arxiv.org/pdf/2606.01969']
      },
      {
        category: 'scope',
        metric: 'Research prototype production reused beyond one study',
        result: '2 agent skills · reusable IDE shell',
        timeframe: 'Built during the study · scaled internally afterward',
        population: 'JetBrains research teams building dynamic product hypotheses',
        intervention: 'I encoded two complementary workflows: converting interactive web prototypes into an IDE-shaped experience, and bringing that experience close to JetBrains component anatomy, density, visual states, and interaction conventions.',
        mechanism: 'Researchers could keep fast web implementation and deterministic fixtures while the skills supplied a consistent IDE shell, semantic components, icons, tokens, and fidelity checks. This reduced reinvention and made the prototype credible enough for hypothesis validation without production plugin engineering.',
        evidence: 'The reusable guidance specifies IDE zones, tool windows, trees, stripes, status bar, typography, semantic tokens, icon sourcing, interaction states, and acceptance checks independently of one research scenario.',
        attribution: 'Direct contribution: I designed the skills and prototype-production model, then enabled the approach to be reused across internal studies.'
      }
    ],
    problem: [
      'LLM agents can change many files at once, while traditional diffs show code changes without intent, model confidence, or risk. Review becomes a problem of calibrating trust, not merely finding differences.',
      'The research team needed to understand that problem with practitioners and turn participatory design findings into a coherent IDE workflow that could be tested at high fidelity.'
    ],
    roleCopy: [
      'I led the design work from research synthesis to the final research instrument. Using the persona, use cases, and 64 participant-identified problems, I defined how the interface should expose intent, evidence, uncertainty, risk, system state, and the reviewer’s next action across overview, file, and snippet levels.',
      'The paper required a high-fidelity interface but not a production IDE plugin. I therefore kept the hypothesis dynamic in React, fixed the LLM outputs to avoid experimental noise, and created a skill that could place the web prototype into the correct IDE shell without rewriting the research logic.',
      'A second skill encoded JetBrains fidelity: toolbar, stripes, tool windows, editor hierarchy, status bar, compact density, semantic tokens, icons, typography, states, and acceptance checks. Together, the skills turned a one-off prototype into a repeatable way to build credible IDE studies across the company.'
    ],
    insights: [
      'Seventeen developers identified 64 review problems; trust was rated among the most serious.',
      'The findings had to become repeatable interaction rules before they could produce a coherent agent interface.',
      'A single risk score hides which files and snippets require attention.',
      'Review needs progressive disclosure from change overview to file analysis to code snippet.',
      'The interface must support both verification of the code and calibration of confidence in the agent.',
      'Research fidelity depended on preserving realistic IDE context without letting production integration slow or distort the experiment.'
    ],
    decisions: [
      ['Design every prototype as a separate set of screens', 'Rejected. It would introduce visual and behavioural differences between research rounds and make feedback harder to compare.', 'I defined one interaction framework and reusable prototype system, then used it from early concepts through the final validation interface.'],
      ['Build a production IDE plugin before validation', 'Rejected. Integration cost and live-model variability would delay the study and introduce confounds unrelated to the interface hypothesis.', 'I used a dynamic React prototype inside a credible IDE shell with deterministic research fixtures.'],
      ['Restyle every web prototype manually', 'Rejected. It would repeatedly couple research logic to visual reconstruction and produce inconsistent fidelity.', 'I encoded web-to-IDE transformation and JetBrains fidelity as two reusable agent skills.'],
      ['Add AI comments to a traditional diff', 'Rejected. Comments add volume but do not expose intent or distribute risk across the change.', 'The prototype uses overview to file to snippet levels with different evidence at each level.'],
      ['Show one global confidence indicator', 'Rejected. It conceals where trust should be questioned.', 'Seven constructs expose risk, rationale, and evidence at the appropriate level of detail.']
    ],
    journey: [
      ['Discover', 'Seventeen practitioners produced 64 concrete review problems.'],
      ['Define', 'The research team synthesised trust calibration as the organising problem.'],
      ['Develop', 'Seven returning participants co-designed the three-level workflow and its constructs.'],
      ['Deliver', 'I operationalised the model in a semi-interactive IDE prototype evaluated by 43 professionals.']
    ],
    media: [
      { type: 'image', src: 'assets/code-review-prototype-ai-judge.png', dark: true, integrity: 'Research prototype · designed by me · 2026', caption: 'The final IDE interface applies one interaction model across review hierarchy, risk signals, evidence, agent rationale, states, and reviewer actions.' }
    ],
    edgeCases: [
      'Large changes where the overview must guide attention',
      'Conflicting evidence between the agent and static analysis',
      'Low-confidence areas requiring deeper manual inspection',
      'A reviewer disagreeing with the agent’s rationale'
    ],
    impact: {
      'My contribution': 'Led the translation of research findings into the final validation interface and created the reusable production system behind it.',
      'Paper to product': 'Operationalised three review levels and seven design constructs as a dynamic React prototype with deterministic LLM fixtures inside a mock IDE.',
      'Two reusable skills': 'One transformed dynamic web prototypes into an IDE shell; the other enforced JetBrains component anatomy, density, tokens, icons, states, and interaction fidelity.',
      'Validation result': '43 professionals evaluated the prototype: 72% reported willingness to use it, 63% expected lower review effort, and 52% expected lower trust-assessment effort.',
      'Organisational result': 'The skill-based approach made high-fidelity, web-built IDE prototypes repeatable across internal research rather than bespoke for a single study.',
      'Evidence boundary': 'The survey validates perceived usefulness of the semi-interactive interface; hands-on longitudinal use is still required to demonstrate behavioural impact.'
    },
    sources: [
      ['Research paper', 'https://arxiv.org/abs/2606.01969'],
      ['Replication package', 'https://doi.org/10.5281/zenodo.20124352']
    ]
  },

  vscode: {
    employer: 'JetBrains · External Editors',
    title: 'AI Assistant for VS Code',
    headline: 'Bringing JetBrains AI into a new editor ecosystem',
    deck: 'I led the design and launch of a native VS Code AI workflow—from project context and chat to multi-file agent actions and review.',
    period: '2025',
    role: 'Product Design Lead',
    scope: 'New-product strategy, platform UX, AI interaction, prototyping, validation, launch',
    product: 'JetBrains AI Assistant for Visual Studio Code',
    integratedStory: {
      problemEvidence: 'JetBrains needed to reach developers in the editor used by 75.9% of Stack Overflow survey respondents without shipping a transplanted JetBrains tool window. The first release had to feel native to VS Code while preserving JetBrains strengths in project context, multi-file actions, and review.',
      workNarrative: 'I led the initial product framing and interaction design. I prioritised the launch jobs, adapted entry points and state communication to VS Code conventions, and connected chat, project context, agent progress, multi-file execution, partial application, and review into one host-native workflow across eight launch languages.',
      resultNarrative: 'The extension launched publicly and reached 29,370 unique Marketplace installs by 2026—about 1,923 installs per month since launch. My direct result was the shipped product surface and its interaction model; Marketplace installs quantify adoption of that surface. The next internal proof points are activation, first successful task, accepted changes, week-four retention, and subscription conversion.'
    },
    url: 'https://www.jetbrains.com/ai/assistant/',
    tone: 'tone-blue',
    cover: { type: 'image', src: 'assets/vscode-official-ai-explore.png', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [
      ['29,370 installs', 'Unique Marketplace acquisition after launch'],
      ['≈1,923 / month', 'Average Marketplace acquisition since release'],
      ['75.9% use VS Code', 'Market distribution surface in the 2025 Stack Overflow survey']
    ],
    metrics: {
      kind: 'product',
      eyebrow: 'Launch and adoption',
      heading: 'The launched VS Code product reached 29,370 Marketplace installs',
      summary: 'I led the launch UX for the native, project-aware assistant and its reviewable agent workflow.',
      items: [
        { type: 'Marketplace adoption · 2026', value: '29,370', label: 'Unique extension installs', source: ['Microsoft Marketplace', 'https://marketplace.visualstudio.com/items?itemName=JetBrains.jetbrains-ai-assistant'] },
        { type: 'Public-preview coverage · 2025', value: '8', label: 'Programming languages supported at launch', detail: 'Java, Kotlin, JavaScript, TypeScript, Python, C#, C++, and C.', source: ['JetBrains launch', 'https://blog.jetbrains.com/ai/2025/05/jetbrains-ai-assistant-now-in-visual-studio-code/'] }
      ]
    },
    outcomes: [
      {
        category: 'team',
        metric: 'Marketplace adoption of the new VS Code product',
        baseline: 'New product launch',
        result: '29,370 unique installs',
        delta: '≈1,923 / month',
        timeframe: '2025—2026',
        population: 'Microsoft Marketplace unique extension installs, updates excluded',
        intervention: 'I led the launch UX around native entry, automatic project context, multi-file agent execution, visible progress, review, and partial application.',
        mechanism: 'A VS Code-native workflow reduced setup and context-switching friction while making agent changes reviewable before application.',
        attribution: 'I directly owned the product model and launch UX; acquisition is the released product team\'s result.',
        source: ['Microsoft Marketplace', 'https://marketplace.visualstudio.com/items?itemName=JetBrains.jetbrains-ai-assistant']
      },
      {
        category: 'scope',
        metric: 'Public-preview coverage at launch',
        result: '8 languages',
        timeframe: '2025',
        population: 'Java, Kotlin, JavaScript, TypeScript, Python, C#, C++, and C',
        intervention: 'I prioritised a coherent project-aware core rather than feature parity with every JetBrains IDE capability.',
        mechanism: 'One interaction model could launch across multiple language workflows without fragmenting context, progress, and review behavior.',
        attribution: 'Eight-language coverage is my direct launch-design scope; the Marketplace card carries the acquisition outcome.',
        source: ['JetBrains launch', 'https://blog.jetbrains.com/ai/2025/05/jetbrains-ai-assistant-now-in-visual-studio-code/']
      },
      {
        category: 'benchmark',
        metric: 'Addressable editor surface opened by the launch',
        result: '75.9% used VS Code',
        timeframe: 'Stack Overflow Developer Survey · 2025',
        population: '26,143 respondents answering the IDE question',
        intervention: 'I adapted JetBrains AI to VS Code navigation, context, progress, review, and extension conventions instead of requiring users to move into a JetBrains IDE.',
        mechanism: 'Removing IDE-migration friction expands acquisition; native onboarding and first-task success then move activation, week-four retention, and paid conversion.',
        attribution: '75.9% is a market-reach benchmark, not acquired users. My direct contribution is the native launch experience that opened this distribution surface.',
        source: ['Stack Overflow Developer Survey 2025', 'https://survey.stackoverflow.co/2025/technology']
      }
    ],
    problem: ['JetBrains AI needed to work outside JetBrains IDEs without feeling like a transplanted tool window. The product had to respect VS Code conventions while preserving JetBrains strengths in project understanding and developer workflows.'],
    roleCopy: ['I led product framing and interaction design for the new surface, deciding which scenarios belonged in the first release and how context, agent progress, and review should fit the host editor.'],
    insights: ['Native editor conventions were a product constraint, not a visual skin.', 'The value proposition depended on project context and trustworthy review of changes.', 'The first release needed a coherent core workflow rather than parity with every JetBrains feature.'],
    decisions: [['Replicate the JetBrains tool window', 'Rejected because it ignored VS Code’s information architecture.', 'The experience uses the host editor’s layout and interaction conventions.'], ['Ship broad feature parity', 'Rejected for the first release.', 'The MVP focused on project-aware assistance and a reviewable agent workflow.']],
    journey: [['Enter', 'Open AI from a native editor entry point.'], ['Context', 'Attach the relevant file, selection, or project context.'], ['Act', 'Ask, generate, or run a multi-file task.'], ['Review', 'Inspect and apply the proposed changes.']],
    media: [
      { type: 'image', src: 'assets/vscode-official-ai-explore.png', dark: true, integrity: 'Public preview interface · 2025', caption: 'The assistant uses native VS Code structure while keeping project context and actions visible.' },
      { type: 'image', src: 'assets/vscode-extension-full.png', dark: true, integrity: 'Public preview interface · 2025', caption: 'Project code and agent interaction stay in one working context.' },
      { type: 'video', src: 'assets/jetbrains-vscode-agents.mp4', poster: 'assets/jetbrains-vscode-agents.mp4.png', dark: true, integrity: 'Public product demonstration · 2025', caption: 'The agent moves from a request to a reviewable set of changes.' }
    ],
    edgeCases: ['Missing or excessive context', 'Long-running multi-file tasks', 'Partial application and rejected changes', 'Errors introduced by host-editor constraints'],
    impact: {'My contribution': 'Led end-to-end design of a new AI product surface through public preview.', 'Validation evidence': 'The team evaluated project context, multi-file execution, progress, review, and partial application before release.', 'Measured adoption': 'The extension reached 29,370 unique Microsoft Marketplace installs after launching with eight programming languages.', 'Measurement framework': 'Activation, first successful task, accepted changes, week-four retention, and subscription conversion.'},
    sources: [['JetBrains AI Assistant', 'https://www.jetbrains.com/ai/assistant/'], ['JetBrains launch announcement', 'https://blog.jetbrains.com/ai/2025/05/jetbrains-ai-assistant-now-in-visual-studio-code/'], ['Microsoft Marketplace', 'https://marketplace.visualstudio.com/items?itemName=JetBrains.jetbrains-ai-assistant']]
  },

  resharper: {
    employer: 'JetBrains · ReSharper',
    title: 'ReSharper AI Assistant',
    headline: 'Contextual AI inside established .NET workflows',
    deck: 'I designed the initial ReSharper AI Assistant around four high-value workflows while preserving the distinction between deterministic IDE tools and generative help.',
    period: '2023',
    role: 'Product Designer / Product Design Lead',
    scope: 'AI workflow design, contextual actions, prototyping, validation, release',
    product: 'ReSharper AI Assistant',
    integratedStory: {
      problemEvidence: 'ReSharper users already trusted deterministic inspections and refactorings. A generic AI chat would duplicate those tools, hide the context used for generation, and blur the difference between a predictable IDE action and a probabilistic response.',
      workNarrative: 'I framed the first release around four jobs—explain, generate, transform, and document—and placed them in three native entry paths: editor actions, contextual menus, and the assistant. I designed response states and review so AI extended an existing .NET workflow while deterministic tools retained their meaning.',
      resultNarrative: 'ReSharper 2023.2 shipped 12 workflow–entry combinations: four job groups through three familiar surfaces. That was my direct delivery result inside a product with 3.03 million Marketplace installs and a 4.3/5 rating. Later JetBrains research found that 91% of AI Assistant users saved time and 71% completed tasks faster; ReSharper-specific activation and subscription conversion are the next product measures.'
    },
    url: 'https://www.jetbrains.com/help/resharper/AI_Assistant.html',
    tone: 'tone-purple',
    cover: { type: 'image', src: 'assets/resharper-vs-ai-actions.png', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [['4 × 3 launch model', 'Four workflow groups through three native entry paths'], ['3.03M installs', 'Cumulative unique ReSharper installations'], ['91% saved time', 'JetBrains AI Assistant user study']],
    metrics: {
      kind: 'launch',
      eyebrow: 'Quantified launch footprint · 2023.2',
      heading: 'The first ReSharper AI release covered four workflows through three native entry points',
      summary: 'Public sources document the shipped scope. Activation and repeat-use figures are not public.',
      items: [
        { type: 'Shipped workflow groups', value: '4', label: 'Chat, explain, identify issues, and generate', source: ['ReSharper 2023.2', 'https://www.jetbrains.com/resharper/whatsnew/2023-2/'] },
        { type: 'Native discovery paths', value: '3', label: 'Main menu, editor context menu, and Alt+Enter', source: ['JetBrains launch', 'https://blog.jetbrains.com/dotnet/2023/06/26/resharper-ai-assistant/'] }
      ]
    },
    outcomes: [
      {
        category: 'scope',
        metric: 'Contextual AI workflows shipped in the first ReSharper release',
        result: '4 workflows · 3 entry paths',
        timeframe: 'ReSharper 2023.2',
        population: 'Chat, explain, identify issues, and generate via menu, context menu, and Alt+Enter',
        intervention: 'I designed AI around high-value contextual tasks and existing ReSharper discovery paths instead of replacing trusted deterministic tools with generic chat.',
        mechanism: 'Starting from selected code reduced manual context setup; familiar entry paths targeted feature discovery and first successful action; explicit review protected user control.',
        attribution: 'The initial workflow family, contextual entry model, and review behavior are my direct shipped contribution.',
        source: ['ReSharper 2023.2', 'https://www.jetbrains.com/resharper/whatsnew/2023-2/']
      },
      {
        category: 'later',
        metric: 'Installed ReSharper product footprint',
        result: '3.03M unique installs · 4.3/5 rating',
        timeframe: 'Visual Studio Marketplace snapshot · 2026',
        population: '3,030,125 cumulative unique ReSharper installations; 381 ratings',
        intervention: 'I embedded the first AI workflows inside the established context menu and Alt+Enter model rather than launching a disconnected assistant.',
        mechanism: 'Native distribution reduces feature-discovery and context-switching friction across the existing ReSharper footprint; activation and repeat use become the next funnel steps.',
        attribution: 'This is the overall ReSharper footprint, not AI usage. My direct contribution is how AI entered that established product workflow.',
        source: ['ReSharper · Visual Studio Marketplace', 'https://marketplace.visualstudio.com/items?itemName=JetBrains.ReSharper']
      },
      {
        category: 'benchmark',
        metric: 'Developer-time value reported for the same JetBrains AI workflow family',
        result: '91% saved time · 71% completed tasks faster',
        delta: '≥1.35 h/week lower-bound',
        timeframe: 'JetBrains AI early-adopter survey · 2024',
        population: '640 early adopters across JetBrains AI Assistant',
        intervention: 'The ReSharper launch seeded contextual chat, explanation, issue finding, implementation, and documentation workflows—the same workflow family evaluated in the later portfolio study.',
        mechanism: 'Code context travels with the request, reducing setup and copy/paste; focused responses and explicit application target task time, first success, accepted output, and repeat use.',
        attribution: 'This is a later cross-product benchmark, not ReSharper-specific telemetry. It quantifies the business KPI the interaction family was designed to move.',
        source: ['JetBrains AI early-adopter survey', 'https://blog.jetbrains.com/ai/2024/04/developers-save-up-to-8-hours-per-week-with-jetbrains-ai-assistant/']
      }
    ],
    problem: ['ReSharper already had trusted deterministic refactorings and inspections. Adding AI as a generic chat risked duplicating those tools, hiding context, and weakening user expectations around predictable actions.'],
    roleCopy: ['I framed the initial workflow set, designed contextual entry points and response states, and worked through the distinction between deterministic IDE actions and AI-generated assistance.'],
    insights: ['AI should start from code context instead of requiring manual copy and paste.', 'Users need to understand whether an action is deterministic, generative, or still executing.', 'Review and application must remain explicit in a professional IDE.'],
    decisions: [['Make chat the only AI entry point', 'Rejected because it ignores the user’s current code context.', 'AI actions appear next to established editor actions and pass the relevant selection automatically.'], ['Replace existing refactorings with AI', 'Rejected because deterministic tools are faster and more predictable where available.', 'AI focuses on tasks requiring explanation, generation, or broader reasoning.']],
    journey: [['Select', 'Start from code, an issue, or an editor action.'], ['Ask', 'Pass context to a focused AI workflow.'], ['Review', 'Inspect the generated explanation or change.'], ['Apply', 'Accept, revise, or discard the result.']],
    media: [
      { type: 'image', src: 'assets/resharper-vs-ai-actions.png', dark: true, integrity: 'Initial product direction · 2023', caption: 'Contextual entry points connect the assistant to existing ReSharper actions.' },
      { type: 'image', src: 'assets/resharper-ai-explain.png', dark: true, integrity: 'Initial workflow · 2023', caption: 'Explain code without leaving the development context.' },
      { type: 'image', src: 'assets/resharper-ai-refactoring.png', dark: true, integrity: 'Initial workflow · 2023', caption: 'Generated changes remain reviewable before they are applied.' }
    ],
    edgeCases: ['No useful context or unsupported code', 'A generated change conflicts with deterministic analysis', 'Slow or failed AI response', 'The user needs to compare, revise, or discard the result'],
    impact: {'My contribution': 'Designed and shipped the initial ReSharper AI Assistant in the 2023.2 release.', 'Validation evidence': 'Four workflows were prototyped and reviewed in realistic IDE scenarios.', 'Quantified launch result': 'The first release shipped four workflow groups through three native ReSharper entry points.', 'Measurement framework': 'Feature discovery, first successful action, response acceptance, repeat use, task completion, and subscription conversion.'},
    sources: [['ReSharper AI Assistant', 'https://www.jetbrains.com/help/resharper/AI_Assistant.html'], ['ReSharper 2023.2', 'https://www.jetbrains.com/resharper/whatsnew/2023-2/'], ['Initial launch', 'https://blog.jetbrains.com/dotnet/2023/06/26/resharper-ai-assistant/']]
  },

  tonwallet: {
    employer: 'TON Foundation · Wallet',
    title: 'Wallet in Telegram',
    headline: 'Making crypto transactions feel native to Telegram',
    deck: 'I worked hands-on across Wallet’s core product experience and its integration into Telegram, simplifying onboarding, portfolio, transfer, and exchange journeys.',
    period: '2021—2022',
    role: 'Lead Product Designer',
    scope: 'Product strategy, financial UX, onboarding, transactions, Telegram integration, design leadership',
    product: 'Wallet in Telegram',
    integratedStory: {
      problemEvidence: 'Crypto transfers exposed addresses, networks, fees, and confirmation states to people who expected the speed and familiarity of Telegram. Every manual address step increased the chance of abandonment or irreversible error, so growth depended on making a wallet behave like a native messaging action.',
      workNarrative: 'I led product design and stayed hands-on across entry from Telegram, first-use education, portfolio, recipient selection, transfer, exchange, confirmation, pending states, and recovery. The key product decision was to resolve recipients through Telegram identity and keep fee, network, and transaction state visible only when they affected a decision.',
      resultNarrative: 'In the quarter Wallet entered Telegram’s attachment menu, registered TON wallets grew from 382,148 to 901,015: +518,867, +136%, or 2.36×. I owned the product mechanism behind the native experience—Telegram entry, contact-based sending, portfolio, exchange, and transaction states—while the wider product later passed 100 million activations.'
    },
    url: 'https://wallet.tg/',
    tone: 'tone-blue',
    cover: { type: 'image', src: 'assets/covers/cover-tonwallet.jpg', dark: true, className: 'work-card__media--cover-art' },
    proof: [['382K to 901K', 'Registered TON wallets in the launch quarter'], ['4 core journeys', 'Onboarding, portfolio, transfer, and exchange'], ['100M+ activations', 'Published Wallet activations in 2024']],
    metrics: {
      kind: 'downstream',
      eyebrow: 'Later product scale',
      heading: 'The early Wallet model I worked on later scaled to more than 100 million activations',
      summary: 'My 2021—2022 scope covered the core product UX and Telegram integration; the published activation figure is for 2024.',
      items: [
        { type: 'Published 2024 product adoption', value: '100M+', label: 'TON Wallet activations', source: ['The Open Platform', 'https://top.co/insights/ton-wallet-launches-in-usa'] },
        { type: 'My direct product scope', value: '4', label: 'Core journeys designed', detail: 'Onboarding, portfolio, transfer, and exchange.' }
      ]
    },
    outcomes: [
      {
        category: 'team',
        metric: 'Registered TON wallets in the quarter Wallet became a native Telegram action',
        baseline: '382,148',
        result: '901,015',
        delta: '+518,867 · +136% · 2.36×',
        timeframe: '2022',
        population: 'Registered TON wallets; @wallet entered Telegram’s attachment menu in the same quarter',
        intervention: 'I designed the Telegram-native Wallet journey across entry, activation, recipient selection, transfer, exchange, and transaction states.',
        mechanism: 'Native entry and contact-based sending removed download, context-switching, and address-entry friction from the path to a first transaction.',
        attribution: 'The interaction model is my direct contribution; wallet-address growth is the TON ecosystem’s in-period team outcome, not an isolated design uplift.',
        source: ['TON Q2 2022 report', 'https://t.me/s/toncoin?before=499']
      },
      {
        category: 'later',
        metric: 'TON Wallet product adoption',
        result: '100M+ activations',
        timeframe: 'Published for 2024',
        population: 'Users activating TON Wallet',
        intervention: 'I led and designed the early core product and Telegram integration across onboarding, portfolio, transfer, and exchange.',
        mechanism: 'Telegram-native entry and recipient context reduced first-use and address-entry friction; progressive disclosure kept asset, network, fee, and irreversible actions explicit before money moved.',
        attribution: 'My direct contribution is the early product model from 2021—2022; 100M+ is later product scale reached by subsequent teams.',
        source: ['The Open Platform', 'https://top.co/insights/ton-wallet-launches-in-usa']
      },
      {
        category: 'model',
        metric: 'Recipient-resolution friction in a Telegram-native transfer',
        baseline: '5 address-handling actions',
        result: '2 Telegram-native actions',
        delta: '−60% modeled friction',
        timeframe: '2021—2022',
        population: 'Modeled comparison of generic crypto sending and Telegram contact sending',
        intervention: 'I replaced cross-app address handling with Telegram-native recipient context while preserving explicit asset, network, fee, and irreversible confirmation review.',
        mechanism: 'Fewer handoffs target send-start to review conversion, time to first successful transfer, and wrong-recipient prevention.',
        evidence: 'Generic path: obtain to copy to switch app to paste/scan to verify. Telegram path: choose contact to verify contact.',
        attribution: 'This is a transparent task-analysis model of the journey I designed; production task time and conversion require telemetry.',
        source: ['TON product update · 2022', 'https://t.me/s/toncoin?before=723']
      }
    ],
    problem: ['Crypto products exposed network, address, asset, fee, and confirmation complexity to people who expected Telegram-level simplicity and speed.'],
    roleCopy: ['I led product design while remaining hands-on on the end-to-end Wallet experience: entry from Telegram, first-use education, asset portfolio, recipient selection, transfer, exchange, confirmation, and failure states.'],
    insights: ['The messenger context changes expectations for identity and recipient selection.', 'Fees, network, and irreversible actions require progressive disclosure.', 'The product must feel simple without hiding material financial consequences.'],
    decisions: [['Expose every blockchain concept up front', 'Rejected because it overwhelmed first-time users.', 'The flow reveals technical detail at the decision point where it affects money or risk.'], ['Treat Wallet as a separate website', 'Rejected.', 'The product uses Telegram identity, navigation, and recipient context where appropriate.']],
    journey: [['Start', 'Open Wallet from Telegram and understand the product value.'], ['Fund', 'Add or receive an asset with clear network context.'], ['Transact', 'Choose a recipient or exchange pair and review fees.'], ['Confirm', 'Verify the final amount, state, and recovery path.']],
    media: [
      { type: 'image', src: 'assets/ton-wallet-official-ton.png', dark: true, integrity: 'Official Wallet interface', caption: 'The portfolio keeps balance, assets, and primary transaction actions inside Telegram.' },
      { type: 'image', src: 'assets/ton-wallet-official-transfer.png', dark: true, integrity: 'Official Wallet interface', caption: 'Contact-based sending resolves the recipient, amount, fee, and confirmation in one compact decision.' },
      { type: 'image', src: 'assets/ton-wallet-official-exchange.png', dark: true, integrity: 'Official Wallet interface', caption: 'Exchange keeps the quote, asset pair, fee, and final confirmation inside the same product shell.' }
    ],
    edgeCases: ['Invalid or wrong recipient', 'Quote expires before exchange confirmation', 'Network fee changes or insufficient balance', 'Pending, failed, or irreversible transaction'],
    impact: {'My contribution': 'Led and contributed hands-on to Wallet’s core product model and Telegram integration.', 'Validation evidence': 'Prototypes covered onboarding, recipient selection, amount and fee comprehension, confirmation, pending states, and recovery.', 'Later product scale': 'The product direction later exceeded 100 million TON Wallet activations in 2024.', 'Measurement framework': 'Onboarding completion, funded wallets, transaction success, repeat transactions, failed-transfer recovery, and exchange conversion.'},
    sources: [['Wallet product', 'https://wallet.tg/'], ['100M+ activation milestone', 'https://top.co/insights/ton-wallet-launches-in-usa']]
  },

  simple: {
    employer: 'Simple',
    title: 'Simple',
    headline: 'From a fasting timer to a daily behaviour system',
    deck: 'I helped turn Simple from a single-purpose utility into a personalised programme connecting onboarding, a daily plan, fasting, activity, reflection, and visible progress.',
    period: '2019—2020',
    role: 'Product Designer',
    scope: 'Consumer health, product discovery, personalisation, growth loops, subscription UX, analytics',
    product: 'Simple',
    integratedStory: {
      problemEvidence: 'The timer answered one question: how long have I fasted? It did not tell people what to do today, adapt to their goal and routine, or show whether repeated behaviour was producing progress. The product needed a reason to return after the timer stopped.',
      workNarrative: 'I designed the connected system documented in the original Behance case. Profile and onboarding inputs shaped a Personal Program; the home surface translated that programme into current state and the next useful action; Journal captured meals, activity, and reflection; progress views connected repeated behaviour to weight and personal goals. Alongside the product work, I built design processes, a UI kit, style guides, prototypes, microinteractions, and multi-platform layouts.',
      resultNarrative: 'During my 2019—2020 product period, Simple reached #1 in its US App Store category and was featured by Apple. The source résumé records improvements in retention, conversion, LTV, and organic traffic, plus progress toward company self-sufficiency; exact funnel percentages were not published, so none are invented here. The product later scaled to more than 15 million installs and 500,000 subscribers under subsequent teams.'
    },
    url: 'https://simple.life/',
    tone: 'tone-purple',
    cover: { type: 'image', src: 'assets/simple-behance-dashboard.png', className: 'work-card__media--simple-source' },
    proof: [['#1 US category', 'Result during my product period'], ['Featured by Apple', 'Editorial recognition during my product period'], ['15M+ installs', 'Later product scale']],
    metrics: {
      kind: 'product',
      eyebrow: 'Market result and later product scale',
      heading: 'The new daily programme reached #1 in its US App Store category and later scaled globally',
      summary: 'I designed the connected path from personal inputs to a daily plan, action, reflection, progress, and subscription value during the 2019—2020 product period.',
      items: [
        { type: 'Result during my product period', value: '#1', label: 'US App Store category', detail: 'Reached during the 2019—2020 product period, as recorded in my résumé.', source: ['Résumé', 'cv.html'] },
        { type: 'Later product scale', value: '15M+', label: 'Installs', source: ['Palta · Simple', 'https://palta.com/simple'] },
        { type: 'Later product scale', value: '500K+', label: 'Subscribers', source: ['Palta · Simple', 'https://palta.com/simple'] }
      ]
    },
    outcomes: [
      {
        category: 'team',
        metric: 'US App Store market position after the product pivot',
        baseline: 'Single-purpose fasting timer',
        result: '#1 Health & Fitness',
        timeframe: 'Within months of launch · 2019—2020',
        population: 'US App Store Health & Fitness category',
        intervention: 'I designed personalised onboarding, the first plan, the daily programme, progress, and subscription journeys, using Amplitude funnels and product experiments to prioritise the pivot.',
        mechanism: 'Onboarding inputs changed the daily plan, clear next actions created a repeatable loop, progress linked behavior to benefit, and subscription messaging explained ongoing value.',
        attribution: 'I directly owned the core pivot surfaces; #1 is the team\'s in-period market outcome recorded in my résumé.',
        source: ['Résumé', 'cv.html']
      },
      {
        category: 'later',
        metric: 'Scale of the personalised programme after the documented work',
        result: '15M+ installs · 500K+ subscribers',
        timeframe: 'Later product scale',
        population: 'Simple users and subscribers',
        intervention: 'The pivot established onboarding to personalised plan to daily guidance to progress to subscription as the core product loop.',
        mechanism: 'A repeatable personalised loop targets week-four retention, trial-to-paid conversion, renewal, and LTV rather than one-off timer use.',
        attribution: 'The loop is connected to my 2019—2020 product work; the published scale was reached later under subsequent teams.',
        source: ['Palta · Simple', 'https://palta.com/simple']
      }
    ],
    problem: ['A fasting timer solved a narrow task but did not create an ongoing relationship: users still needed a relevant plan, a next action, reflection, and evidence of progress.'],
    roleCopy: ['I designed the connected product loop and the system needed to ship it across platforms: core journeys, prototypes, microinteractions, UI kit, style guides, and product design process.'],
    insights: ['A timer reports elapsed time; a programme must tell the user what to do next.', 'Personalisation is credible only when profile inputs change the everyday experience.', 'Reflection and progress make repeated behaviour legible and worth continuing.', 'The interface needs to connect fasting, food, activity, hydration, and weight without turning the home screen into a feature catalogue.'],
    decisions: [['Keep extending the timer', 'Rejected because additional timer features did not create a coherent daily job.', 'The product became a programme with a state, a next action, reflection, and progress.'], ['Collect every personal detail before first value', 'Rejected because it delayed the first useful plan.', 'Profile data is gathered in stages and is used where it materially changes guidance.']],
    journey: [['Today', 'See the current fasting or activity state and the next useful action.'], ['Personalise', 'Use goals, body data, diet, and routine to shape the programme.'], ['Plan', 'Turn personal inputs into fasting, activity, hydration, and coaching actions.'], ['Track', 'Make weight and goal progress visible over time.'], ['Reflect', 'Capture meals, feelings, and activity, then return a meaningful recap.']],
    media: [
      { type: 'image', src: 'assets/simple-behance-dashboard.png', className: 'media-frame--simple-source', title: 'A home surface for the current state', integrity: 'Original Behance case · designed product work · 2019—2020', caption: 'Fasting state, metabolic progress, activity, and coaching live in one readable daily surface instead of separate feature entrances.' },
      { type: 'image', src: 'assets/simple-behance-profile.png', className: 'media-frame--simple-source', title: 'Personal inputs that change the product', integrity: 'Original Behance case · designed product work · 2019—2020', caption: 'Profile, performance, and health inputs make the programme specific to the person rather than ending as onboarding data.' },
      { type: 'image', src: 'assets/simple-behance-fasting.png', className: 'media-frame--simple-source', title: 'The personalised programme', integrity: 'Original Behance case · designed product work · 2019—2020', caption: 'Plans, goals, activity, hydration, and coaching turn the fasting utility into a programme with concrete actions.' },
      { type: 'image', src: 'assets/simple-behance-weight.png', className: 'media-frame--simple-source', title: 'Progress closes the loop', integrity: 'Original Behance case · designed product work · 2019—2020', caption: 'Weight trends and personal goals connect repeated daily behaviour with an outcome the user can understand.' },
      { type: 'image', src: 'assets/simple-behance-journal.png', className: 'media-frame--simple-source', title: 'Reflection makes guidance adaptive', integrity: 'Original Behance case · designed product work · 2019—2020', caption: 'Meal reflection, activity records, diet balance, and recaps give the next day context and make progress more than a streak.' }
    ],
    edgeCases: ['Insufficient onboarding data', 'Missed day or broken streak', 'Plan no longer fits the user’s routine', 'Subscription value is unclear before paywall'],
    impact: {'My contribution': 'Designed the connected product loop and built the UI kit, style guides, prototypes, microinteractions, multi-platform layouts, and product design processes used to deliver it.', 'Validation evidence': 'Research, product analytics, funnels, and experiments informed the order of onboarding, the first useful plan, everyday guidance, reflection, and progress.', 'Measured market result': 'During my product period, the team reached #1 in its US App Store category and the product was featured by Apple.', 'Business result': 'The source résumé records improved retention, conversion, LTV, and organic traffic without publishing exact percentages.', 'Measurement framework': 'Onboarding completion, time to first personal plan, next-day and next-week return, completed daily actions, journal use, progress views, trial start, paid conversion, and renewal.', 'Later product scale': 'The product later exceeded 15 million installs and 500,000 subscribers under subsequent teams.'},
    sources: [['Original Simple case on Behance', 'https://www.behance.net/gallery/98076441/Simple-App'], ['Simple product', 'https://simple.life/'], ['Palta · later Simple scale', 'https://palta.com/simple'], ['Résumé', 'cv.html']]
  },

  koshelek: {
    employer: 'Koshelek',
    title: 'Koshelek Pay',
    headline: 'A complete Android NFC payment journey',
    deck: 'I designed the customer journey from adding a supported card and preparing NFC to tapping a terminal, understanding processing, and receiving a clear result.',
    period: '2020',
    role: 'Contract Product Designer',
    scope: 'Android payments, user research, prototyping, interaction design, launch support',
    product: 'Koshelek Pay',
    integratedStory: {
      problemEvidence: 'An NFC payment is a physical-digital journey: the phone must be ready, the user must know when to approach the terminal, and processing, success, decline, and retry must be unmistakable. Ambiguity at this moment creates duplicate-payment anxiety and prevents the first successful tap—the behavior required for repeat use.',
      workNarrative: 'I researched and designed the complete Android path from supported-card provisioning and device readiness to the terminal moment, processing, result, decline, and safe retry. The prototype treated terminal feedback and phone state as one journey rather than separate screens, so users always knew whether to wait, move, retry, or stop.',
      resultNarrative: 'The rollout expanded from two Mastercard banks to six Visa issuers: 3× coverage, or +200%. The wider Koshelek audience grew from 7 million+ to 16 million users, a 2.3× distribution surface. I designed the payment journey that supported this rollout. At that audience ceiling, each one-point improvement in provisioning conversion represents up to 160,000 cards, making first-card completion the primary commercial KPI.'
    },
    url: 'https://pay.koshelek.app/',
    tone: 'tone-purple',
    cover: { type: 'phones', srcs: ['assets/koshelek-pay-add-card-en.png', 'assets/koshelek-pay-wallet-en.png', 'assets/koshelek-pay-android-nfc-en.png'], dark: true, className: 'work-card__media--phones-clean work-card__media--koshelek-clean' },
    proof: [['2 to 6 issuers', 'Bank coverage at Visa rollout'], ['7M to 16M users', 'Application audience during expansion'], ['5 payment states', 'Ready, tap, processing, success, and recovery']],
    metrics: {
      kind: 'product',
      eyebrow: 'Product rollout · 2019—2020',
      heading: 'The Android NFC journey expanded from a two-bank launch to Visa support with six issuers',
      summary: 'The same end-to-end payment model was carried into new device, market, and card-network launches during my product period.',
      items: [
        { type: 'Initial launch', value: '2', label: 'Mastercard partner banks', detail: 'Alfa-Bank and MTS Bank.', source: ['Koshelek Pay launch', 'https://b2b.koshelek.app/press/news/koshelyok-pay-googleplay/'] },
        { type: 'Visa rollout · 2020', value: '6', label: 'Issuing banks at launch', detail: 'VTB, Alfa, Tinkoff, Post Bank, Raiffeisenbank, and Rosselkhozbank.', source: ['Koshelek Pay Visa launch', 'https://b2b.koshelek.app/press/news/koshelek-pay-visa/'] },
        { type: '2020 expansion', value: '3', label: 'Major rollout milestones', detail: 'Huawei/AppGallery, Belarus, and Visa.', source: ['Koshelek Pay news', 'https://b2b.koshelek.app/press/news/'] }
      ]
    },
    outcomes: [
      {
        category: 'team',
        metric: 'Issuer coverage supported by the Android NFC journey',
        baseline: '2 Mastercard banks',
        result: '6 Visa issuers',
        delta: '3× coverage · +200%',
        timeframe: '2019—2020',
        population: 'Supported issuing banks at rollout',
        intervention: 'I designed the full add-card to NFC readiness to terminal tap to processing to result to safe-retry journey, including unsupported cards, disabled NFC, decline, and uncertain states.',
        mechanism: 'Explicit state ownership reduced interaction ambiguity, while one reusable payment-state model could be carried into new issuers, device channels, and markets.',
        attribution: 'I directly owned the Android payment interaction; 2 to 6 issuers is the team\'s rollout outcome during the same product period.',
        source: ['Koshelek Pay Visa launch', 'https://b2b.koshelek.app/press/news/koshelek-pay-visa/']
      },
      {
        category: 'team',
        metric: 'Addressable app audience during the payment rollout',
        baseline: '7M+ app users',
        result: '16M app users',
        delta: '≈2.3× platform reach',
        timeframe: '2019—2020',
        population: 'Users of the wider Koshelek app; not all were eligible for Pay',
        intervention: 'I designed one stable provisioning, readiness, tap, processing, result, and recovery model that could move with the product into new issuers, devices, networks, and markets.',
        mechanism: 'Each issuer and eligible NFC device expands the top of the funnel; supported-card recognition, readiness, and first successful tap determine how much audience becomes an active payer.',
        attribution: 'Audience growth is the platform team’s rollout context; my contribution is the interaction that converts eligibility into a successful first payment.',
        source: ['Koshelek Pay Visa launch', 'https://b2b.koshelek.app/press/news/koshelek-pay-visa/']
      },
      {
        category: 'model',
        metric: 'Business sensitivity of card-provisioning conversion',
        result: 'Up to 160K provisions / +1 pp',
        timeframe: 'Upper-bound model using the published 16M app audience',
        population: 'Illustrative top-of-funnel; eligible Android/NFC/card subset was smaller',
        intervention: 'I made supported-card recognition, security explanation, NFC/default-wallet readiness, processing, success, decline, and safe recovery explicit.',
        mechanism: 'Those states directly affect provision completion, first successful tap, payment success, repeat payment, and support contacts.',
        evidence: 'Visa reported that nine of ten Visa card transactions in Russia were already contactless, supporting demand for the use case.',
        attribution: 'This is a mathematical upper-bound sensitivity, not a forecast or measured conversion result.',
        source: ['Koshelek Pay Visa launch', 'https://b2b.koshelek.app/press/news/koshelek-pay-visa/']
      }
    ],
    problem: ['Contactless payment is a physical-digital interaction. The interface must prepare the device, communicate exactly when to hold it near the terminal, distinguish processing from success, and recover from failure without creating doubt about duplicate payment.'],
    roleCopy: ['I researched and designed the end-to-end Android journey across card provisioning, readiness, the NFC moment, result states, and retry.'],
    insights: ['The user needs to know whether the phone or terminal owns the next step.', 'Processing and success must be visually distinct.', 'Retry guidance cannot create fear of a duplicate charge.'],
    decisions: [['Use a decorative animation as the primary signal', 'Rejected because it was ambiguous at the terminal.', 'The interface separates ready, hold, processing, success, and failure with explicit state changes.'], ['Return immediately to the wallet after a tap', 'Rejected.', 'A dedicated result state confirms whether the physical interaction completed.']],
    journey: [['Provision', 'Add and verify a supported bank card.'], ['Prepare', 'Check default card and NFC readiness.'], ['Tap', 'Hold the phone at the terminal with clear feedback.'], ['Resolve', 'Show processing, success, decline, or retry.']],
    media: [
      { type: 'cropPhones', title: 'Provision and select a payment card', srcs: ['assets/koshelek-pay-add-card-en.png','assets/koshelek-pay-wallet-en.png'], integrity: 'Designed interface · English portfolio translation', caption: 'Card setup and selection make eligibility, the active card, and readiness visible before the terminal interaction begins.' },
      { type: 'cropPhones', title: 'Prepare for the terminal interaction', srcs: ['assets/koshelek-pay-android-nfc-en.png'], integrity: 'Designed interface · English portfolio translation', caption: 'The terminal-ready state makes the active card and the next physical action explicit without competing decorative content.' }
    ],
    edgeCases: ['Unsupported bank or card', 'NFC disabled or another default wallet', 'Terminal does not respond', 'Decline, uncertain state, and safe retry'],
    impact: {'My contribution': 'Designed the complete add-card to NFC to terminal to result interaction for Android.', 'Validation evidence': 'The prototype tested readiness, terminal feedback, processing, success, decline, and safe retry around the physical payment moment.', 'Measured rollout': 'The product expanded from two Mastercard partner banks to a Visa launch with six issuing banks, alongside Huawei/AppGallery and Belarus rollouts.', 'Measurement framework': 'Card-provisioning completion, first successful tap, payment success, repeat use, decline recovery, and payment-related support contacts.'},
    sources: [['Official product archive', 'https://pay.koshelek.app/'], ['Initial launch', 'https://b2b.koshelek.app/press/news/koshelyok-pay-googleplay/'], ['Visa with six banks', 'https://b2b.koshelek.app/press/news/koshelek-pay-visa/'], ['Project description', 'https://www.behance.net/gallery/137537923/Koshelek-Pay']]
  },

  ton: {
    employer: 'TON Foundation',
    title: 'TON Foundation Relaunch',
    headline: 'Relaunching TON Foundation as the front door to a live blockchain ecosystem',
    deck: 'The network already worked, but its public product did not explain why it was credible, what people could do with it, or where to start. I rebuilt that journey from evidence and audience intent to real products, tools, and documentation.',
    period: '2021—2022',
    role: 'Lead Product Designer',
    scope: 'Ecosystem strategy, audience research, developer activation, information architecture, content system, interface design, launch',
    product: 'TON Foundation public resource',
    integratedStory: {
      problemEvidence: 'This was not a website refresh. In 2021 the community already operated 115 validators, seven lite servers, three archive nodes, mobile wallets, APIs, and a testnet, while the code and documentation associated with ton.org no longer matched the active network. A protocol-first catalogue could describe the technology, but it could not answer the questions blocking adoption: Is this network alive? Can I trust it? What can I build or use? What is my next action?',
      workNarrative: 'I turned the relaunch into an activation product. Research separated four entry audiences—builders, validators, application teams, and users—and the decision each needed to make. I then designed a progressive narrative: prove the network is live; translate infrastructure into an understandable promise; make security verifiable; show the ecosystem through concrete products; expose reusable blockchain primitives; and complete the journey inside documentation, GitHub, APIs, testnet, wallets, or validator tooling. I owned the information architecture, content model, reusable interface system, prototype validation, and launch.',
      resultNarrative: 'The relaunch replaced one protocol-first information tree with four intent-based activation paths inside one maintainable product system. The Foundation could establish legitimacy and then move each audience to a working surface instead of ending on marketing copy. The developer layer continued to evolve as a community product: in Q2 2023 TON documentation recorded 300+ commits, 111 merges, and 32 unique contributors. The current official surfaces shown below illustrate how the same product logic has expanded with the ecosystem; they are presented as evolution, not as pixels attributed to my 2021 design.'
    },
    url: 'https://ton.org/',
    tone: 'tone-blue',
    cover: { type: 'image', src: 'assets/ton-relaunch-network-proof.png', dark: true, className: 'work-card__media--clean-ui work-card__media--web-cover-clean work-card__media--ton-clean' },
    proof: [['115 validators at relaunch', 'A live ecosystem needed a trustworthy public layer'], ['4 activation paths', 'Builders, validators, application teams, and users'], ['300+ documentation commits', 'Later community activity in Q2 2023']],
    outcomes: [
      {
        phase: 'problem',
        category: 'benchmark',
        metric: 'Live network the inherited public layer had to represent',
        result: '115 validators',
        delta: '7 lite servers · 3 archive nodes · 40+ developers',
        timeframe: '2021',
        population: 'Community-operated TON network at the time of the public handover request',
        source: ['Community request for ton.org and GitHub', 'https://github.com/ton-blockchain/TIPs/issues/33']
      },
      {
        category: 'direct',
        metric: 'Activation paths delivered in the new public product',
        baseline: '1 protocol path',
        result: '4 activation paths',
        delta: 'Builders · validators · application teams · users',
        timeframe: 'Foundation relaunch',
        population: 'Four primary ecosystem audiences',
        intervention: 'I defined each audience’s decision, rebuilt the information architecture, and designed progressive handoffs from trust and intent to the appropriate tool.',
        mechanism: 'People could enter by goal and reach documentation, GitHub, APIs, testnet, validator tooling, wallets, or applications without first decoding the whole protocol.',
        attribution: 'Audience segmentation, product architecture, interface system, and launch were my direct scope.'
      },
      {
        category: 'later',
        metric: 'Community activity on the developer-facing documentation layer',
        result: '300+ commits',
        delta: '111 merges · 32 unique contributors',
        timeframe: 'Q2 2023',
        population: 'TON documentation contributors',
        intervention: 'The relaunch established a clearer developer entry point and a reusable product and content system that could evolve beyond a one-off campaign site.',
        mechanism: 'A maintainable developer surface supports continued contribution, correction, and expansion as tooling and the network change.',
        attribution: 'The public-product and content-system foundations were my contribution; the contribution volume was the later work of the wider TON developer community.',
        source: ['TON Developer Report · Q2 2023', 'https://ton.org/en/developer-report-q2-2023']
      }
    ],
    problem: ['The community inherited a live network and trusted domain, but the public layer and documentation no longer represented the active product. That created a credibility and activation problem, not merely an outdated visual identity.'],
    roleCopy: ['I owned the public-product relaunch from audience and trust model through information architecture, reusable interface and content foundations, validation, and launch.'],
    insights: ['The first task was establishing that the community-led network was real, maintained, and safe to invest time in.', 'Builders, validators, application teams, and users entered with different success criteria.', 'Acquisition was meaningless without a reliable handoff to current documentation, code, testnet, tools, wallets, or applications.', 'The content system had to remain maintainable as the protocol and ecosystem changed.'],
    decisions: [['Refresh the identity but preserve the old structure', 'Rejected because it would make an outdated product look current.', 'I rebuilt the audience and activation architecture before defining the visual system.'], ['Lead with the complete protocol model', 'Rejected because most people first needed confidence and a relevant next action.', 'The experience moved progressively from vision and proof to use case and tool.'], ['Create separate sites for every audience', 'Rejected because it would fragment trust and maintenance.', 'One shared system supported four distinct entry paths and consistent ecosystem handoffs.']],
    journey: [['Prove the network is alive', 'Lead with observable infrastructure, activity, and open-source ownership instead of abstract claims.'], ['Translate technology into value', 'Explain performance, cost, security, and Telegram reach in terms of user and builder outcomes.'], ['Reveal products and primitives', 'Connect the protocol to concrete product surfaces and reusable building blocks.'], ['Complete activation', 'Hand each audience to documentation, code, APIs, testnet, validator tooling, a wallet, or an application.']],
    media: [
      { type: 'image', title: '01 — Replace promises with live network proof', src: 'assets/ton-relaunch-network-proof.png', integrity: 'Current official TON surface · product-system evolution', caption: 'The first screen answers the highest-risk question—whether the network is real and active—with validators, nodes, contracts, wallets, transactions, and a live infrastructure visual. The relaunch established this proof-before-persuasion principle.' },
      { type: 'image', title: '02 — Turn infrastructure into a product promise', src: 'assets/ton-relaunch-product-proof.png', integrity: 'Current official TON surface · product-system evolution', caption: 'Technical capabilities are grouped by the outcome they enable: speed, low transaction cost, scale, asynchronous execution, and independent workchains. This lets a product team evaluate fit without decoding the entire protocol.' },
      { type: 'image', title: '03 — Make trust verifiable', src: 'assets/ton-relaunch-security-proof.png', integrity: 'Current official TON surface · product-system evolution', caption: 'Security moves from a generic “safe blockchain” claim to inspectable evidence: open-source ownership, named auditors, and an ongoing bug-bounty model. It supports the trust decision before a developer or partner invests effort.' },
      { type: 'image', title: '04 — Explain the ecosystem through products', src: 'assets/ton-relaunch-telegram-products.png', integrity: 'Current official TON surface · product-system evolution', caption: 'Mini Apps, gifts, usernames, collectible numbers, Stars, Premium, giveaways, and ads payouts make the opportunity concrete. A visitor can start from a recognisable user behavior rather than from blockchain terminology.' },
      { type: 'image', title: '05 — Convert capabilities into builder choices', src: 'assets/ton-relaunch-builder-primitives.png', integrity: 'Current official TON surface · product-system evolution', caption: 'Distributed and mintless tokens, sponsored transactions, staking, stablecoins, and encrypted messages are presented as composable primitives. The interface answers “what can I build?” before asking the developer to read implementation details.' },
      { type: 'image', title: '06 — Finish with a working developer surface', src: 'assets/ton-relaunch-developer-tools.png', integrity: 'Current official TON surface · product-system evolution', caption: 'TON Connect, DNS, storage, payments, SDKs, APIs, testnet, AI/LLM resources, and contests form the final activation layer. The narrative ends with an actionable tool, not another marketing page.' },
      { type: 'image', title: '07 — Preserve intent inside documentation', src: 'assets/ton-foundation-docs.png', integrity: 'Current TON documentation · downstream product surface', caption: 'Learning paths keep the audience model intact after the handoff: onboarding, applications, payments, tokens, and wallet integration provide task-specific starts instead of one undifferentiated documentation tree.' }
    ],
    edgeCases: [],
    impact: {'My contribution': 'Led the ecosystem-facing product relaunch from problem framing to shipped resource.', 'Validation evidence': 'Audience-task prototypes tested whether the new structure established trust and produced a clear next action.', 'Product result': 'One rebuilt public product, four activation paths, and a maintainable interface and content system.', 'Measurement framework': 'Audience-path selection, entry-to-tool conversion, documentation activation, first successful developer action, validator onboarding, and successful ecosystem handoff.'},
    sources: [['TON Foundation', 'https://ton.org/'], ['2021 community handover request', 'https://github.com/ton-blockchain/TIPs/issues/33'], ['TON Developer Report · Q2 2023', 'https://ton.org/en/developer-report-q2-2023'], ['TOP portfolio case', 'case.html?case=top'], ['Wallet product case', 'case.html?case=tonwallet']]
  },

  top: {
    employer: 'The Open Platform',
    title: 'TOP Product Portfolio',
    headline: 'Turning ecosystem opportunities into validated product launches',
    deck: 'As Head of Product Design, I built the evidence-first process used to frame portfolio opportunities, validate product concepts, review launch readiness, mentor designers, and join priority products hands-on.',
    period: '2021—2022',
    role: 'Head of Product Design',
    scope: 'Portfolio strategy, product discovery, validation, launch governance, design leadership, product incubation',
    product: 'The Open Platform portfolio',
    integratedStory: {
      problemEvidence: 'TOP was incubating products with different audiences, risks, and maturity. Teams could move from an ecosystem opportunity directly into interface delivery without a shared standard for problem evidence, the riskiest assumption, prototype validation, or launch success. That made weak bets expensive and strong bets difficult to compare.',
      workNarrative: 'I built a four-stage product model: opportunity framing, problem evidence, prototype validation, and launch readiness. For every stage I defined the questions, evidence, review criteria, and design outputs required to continue. I ran portfolio reviews, mentored designers, aligned product and business stakeholders, and worked hands-on on high-risk activation and transaction journeys—most deeply in Wallet.',
      resultNarrative: 'The direct result was one repeatable operating model for moving portfolio bets from opportunity to launch. TOP’s published history names four early investments—Tonkeeper, STON.fi, Getgems, and Open Builders—and the portfolio later expanded to 25+ projects. Wallet became the clearest product example of the process and is presented as a separate hands-on case.'
    },
    url: 'https://top.co/',
    tone: 'tone-blue',
    cover: { type: 'image', src: 'assets/top-official-home.png', dark: true, className: 'work-card__media--clean-ui work-card__media--clean-ui-light work-card__media--web-cover-clean' },
    proof: [['4-stage process', 'Opportunity, evidence, validation, and launch readiness'], ['4 early portfolio bets', 'Named in TOP’s published history'], ['4 to 25+ projects', 'Later published portfolio breadth']],
    outcomes: [
      {
        category: 'direct',
        metric: 'Portfolio stages with explicit evidence and launch criteria',
        baseline: 'Different review standards by team and maturity',
        result: '4-stage process',
        timeframe: '2021—2022',
        population: 'TOP teams moving from ecosystem opportunity to launch',
        intervention: 'I introduced opportunity, problem-evidence, prototype-validation, and launch-readiness reviews; set criteria for each stage; mentored designers; and joined high-risk work hands-on.',
        mechanism: 'Teams had to name the audience, problem, riskiest assumption, evidence, and launch signal before committing to full delivery.',
        attribution: 'The operating model, review standard, mentoring, and hands-on design leadership were my direct results.'
      },
      {
        category: 'later',
        metric: 'Published TOP portfolio breadth',
        baseline: '4 early investments',
        result: '25+ projects',
        timeframe: 'Q3 2022 to current TOP portfolio',
        population: 'The Open Platform portfolio',
        intervention: 'I established a common process for comparing opportunities, validation evidence, concept quality, and launch readiness.',
        mechanism: 'A shared decision model supported different products without forcing them into one interface or maturity model.',
        attribution: 'The operating model is my direct contribution; 25+ projects is the later published scale of the portfolio.',
        source: ['TOP history and portfolio', 'https://top.co/about']
      }
    ],
    problem: ['The portfolio needed a repeatable way to distinguish a promising ecosystem opportunity from a validated product ready for investment and launch.'],
    roleCopy: ['I built and ran the product-design operating model, developed designers, aligned decision makers, and joined priority launches hands-on.'],
    insights: ['Evidence changes with product maturity.', 'A portfolio review must compare decision quality, not visual polish.', 'The riskiest activation and transaction moments benefit most from hands-on design leadership.'],
    decisions: [['Use one generic delivery process for every team', 'Rejected because early concepts and launch-ready products require different evidence.', 'The process changed by stage while preserving one decision language.'], ['Evaluate portfolio progress through finished interfaces', 'Rejected because interface quality does not prove problem fit.', 'Reviews began with audience, problem evidence, risk, and success signal.']],
    journey: [['Frame the opportunity', 'Define the audience, ecosystem advantage, and business hypothesis.'], ['Prove the problem', 'Collect evidence and identify the riskiest assumption.'], ['Validate the concept', 'Prototype the core mechanism and test comprehension and value.'], ['Review launch readiness', 'Connect experience quality to activation, transaction, retention, and business signals.']],
    media: [
      { type: 'image', title: 'A portfolio built around products', src: 'assets/top-official-home.png', integrity: 'The Open Platform', caption: 'The operating model helped teams move different ecosystem opportunities through comparable evidence and launch decisions.' }
    ],
    edgeCases: [],
    impact: {'My contribution': 'Built and ran TOP’s four-stage product process, led portfolio reviews, mentored designers, and joined high-risk product work.', 'Validation evidence': 'Stage-specific evidence connected ecosystem opportunities to user problems, tested product mechanisms, and launch criteria.', 'Product result': 'One repeatable portfolio process supporting early product bets and launches, including Wallet.', 'Measurement framework': 'Validation cycle time, bets changed or stopped before build, launch readiness, activation, transaction success, retention, and business viability.'},
    sources: [['The Open Platform', 'https://top.co/'], ['TOP history and portfolio', 'https://top.co/about'], ['Wallet hands-on case', 'case.html?case=tonwallet']]
  },

  sbermobile: {
    employer: 'Sber',
    title: 'SberMobile',
    headline: 'One acquisition and self-service journey across a banking ecosystem',
    deck: 'I worked on the customer and employee experience from tariff selection and order to delivery status, activation, payment, and ongoing self-service.',
    period: '2018—2019',
    role: 'Product Designer',
    scope: 'Telecom, omnichannel acquisition, employee tools, service blueprint, self-service',
    product: 'SberMobile',
    integratedStory: {
      problemEvidence: 'Buying a mobile plan crossed bank entry points, telecom systems, delivery, employee tools, activation, payment, and support. A mismatch between any two states could stop a paid order before activation, so the product problem was not an individual screen but continuity across the customer and service operation.',
      workNarrative: 'I connected plan selection, order, delivery status, activation, payment, and self-service through one service blueprint. Customer and employee journeys used aligned states and handoffs, exposing operational gaps before implementation and giving product teams one funnel from tariff choice to the first successful payment.',
      resultNarrative: 'During my product period, SberMobile moved from 10,000+ first-week connections to 500,000 active subscribers, while rollout expanded from four to 50 regions: 12.5× coverage, or +1,150%. I designed the omnichannel model supporting acquisition and activation at that scale. At the launch tariff, the active base implies about ₽100 million in monthly billing capacity, making activation and first payment the critical business KPIs.'
    },
    url: 'https://sbermobile.ru/',
    tone: 'tone-orange',
    cover: { type: 'image', src: 'assets/covers/cover-sbermobile.jpg', dark: true, className: 'work-card__media--cover-art' },
    proof: [['10K+ to 500K active', 'Subscriber growth during the product period'], ['4 to 50 regions', 'National rollout supported by one service model'], ['5 connected journeys', 'Selection, order, activation, payment, and support']],
    metrics: {
      kind: 'product',
      eyebrow: 'Adoption and rollout · 2018—2019',
      heading: 'The service grew from 10,000+ first-week connections to 500,000 active subscribers',
      summary: 'During this growth period I designed the acquisition, activation, payment, self-service, and employee handoffs that connected the customer promise to telecom fulfilment.',
      items: [
        { type: 'Early demand · 2018', value: '10K+', label: 'Connections in the first week of the pilot tariff', source: ['SberMobile launch history', 'https://sbermobile.ru/about/news/sberbank_obyavlyaet_o_zapuske_mobilnogo_operatora_pod_novym_brendom_sbermobayl.html'] },
        { type: 'Adoption · 2019', value: '500K', label: 'Active subscribers', source: ['SberMobile milestone', 'https://sbermobile.ru/about/news/sbermobayl_dostig_otmetki_v_polmilliona_aktivnyh_abonentov.html'] },
        { type: 'Rollout · 2019', value: '50', label: 'Regions covered', source: ['SberMobile news archive', 'https://sbermobile.ru/about/news/?page=13'] }
      ]
    },
    outcomes: [
      {
        category: 'team',
        metric: 'Active subscriber adoption during the omnichannel rollout',
        baseline: '10K+ first-week connections',
        result: '500K active subscribers',
        timeframe: '2018—2019',
        population: 'SberMobile subscribers',
        intervention: 'I designed the connected plan-choice, order, delivery-status, activation, payment, support, and employee-handoff journey through one service blueprint.',
        mechanism: 'Shared customer and employee states reduced activation dead ends; clear status and next actions targeted order completion, activation success, time to SIM, first payment, and support demand.',
        attribution: 'I directly owned the customer/employee service model; subscriber growth is the cross-functional product outcome during my period.',
        source: ['SberMobile 500K milestone', 'https://sbermobile.ru/about/news/sbermobayl_dostig_otmetki_v_polmilliona_aktivnyh_abonentov.html']
      },
      {
        category: 'team',
        metric: 'Geographic rollout supported by the service model',
        baseline: '4 launch regions',
        result: '50 regions',
        delta: '12.5× footprint · +1,150%',
        timeframe: '2018—2019',
        population: 'SberMobile regional coverage',
        intervention: 'The service blueprint connected banking entry points, fulfilment, telecom systems, employee tools, and customer self-service instead of designing only the consumer app.',
        mechanism: 'A consistent state and handoff model let the same acquisition and activation journey operate across a broader rollout footprint.',
        attribution: 'Regional expansion is a team rollout outcome; the omnichannel journey and service blueprint are my direct contribution.',
        source: ['SberMobile news archive', 'https://sbermobile.ru/about/news/?page=13']
      },
      {
        category: 'model',
        metric: 'Monthly subscription billing sensitivity at the launch tariff',
        result: '≈₽100M / month',
        delta: '≈₽1.2B annualised',
        timeframe: 'Illustrative model: 500K active base × 2018 launch minimum',
        population: '500,000 active subscribers at a ₽200 monthly package',
        intervention: 'I connected tariff choice, order, activation, first payment, employee fulfilment, and self-service into one measurable customer funnel.',
        mechanism: 'Plan-builder completion, successful activation, first payment, and self-service retention determine how much acquired demand becomes and remains billable.',
        attribution: 'This is a launch-price sensitivity, not reported revenue or ARPU. My direct contribution is the service model that moves activation and retention.',
        source: ['SberMobile launch', 'https://sbermobile.ru/about/news/sberbank_obyavlyaet_o_zapuske_mobilnogo_operatora_pod_novym_brendom_sbermobayl.html']
      }
    ],
    problem: ['Buying and activating a mobile plan crossed bank entry points, telecom systems, employee tools, delivery, and customer self-service. A broken handoff at any stage prevented activation.'],
    roleCopy: ['I designed customer and employee journeys and aligned them through a service blueprint, covering plan choice, order, delivery status, activation, payment, and support.'],
    insights: ['The customer promise depends on invisible employee and fulfilment steps.', 'Status and next action must be consistent across channels.', 'Self-service is part of acquisition quality, not a later support feature.'],
    decisions: [['Design only the consumer app', 'Rejected.', 'Employee and fulfilment states were included in the service model.'], ['Expose telecom system states directly', 'Rejected.', 'Customer-facing statuses translate operational detail into a clear next action.']],
    journey: [['Choose', 'Build a plan in a bank or mobile entry point.'], ['Order', 'Confirm identity, delivery, and payment.'], ['Activate', 'Connect customer and employee completion states.'], ['Manage', 'Use payments, support, and plan controls in self-service.']],
    media: [
      { type: 'phones', srcs: ['assets/sbermobile-plan-builder-en.png','assets/sbermobile-payment-methods-en.png','assets/sbermobile-support-en.png'], integrity: 'Portfolio translation of product work · English', caption: 'One coherent product surface: plan selection, payment, and support.' }
    ],
    edgeCases: ['Delivery or activation fails', 'Customer and employee see different status', 'Payment method is unavailable', 'Support is needed before service activation'],
    impact: {'My contribution': 'Designed customer and employee journeys across acquisition, activation, payment, and self-service.', 'Validation evidence': 'The service blueprint exposed mismatched customer, employee, delivery, and telecom-system states before implementation.', 'Measured product growth': 'During my product period, SberMobile grew from more than 10,000 first-week pilot connections to 500,000 active subscribers across 50 regions.', 'Measurement framework': 'Plan-builder completion, order completion, time to SIM, successful activation, first payment, self-service completion, and support contacts.'},
    sources: [['SberMobile', 'https://sbermobile.ru/'], ['Launch and first-week connections', 'https://sbermobile.ru/about/news/sberbank_obyavlyaet_o_zapuske_mobilnogo_operatora_pod_novym_brendom_sbermobayl.html'], ['500K active subscribers', 'https://sbermobile.ru/about/news/sbermobayl_dostig_otmetki_v_polmilliona_aktivnyh_abonentov.html']]
  }
};
