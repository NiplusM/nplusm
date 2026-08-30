(function () {
  'use strict';

  const cases = window.CASES || {};
  const update = (id, patch) => Object.assign(cases[id], patch);

  update('agentic', {
    headline: 'Turning agent work from a chat transcript into a reviewable brief',
    deck: 'I took the product from developer research to a coded five-stage prototype, moderated validation, and a public waitlist test before full production investment.',
    integratedStory: {
      problemEvidence: 'Developers could delegate a multi-step task, but the brief disappeared into the chat as the transcript grew. Goals, constraints, progress, feedback, and final changes lived in different places, so reviewers could not tell whether the agent had solved the right problem. The wider trust gap was already measurable: 46% of developers distrusted AI-output accuracy, only 33% trusted it, and 66% said AI answers were often almost right rather than reliably correct.',
      directionNarrative: 'Make the brief—not the conversation—the persistent product object. Goal, acceptance criteria, plan, execution, feedback, and review should remain connected throughout the task.',
      workNarrative: 'I interviewed developers, mapped the moments where they lost control, and designed a five-stage workspace from brief to review. I coded the complete workflow, tested it in moderated sessions, refined the interaction model, and worked with Marketing on the public prototype and waitlist.',
      resultNarrative: 'JetBrains released the working 5-stage prototype publicly before assigning a full production team. Moderated sessions tested comprehension, steering, and review across the complete brief-to-result flow; the waitlist added a demand signal before the larger engineering commitment.'
    },
    sectionTitles: {
      challenge: 'Chat was the wrong place to manage agent work',
      direction: 'Make the brief persistent',
      process: 'Test the complete workflow before production',
      chapters: 'From brief to review in one workspace',
      result: 'A public prototype before a production commitment'
    },
    cover: { type: 'video', src: 'assets/jetbrains-agentic-markdown.mp4', poster: 'assets/agentic-cover-review-ready.png?v=2', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    openingMedia: { type: 'video', src: 'assets/jetbrains-agentic-markdown.mp4', poster: 'assets/agentic-cover-review-ready.png?v=2', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [
      ['46% distrust', 'Public benchmark for AI-output accuracy'],
      ['Five stages', 'Brief to review'],
      ['Public waitlist', 'Demand evidence before full build']
    ],
    journey: [
      ['Brief', 'Keep the goal and acceptance criteria visible.'],
      ['Plan', 'Show what the agent will do and which project context it will use.'],
      ['Execute', 'Expose progress and let the developer intervene before completion.'],
      ['Review', 'Judge the changes against the original acceptance criteria.']
    ],
    media: [
      { type: 'image', src: 'assets/agentic-ide-brief-full.png', title: 'Keep the brief visible', dark: true, className: 'media-frame--agentic-ide', integrity: 'Working coded prototype · 2025', caption: 'Goal and acceptance criteria remain the stable reference throughout the task.' },
      { type: 'image', src: 'assets/agentic-ide-plan-full.png', title: 'Make the plan inspectable', dark: true, className: 'media-frame--agentic-ide', integrity: 'Working coded prototype · 2025', caption: 'The complete IDE view keeps workflow settings and execution rules visible in context.' },
      { type: 'image', src: 'assets/agentic-ide-progress-full.png', title: 'Follow progress without returning to chat', dark: true, className: 'media-frame--agentic-ide', integrity: 'Working coded prototype · 2025', caption: 'Completed and pending work stay attached to the plan while the agent runs.' },
      { type: 'image', src: 'assets/agentic-ide-review-full.png', title: 'Review evidence against the original criteria', dark: true, className: 'media-frame--agentic-ide', integrity: 'Working coded prototype · 2025', caption: 'Each acceptance criterion carries implementation evidence and remains open to correction.' }
    ],
    impact: {
      'My contribution': 'Owned the cycle from developer research and product framing to coded prototyping, moderated validation, and the public waitlist launch.',
      'Validation evidence': 'Developers tested the complete multi-step workflow before a production team was assigned.'
    }
  });

  update('codereview', {
    headline: 'Designing code review for agent-generated changes',
    deck: 'I co-authored the research, translated 64 practitioner problems into a three-level IDE workflow, and built the reusable prototype system used to validate it.',
    integratedStory: {
      problemEvidence: 'A traditional diff shows what changed, but not why an agent changed it, where confidence is low, or which files deserve attention first. Seventeen developers identified 64 concrete review problems; the product challenge was to help reviewers calibrate trust without inspecting every line equally.',
      directionNarrative: 'Organise review around risk and evidence. Start with the change overview, narrow to the file, then expose rationale and evidence at the exact snippet where a decision is required.',
      workNarrative: 'I translated the study’s findings into a three-level interaction model and seven recurring review constructs, then built the semi-interactive React prototype used in the evaluation. I also created two reusable agent skills: one moves dynamic web prototypes into an IDE shell; the other applies JetBrains layout, density, components, icons, and states closely enough for credible research without production-plugin engineering.',
      resultNarrative: 'Forty-three professionals evaluated the interface: 72% said they would use it, 63% expected less review effort, and 52% expected less trust-assessment effort. The validated interaction framework and high-fidelity IDE prototype became the foundation for launching the full product. Two reusable skills also made credible IDE prototypes available to research teams across JetBrains.'
    },
    sectionTitles: {
      challenge: 'A diff cannot explain an agent’s reasoning',
      direction: 'Direct attention to risk, not every line',
      process: 'Translate 64 review problems into one product model',
      chapters: 'Three levels of review, one confidence decision',
      result: 'Validated with 43 professional developers'
    },
    proof: [
      ['17 / 64', 'Discovery participants / review challenges'],
      ['43', 'Validation respondents'],
      ['72%', 'Would use the proposed tool']
    ],
    journey: [
      ['Discover', 'Seventeen developers described 64 concrete review problems.'],
      ['Structure', 'Turn those problems into a three-level review model and seven recurring constructs.'],
      ['Prototype', 'Build a deterministic React prototype inside a credible IDE shell.'],
      ['Validate', 'Evaluate the complete interface with 43 professional developers.']
    ],
    media: [
      { type: 'image', src: 'assets/code-review-prototype-ai-judge.png', title: 'Turn risk and evidence into a review decision', dark: true, integrity: 'Validated research prototype · 2026', caption: 'The final IDE workflow groups findings by risk, exposes evidence beside the code, and keeps the reviewer’s action visible at the point of judgement.' }
    ],
    impact: {
      'My contribution': 'Co-authored the research, translated the findings into the product model, built the validation prototype, and created two reusable IDE-prototyping skills.',
      'Validation evidence': '43 professionals evaluated the final interface; 72% would use it, 63% expected less review effort, and 52% expected less trust-assessment effort.'
    }
  });

  update('vscode', {
    headline: 'Launching JetBrains AI as a native VS Code workflow',
    deck: 'I led product framing and interaction design for the public preview, connecting project context, agent progress, multi-file changes, and review inside VS Code.',
    integratedStory: {
      problemEvidence: 'JetBrains was entering the editor used by 75.9% of Stack Overflow survey respondents. A transplanted JetBrains tool window would feel foreign, while a generic chat would lose the project context and review discipline that made the product useful.',
      directionNarrative: 'Use VS Code’s own structure and conventions, then make project context, execution state, and change review visible inside that familiar shell.',
      workNarrative: 'I defined the launch jobs, mapped native entry points, and designed the flow from file or project context to chat, multi-file execution, partial application, and review. The first release focused on one coherent project-aware workflow across eight languages rather than feature parity with JetBrains IDEs.',
      resultNarrative: 'The extension launched publicly and reached 29,370 unique Marketplace installs in the 24 August 2026 snapshot. My shipped contribution was the product model and launch experience across eight languages.'
    },
    sectionTitles: {
      challenge: 'JetBrains AI had to feel native in VS Code',
      direction: 'Keep project context and review inside the editor',
      process: 'Choose a coherent launch workflow, not feature parity',
      chapters: 'From project context to multi-file review',
      result: '29,370 installs after launch'
    },
    cover: { type: 'image', src: 'assets/vscode-agent-working.png', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    openingMedia: { type: 'video', src: 'assets/jetbrains-vscode-agents.mp4', poster: 'assets/jetbrains-vscode-agents.mp4.png', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [['29,370', 'Unique Marketplace installs'], ['8', 'Languages at public preview'], ['Public preview', 'A new product surface shipped']],
    journey: [
      ['Context', 'Bring the relevant file, selection, or project into the conversation.'],
      ['Execute', 'Keep code and agent state side by side while the task runs.'],
      ['Review', 'Inspect multi-file changes before applying them.']
    ],
    media: [
      { type: 'image', src: 'assets/vscode-context-project.png', title: 'Bring the relevant context into the conversation', dark: true, integrity: 'Public preview workflow · 2025', caption: 'Files, selections, and the active project travel with the request.' },
      { type: 'image', src: 'assets/vscode-agent-working.png', title: 'Keep code and agent state side by side', dark: true, integrity: 'Public preview workflow · 2025', caption: 'The user can follow execution without leaving the working editor context.' },
      { type: 'image', src: 'assets/vscode-agent-review.png', title: 'Review multi-file changes before applying them', dark: true, integrity: 'Public preview workflow · 2025', caption: 'Progress, generated changes, partial acceptance, and rejection remain explicit.' }
    ],
    impact: {
      'My contribution': 'Led end-to-end product framing and interaction design for the new VS Code surface through public preview.',
      'Validation evidence': 'The released workflow connected context, multi-file execution, progress, review, and partial application across eight launch languages.'
    }
  });

  update('resharper', {
    headline: 'Adding AI without weakening trusted ReSharper workflows',
    deck: 'I designed the first ReSharper AI release around four jobs and three native entry points, keeping generative help distinct from deterministic inspections and refactorings.',
    integratedStory: {
      problemEvidence: 'ReSharper users already relied on fast, predictable inspections and refactorings inside a product with 3.03 million Marketplace installs and a 4.3/5 rating. A generic AI chat would duplicate trusted tools, hide the code context behind a request, and blur the difference between deterministic and generative actions.',
      directionNarrative: 'Place generative help beside the code and existing IDE actions, but preserve an explicit boundary: deterministic tools stay predictable; AI responses stay reviewable.',
      workNarrative: 'I defined four launch jobs—chat, explain, identify issues, and generate—and connected them to three familiar entry paths: the main menu, editor context menu, and Alt+Enter. I designed loading, response, apply, reject, and recovery states so AI extended the .NET workflow instead of becoming a separate mode.',
      resultNarrative: 'ReSharper 2023.2 shipped four AI workflow groups through three native entry paths—12 workflow–entry combinations in the first release. Later JetBrains research across AI Assistant users reported that 91% saved time and 71% completed tasks faster.'
    },
    sectionTitles: {
      challenge: 'AI could not blur trusted ReSharper actions',
      direction: 'Put generative help beside deterministic tools',
      process: 'Define the first four jobs and their entry points',
      chapters: 'AI that starts from code context',
      result: 'Shipped in ReSharper 2023.2'
    },
    cover: { type: 'image', src: 'assets/resharper-ai-explain.png', className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [['12', 'Workflow–entry combinations shipped'], ['3.03M', 'Marketplace installs at product scale'], ['4.3 / 5', 'Marketplace rating']],
    journey: [['Select', 'Start from code, an issue, or an editor action.'], ['Ask', 'Pass context to a focused AI workflow.'], ['Review', 'Inspect the generated explanation or change.'], ['Apply', 'Accept, revise, or discard the result.']],
    media: [
      { type: 'image', src: 'assets/resharper-ai-explain.png', title: 'Start from the selected code', integrity: 'Released product interface · 2023', caption: 'Native entry points carry the relevant code context into a focused explain, generate, or refactor action.' },
      { type: 'image', src: 'assets/resharper-vs-ai-actions.png', title: 'Keep generative help beside deterministic tools', dark: true, integrity: 'Released product interface · 2023', caption: 'The assistant extends the existing ReSharper workflow while inspections and refactorings keep their predictable meaning.' }
    ],
    impact: {
      'My contribution': 'Defined and shipped the first ReSharper AI workflow family and its contextual entry model.',
      'Validation evidence': 'Four workflow groups were prototyped and reviewed in realistic IDE scenarios before the 2023.2 release.'
    }
  });

  update('rider', {
    headline: 'Designing contextual AI, agent work, and performance diagnosis inside Rider',
    deck: 'As Product Design Lead, I built the practice around the work and stayed hands-on on three shipped product problems: contextual AI, longer-running agent workflows, and performance monitoring.',
    period: '2022—2025',
    integratedStory: {
      problemEvidence: 'Rider was adding AI and runtime diagnostics to an already dense professional IDE with a 35% surveyed primary-IDE share at the start of the period. Three product problems needed different interaction models: assistance that must not interrupt coding, delegated work that must remain inspectable, and performance signals that must lead developers to an actionable cause.',
      directionNarrative: 'Treat each problem as its own product story while reusing a small set of principles: preserve code context, show system state, keep consequential actions reviewable, and always provide a clear path back to the developer’s work.',
      workNarrative: 'I established the design practice and release-review cadence, and managed three product designers across hiring, individual goals, performance reviews, development, compensation, and team composition. I stayed hands-on across three product tracks: contextual assistance beside the code, inspectable agent work, and Monitoring that connects runtime signals to profiler evidence and the responsible method.',
      resultNarrative: 'Rider shipped contextual AI inside the coding flow, longer-running agent workflows with visible control and review, and a Monitoring journey from CPU, memory, and GC signals to source code. The product-design practice supported delivery across the teams; during the same period, Rider’s surveyed primary-IDE share rose from 35% to 44%.'
    },
    sectionTitles: {
      challenge: 'Three new product problems inside one mature IDE',
      direction: 'Keep the workflows distinct and the controls predictable',
      process: 'Research, prototype, ship, and review in the release cycle',
      chapters: 'Three shipped Rider product stories',
      result: 'Contextual help, controlled agent work, and actionable diagnosis'
    },
    cover: { type: 'image', src: 'assets/rider-official-islands-ui.png', dark: true, className: 'work-card__media--clean-ui work-card__media--desktop-cover' },
    proof: [['35% → 44%', 'Surveyed primary-IDE share during the period'], ['3 product stories', 'Contextual AI, agent work, and Monitoring'], ['3 designers', 'Managed through one release-review model']],
    decisions: [],
    insights: [
      'Contextual help and delegated work need different levels of control, even when they share the same AI layer.',
      'Agent workflows need visible scope, progress, interruption, and review before autonomy feels trustworthy.',
      'Monitoring must lead from a signal to profiler evidence and source code.'
    ],
    subcases: [
      {
        label: 'Product case 01',
        title: 'Contextual AI that starts beside the code',
        period: '2023—2025',
        problem: 'A generic chat window pulls developers away from the code and makes them restate context the IDE already has. Fast assistance needed to remain local, low-interruption, and reversible.',
        work: 'I designed a contextual assistance ladder: completion for immediate suggestions, actions beside selected code or an error, and project-aware conversation when the task needed more context. Every generated change kept an explicit apply or reject decision.',
        result: 'Rider shipped contextual completion, in-editor AI actions, and project-aware assistance as part of the coding flow rather than as a separate destination.',
        media: [{ type: 'image', src: 'assets/rider-current-code-completion.png', dark: true, integrity: 'Rider AI Assistant · shipped interface', caption: 'The assistant begins with the current code and keeps the final change under the developer’s control.' }]
      },
      {
        label: 'Product case 02',
        title: 'Agent work that stays visible and reviewable',
        period: '2024—2025',
        problem: 'Longer-running tasks can change several files and take multiple steps. Without a visible plan, progress, interruption, and final review, developers lose the confidence to delegate meaningful work.',
        work: 'I designed the control model around the task rather than the chat: define scope, expose execution state, let the developer interrupt or redirect the run, and collect the resulting changes for review before they enter the codebase.',
        result: 'Rider shipped agent workflows with task state, execution, and review kept inside the IDE, giving developers a controlled path from delegation back to code ownership.',
        media: [{ type: 'image', src: 'assets/rider-official-junie-2025-2.png', dark: true, integrity: 'Rider agent workflow · shipped interface', caption: 'The agent exposes its work as a task the developer can follow, interrupt, and review.' }]
      },
      {
        label: 'Product case 03',
        title: 'Monitoring that leads from a signal to the responsible method',
        period: '2024.1—2025.2',
        problem: 'Developers could see that an application was slow or memory-heavy, but diagnosing the cause required disconnected moves between metrics, profiler evidence, call stacks, and source code.',
        work: 'I structured a progressive journey from CPU, memory, and GC signals through detected issues and selected time ranges to dotTrace evidence and the responsible method.',
        result: 'Monitoring shipped in 2024.1, expanded to C++, Unity, and Unreal contexts in 2024.2, and gained interactive charts and a direct finding-to-dotTrace path in 2025.2.',
        media: [{ type: 'image', src: 'assets/rider-official-monitoring-2025-2.png', dark: true, integrity: 'Rider Monitoring · shipped interface', caption: 'Charts, detected issues, profiler evidence, and source navigation form one progressive diagnosis path.' }]
      }
    ],
    impact: {
      'My contribution': 'Built and managed Rider’s product-design practice while leading hands-on design work across contextual AI, agent workflows, and Monitoring.',
      'Validation evidence': 'Each track moved through product framing, realistic IDE prototypes, cross-functional delivery review, and post-release interface review.'
    }
  });

  update('autodeal', {
    headline: 'Coordinating buyer and seller through one protected transaction',
    deck: 'I designed the linked buyer and seller journeys for Auto.ru Safe Deal—from entry in the listing or chat to identity checks, protected payment, handover, and recovery.',
    integratedStory: {
      problemEvidence: 'Auto.ru helped people find a car and contact a seller, but the transaction then moved off-platform into cash, manual document checks, and improvised coordination. More than 60% of online auto loans were being cashed out, and one in five people had encountered—or knew someone who had encountered—fraud in a private-car purchase.',
      directionNarrative: 'Give each participant a role-specific checklist, then connect both sides through one shared deal status that always shows who needs to act next.',
      workNarrative: 'I mapped the buyer and seller journeys separately: four preparation tasks for the buyer, five for the seller. I designed the shared status model across the deal page and chat, plus identity recognition, corrections, bank checks, protected funds, handover, cancellation, non-response, and recovery.',
      resultNarrative: 'Auto.ru and Tinkoff launched Safe Deal in October 2021. The released service connected buyer, seller, bank, and operations through identity and vehicle checks, contract preparation, protected payment, and handover. The published online process was designed to take no more than 15 minutes.'
    },
    sectionTitles: {
      challenge: 'The marketplace stopped before the transaction began',
      direction: 'Give each side its own tasks inside one shared deal',
      process: 'Map the failure states before delivery',
      chapters: 'One deal state across the page and chat',
      result: 'A private-car transaction in 15 minutes or less'
    },
    proof: [['≤15 min', 'Published launch service time'], ['4 buyer tasks', 'Role-specific preparation'], ['5 seller tasks', 'Role-specific preparation']],
    journey: [
      ['Enter', 'Explain Safe Deal in the listing or chat where both sides already communicate.'],
      ['Prepare', 'Give the buyer four tasks and the seller five role-specific tasks.'],
      ['Verify', 'Recognise documents, reveal incomplete fields, and require review before confirmation.'],
      ['Coordinate', 'Show the shared deal state and who needs to act next.'],
      ['Complete', 'Confirm handover, release funds, cancel safely, or recover from a stalled deal.']
    ],
    launchReview: null,
    impact: {
      'My contribution': 'Owned the linked buyer and seller interaction model, shared deal state, validation, recovery, and desktop delivery.',
      'Validation evidence': 'The team launched the complete transaction service across Auto.ru, Tinkoff, and operational touchpoints in October 2021.'
    }
  });

  update('alfa', {
    headline: 'Rebuilding foreign-trade banking around customer operations',
    deck: 'I redesigned five complex corporate workflows around the work customers needed to complete, then carried one service model across web, desktop, and mobile.',
    integratedStory: {
      problemEvidence: 'One foreign-trade operation could require rates, accounts, counterparties, contracts, documents, signatures, and currency-control review. Research with financial directors, accountants, and currency-control specialists showed the same work fragmented across bank-owned forms; the redesign had to unify 5 workflows on 3 product surfaces.',
      directionNarrative: 'Replace separate forms with five end-to-end customer operations—conversion, international transfer, currency control, counterparties, and execution—built on reusable business objects and one status model.',
      workNarrative: 'I interviewed financial directors, accountants, and currency-control specialists; mapped their journeys; and prototyped the complete workflows. My software-development background helped me connect the new information architecture to reusable counterparties, contracts, and documents, then adapt the model across web, desktop, and mobile.',
      resultNarrative: 'The redesign shipped one tested service model across five workflows and three surfaces. Alfa-Bank’s 2018 report recorded the scale of the medium-business unit around the launch: 53,000 active clients, +46% year over year, and operating revenue up 1.6× to RUB 19 billion.'
    },
    sectionTitles: {
      challenge: 'Foreign-trade work was split into bank-owned forms',
      direction: 'Organise the product around five customer operations',
      process: 'Reuse data and expose review states early',
      chapters: 'One service model across web, desktop, and mobile',
      result: 'Five connected workflows shipped across three surfaces'
    },
    proof: [['5 workflows', 'One customer-centred service model'], ['53K clients', 'Reported medium-business scale'], ['+46% YoY', 'Reported active-client growth in 2018']],
    media: [
      { type: 'image', src: 'assets/alfa-ved-conversion-order-en.png', title: 'Complete a currency conversion in one place', dark: true, integrity: 'Portfolio reconstruction from project materials · English', caption: 'Rate, debit, credit, execution conditions, and order status stay in one decision context.' },
      { type: 'image', src: 'assets/alfa-ved-documents-en.png', title: 'Reuse documents and contracts across operations', dark: true, integrity: 'Portfolio reconstruction from project materials · English', caption: 'Documents are organised around the business contract with explicit review, error, and recovery states.' },
      { type: 'image', src: 'assets/alfa-ved-contractors-en.png', title: 'Keep counterparties as reusable business objects', dark: true, integrity: 'Portfolio reconstruction from project materials · English', caption: 'One counterparty connects contracts, representatives, and transaction history instead of being entered again for every operation.' }
    ],
    impact: {
      'My contribution': 'Researched, prototyped, and delivered five connected foreign-trade workflows across web, desktop, and mobile.',
      'Validation evidence': 'The service model was tested with corporate customers and reused counterparties, contracts, documents, and status logic across operations.'
    },
    sources: [
      ['Current Alfa-Bank Foreign Trade service', 'https://alfabank.ru/corporate/ved/'],
      ['Original project materials', 'https://www.behance.net/gallery/97918335/Digital-Banking']
    ]
  });

  update('tonwallet', {
    headline: 'Making a crypto transfer feel like sending a Telegram message',
    deck: 'I led the core Wallet experience and its Telegram integration across onboarding, portfolio, transfer, exchange, confirmation, and recovery.',
    integratedStory: {
      problemEvidence: 'Crypto wallets exposed addresses, networks, fees, and irreversible confirmation to people who expected the speed and familiarity of Telegram. At the start of the native-integration quarter, 382,148 TON wallets were registered; growth depended on removing cross-app handoffs and copied-address risk before the first successful transfer.',
      directionNarrative: 'Use Telegram identity and recipient context to remove address handling, while keeping asset, network, fee, and irreversible confirmation visible at the moment of decision.',
      workNarrative: [
        'I led product design and stayed hands-on across entry from Telegram, first-use education, funding, portfolio, recipient selection, transfer, exchange, and transaction states. The key decision was to use Telegram identity for recipient selection, then reveal network, fees, and irreversible actions when they affected the decision.',
        'The prototypes covered the full journey, not just the send screen: onboarding, choosing a recipient, understanding the amount and fee, confirming a transaction, waiting for it to complete, and recovering from a failure.',
        'I also worked through the cases that could interrupt that journey: an invalid or wrong recipient, an expired exchange quote, a changed network fee, insufficient funds, and a pending or failed transaction. Pending, failed, and completed transfers needed distinct states so the interface did not suggest that an irreversible payment could simply be undone.'
      ],
      resultNarrative: [
        'Wallet shipped as a native Telegram attachment-menu action with four connected journeys: onboarding, portfolio, contact-based transfers, and exchange. People could choose a Telegram contact instead of moving between apps to copy and paste a blockchain address, then review the financial details before confirming.',
        'During the launch quarter, registered wallets across TON grew from 382,148 to 901,015: 518,867 additional wallets, or 136% growth. The wider Wallet product later passed 100 million activations.',
        'The success criteria followed the complete funnel: onboarding completion, funded wallets, successful transfers, repeat transactions, recovery after a failed transfer, and exchange conversion. These distinguish opening a wallet from using it successfully and returning to it.'
      ]
    },
    sectionTitles: {
      challenge: 'Crypto transfers were too technical for a messaging context',
      direction: 'Choose a Telegram contact instead of copying an address',
      process: 'Simplify the journey without hiding financial risk',
      chapters: 'From first open to confirmed transaction',
      result: 'A native Wallet flow inside Telegram'
    },
    proof: [['382K → 901K', 'Registered wallets across the TON network'], ['+136%', 'TON network growth in the launch quarter'], ['100M+', 'Later Wallet activations']],
    journey: [['Enter', 'Open Wallet from Telegram and understand the first useful action.'], ['Choose', 'Select a Telegram contact instead of copying a blockchain address.'], ['Review', 'Check the asset, amount, network, fee, and recipient before money moves.'], ['Resolve', 'See confirmation, pending, failure, and recovery in the same product shell.']],
    media: [
      { type: 'image', src: 'assets/ton-wallet-official-ton.png', title: 'From first open to a funded wallet', dark: true, integrity: 'Official Wallet interface', caption: 'First-use education led into adding or receiving an asset with clear network context. Balance, assets, and the next useful action stayed inside Telegram, so users did not have to learn a separate application before making their first transfer.' },
      { type: 'image', src: 'assets/ton-wallet-official-transfer.png', title: 'Choose a contact, then review the transfer', dark: true, integrity: 'Official Wallet interface', caption: 'Telegram identity replaced the address-copying handoff. The review still had to make the recipient, asset, amount, network, and fee explicit before an irreversible action. Confirmation, pending, and failure states carried the journey beyond the tap on Send.' },
      { type: 'image', src: 'assets/ton-wallet-official-exchange.png', title: 'Keep exchange in the same product shell', dark: true, integrity: 'Official Wallet interface', caption: 'Exchange reused the same review pattern for the asset pair, quote, fee, and final amount. The flow also covered an expired quote, a fee change, and insufficient funds, rather than treating every exchange as an immediate success.' }
    ],
    impact: {
      'My contribution': 'Led hands-on product design across onboarding, portfolio, transfer, exchange, transaction state, and the Telegram integration.',
      'Validation evidence': 'Prototypes covered onboarding, recipient selection, amount and fee comprehension, confirmation, pending states, and recovery.',
      'Measurement framework': 'Onboarding completion, funded wallets, transaction success, repeat transactions, failed-transfer recovery, and exchange conversion.'
    },
    sources: [['Wallet product', 'https://wallet.tg/'], ['TON Q2 2022 report', 'https://t.me/s/toncoin?before=499'], ['100M+ activation milestone', 'https://top.co/insights/ton-wallet-launches-in-usa']]
  });

  update('ton', {
    headline: 'Turning a live blockchain into an understandable product',
    deck: 'I rebuilt TON Foundation’s public product around proof, audience intent, and clear handoffs to documentation, code, tools, wallets, and applications.',
    integratedStory: {
      problemEvidence: 'The inherited public layer looked dormant while the community already operated 115 validators, seven lite servers, three archive nodes, mobile wallets, APIs, and a testnet. Visitors could read about the protocol without seeing proof that the network was active or a path to a useful first action.',
      directionNarrative: 'Lead with observable network proof, then route builders, validators, application teams, and users to the working surface that matches their intent.',
      workNarrative: 'I researched the four audiences and the decision each needed to make, rebuilt the information architecture, and designed a progressive narrative from network proof to products, primitives, and tools. I owned the content model, reusable interface system, prototype validation, and launch.',
      resultNarrative: 'The relaunch replaced one protocol-first catalogue with four intent-based activation paths and one maintainable public product and content system. The developer layer continued to grow: TON’s Q2 2023 report recorded 300+ documentation commits, 111 merges, and 32 unique contributors.'
    },
    sectionTitles: {
      challenge: 'The network was live; its public product looked abandoned',
      direction: 'Lead with proof, then route people to a working tool',
      process: 'Map four audiences to four activation paths',
      chapters: 'From network proof to developer action',
      result: 'A maintainable front door for the ecosystem'
    },
    proof: [['115 validators', 'Live network represented at relaunch'], ['4 paths', 'Builders, validators, teams, and users'], ['300+ commits', 'Later Q2 2023 documentation activity']],
    impact: {
      'My contribution': 'Owned audience research, information architecture, content model, reusable interface system, prototype validation, and launch.',
      'Validation evidence': 'Four audience paths connected the public narrative to working documentation, code, tools, wallets, and applications.'
    }
  });

  update('top', {
    nextCaseTitle: 'Continue to the hands-on Wallet case',
    headline: 'Launching two different products from one portfolio thesis',
    deck: 'As Head of Product Design, I built the evidence-first portfolio process and used it to guide two early product launches: STON.fi’s core swap protocol and the Getgems marketplace on TON mainnet.',
    integratedStory: {
      problemEvidence: 'TOP’s published history names 4 early portfolio bets, but each had a different mechanism and failure mode. In this case, STON.fi had to make an irreversible swap understandable; Getgems had to create creator supply and collector demand while making ownership and settlement trustworthy.',
      directionNarrative: 'Use one decision model but validate a different core mechanism for every product: frame the opportunity, prove the user problem, test the riskiest interaction, and define the signal required for launch.',
      workNarrative: 'I built and led a multidisciplinary design team anchored by four product designers and spanning motion, graphic and illustration, and marketing design. I owned hiring, individual goals, performance reviews, development, compensation, and team-composition decisions. In parallel, I built the four-stage portfolio process, led product reviews, aligned founders, product, engineering, and business stakeholders, and joined high-risk launch work. For STON.fi, the review centred on quote comprehension, wallet approval, fees, and transaction states. For Getgems, it centred on collection discovery, creator supply, minting, listing, purchase, and ownership.',
      resultNarrative: 'Getgems launched on TON mainnet on 27 April 2022; STON.fi completed its core protocol launch in Q3 2022. Their later published scale shows the two mechanisms became durable products: STON.fi reports $7.6B in all-time volume, 36.4M swaps, and 5.8M users; TOP reports 4.5M+ connected wallets for Getgems.'
    },
    sectionTitles: {
      challenge: 'Two products, two different reasons to fail',
      direction: 'Validate the mechanism before funding the full experience',
      process: 'Turn portfolio reviews into launch decisions',
      chapters: 'Two portfolio launches with different product mechanics',
      result: 'A swap protocol and a marketplace reached mainnet'
    },
    proof: [['2 mainnet launches', 'Getgems and STON.fi in 2022'], ['$7.6B', 'Later STON.fi all-time volume'], ['4.5M+', 'Later Getgems connected wallets']],
    decisions: [],
    insights: ['A portfolio process should standardise decision quality, not force products into the same journey.', 'A financial product must prove transaction comprehension and recovery before adding breadth.', 'A marketplace must validate supply, discovery, and settlement as one connected mechanism.'],
    subcases: [
      {
        label: 'Portfolio launch 01',
        title: 'STON.fi: make the first swap understandable before it becomes irreversible',
        period: 'Q3 2022',
        problem: 'A new TON user had to connect a wallet, choose an asset pair, understand the expected output and fee, approve the transaction externally, and recognise whether the swap had completed. Any ambiguity became a trust problem.',
        work: 'I led portfolio-level product framing and launch review around the complete transaction: pair and amount, quote, price impact, fee, wallet approval, pending state, completion, and recovery. The launch gate was comprehension of the money movement—not the number of finished screens.',
        result: 'STON.fi completed its core AMM protocol launch in Q3 2022. The current product reports $7.6B all-time volume, 36.4M swaps, and 5.8M users.',
        media: [{ type: 'image', src: 'assets/top-stonfi-launch.png', dark: true, integrity: 'Official STON.fi product · current interface and published scale', caption: 'The product promise remains explicit: self-custody, one workflow, visible routes and fees, and a clear entry into the swap dApp.' }]
      },
      {
        label: 'Portfolio launch 02',
        title: 'Getgems: launch both sides of the TON marketplace together',
        period: '27 April 2022',
        problem: 'Collectors needed trustworthy discovery and purchase; creators needed a path to mint, organise, list, and release collections. Launching only the catalogue or only the creator tooling would leave the marketplace without liquidity.',
        work: 'I guided product framing and launch readiness around the two-sided loop: connect a wallet, discover and filter collections, inspect an item, mint or list it, confirm the transaction, and see ownership update. Creator supply, collector demand, and settlement were reviewed as one product mechanism.',
        result: 'Getgems launched on TON mainnet with collection discovery, filtering and sorting, minting, and wallet-based trading. The current TOP page reports 4.5M+ connected wallets and a community of more than one million.',
        media: [{ type: 'image', src: 'assets/top-getgems-marketplace.png', dark: true, integrity: 'Official Getgems marketplace · current interface', caption: 'The live marketplace connects discovery, product detail, wallet entry, and trading across a broad inventory of Telegram-native assets.' }]
      }
    ],
    impact: {
      'My contribution': 'Built and led a multidisciplinary design team anchored by four product designers and spanning motion, graphic and illustration, and marketing design; owned people management, built the four-stage portfolio model, and led product framing, validation, and launch-readiness reviews for STON.fi and Getgems.',
      'Validation evidence': 'Each team had to prove its core user loop, failure states, and launch signal before moving from portfolio opportunity to full delivery.'
    },
    sources: [['The Open Platform portfolio and history', 'https://top.co/about'], ['STON.fi product and roadmap', 'https://ston.fi/'], ['STON.fi portfolio metrics', 'https://top.co/portfolio/ston-fi'], ['Getgems portfolio metrics', 'https://top.co/portfolio/getgems'], ['Getgems mainnet launch', 'https://t.me/s/getgems?before=79']]
  });

  update('simple', {
    headline: 'Turning a fasting timer into a daily programme',
    deck: 'I connected personalisation, daily guidance, reflection, progress, and subscription value so the product had a reason to bring people back after the timer stopped.',
    integratedStory: {
      problemEvidence: 'The timer answered one question—how long have I fasted?—but it did not create a reason to return after the timer stopped. During the pivot the product was growing quickly—350,000 new users in December 2019 and more than one million users by February 2020—so daily guidance, reflection, and visible progress had become a retention problem at scale.',
      directionNarrative: 'Turn personal inputs into a useful next action every day, then close the loop with reflection and visible progress.',
      workNarrative: 'I designed the connected loop from onboarding and profile inputs to a Personal Program, today’s state, the next action, Journal, and progress. I also built the UI kit, prototypes, microinteractions, multi-platform layouts, and product-design process used to deliver it.',
      resultNarrative: 'The daily programme launched during my 2019–2020 product period. Simple reported 350,000 new users in December 2019 and more than one million iOS and Android users by February 2020.'
    },
    sectionTitles: {
      challenge: 'A timer had no reason to bring people back',
      direction: 'Turn today’s state into the next useful action',
      process: 'Connect personalisation to daily behaviour',
      chapters: 'A programme across today, Journal, and progress',
      result: 'More than one million users by February 2020'
    },
    proof: [['350K', 'New users in December 2019'], ['1M+', 'iOS and Android users by February 2020'], ['Daily programme', 'Product pivot shipped']],
    journey: [['Understand', 'Collect the goals and routine needed for the first useful programme.'], ['Guide', 'Show the current state and the next useful action.'], ['Reflect', 'Capture meals, activity, and feelings without creating a second dashboard.'], ['Progress', 'Connect repeated behaviour to weight, goals, and meaningful recaps.']],
    impact: {
      'My contribution': 'Designed the connected programme, UI kit, prototypes, microinteractions, and multi-platform delivery system.',
      'Validation evidence': 'The product moved from a single timer to a daily loop spanning personalisation, guidance, reflection, and progress.'
    }
  });

  update('koshelek', {
    headline: 'Designing the moment a phone becomes a payment card',
    deck: 'I designed the complete Android NFC journey from eligible card and device readiness to terminal feedback, confirmation, decline, and safe retry.',
    integratedStory: {
      problemEvidence: 'Visa reported that nine in ten Visa transactions in Russia were already contactless, while the wider Koshelek app had 7M+ users. The critical payment moment still happened between two devices: the customer had to know whether the phone or terminal owned the next step, whether processing was underway, and whether retrying could create a duplicate charge.',
      directionNarrative: 'Treat provisioning, phone readiness, terminal interaction, and payment result as one state machine with an unambiguous next action at every step.',
      workNarrative: 'I researched and prototyped the complete journey across supported-card recognition, provisioning, NFC and default-wallet checks, tap guidance, processing, success, decline, and safe recovery.',
      resultNarrative: 'Koshelek Pay expanded from two Mastercard partner banks to six Visa issuers: 3× coverage, or +200%. During the rollout, the wider app audience grew from 7M+ to 16M users, a 2.3× distribution surface. The same payment-state model supported Huawei/AppGallery and Belarus launches.'
    },
    sectionTitles: {
      challenge: 'The hardest payment moment happens between phone and terminal',
      direction: 'Make every payment state unambiguous',
      process: 'Design provisioning and payment as one journey',
      chapters: 'From eligible card to confirmed tap',
      result: 'Mastercard launch and a six-bank Visa rollout'
    },
    proof: [['2 → 6 issuers', '3× rollout coverage'], ['7M → 16M', 'Wider app audience during expansion'], ['5 states', 'End-to-end payment journey']],
    cover: { type: 'cropPhones', srcs: ['assets/koshelek-pay-add-card-interface-only.png', 'assets/koshelek-pay-wallet-interface-only.png', 'assets/koshelek-pay-android-nfc-interface-only.png'], dark: true, className: 'koshelek-interface-crops' },
    media: [
      { type: 'cropPhones', title: 'Provision and select a payment card', srcs: ['assets/koshelek-pay-add-card-interface-only.png','assets/koshelek-pay-wallet-interface-only.png'], className: 'koshelek-interface-crops', integrity: 'Designed interface · interface-only crop', caption: 'Card setup and selection make eligibility, the active card, and readiness visible before the terminal interaction begins.' },
      { type: 'cropPhones', title: 'Prepare for the terminal interaction', srcs: ['assets/koshelek-pay-android-nfc-interface-only.png'], className: 'koshelek-interface-crops', integrity: 'Designed interface · interface-only crop', caption: 'The terminal-ready state makes the active card and the next physical action explicit without competing decorative content.' }
    ],
    journey: [['Provision', 'Recognise an eligible card and explain the security step.'], ['Prepare', 'Confirm the active card, NFC, and default-wallet state.'], ['Tap', 'Make the next physical action clear.'], ['Resolve', 'Distinguish processing, success, decline, uncertainty, and safe retry.']],
    impact: {
      'My contribution': 'Researched and designed the complete Android NFC payment state machine from provisioning to recovery.',
      'Validation evidence': 'The journey shipped across Mastercard and Visa issuer rollouts and later platform and market extensions.'
    }
  });

  update('sbermobile', {
    headline: 'From a plan in Sberbank Online to an active mobile service',
    deck: 'I designed the connected customer and employee journey across tariff selection, order, fulfilment, activation, payment, and self-service.',
    integratedStory: {
      problemEvidence: 'The pilot generated 10,000+ first-week connections across four regions, but each SIM purchase still crossed Sberbank Online, telecom systems, delivery, activation, payment, and employee tools. At rollout speed, any state mismatch could turn paid demand into an unactivated order.',
      directionNarrative: 'Treat the purchase as one connected service: configure the plan, reuse known customer data, expose delivery and order status, then carry the active number into recurring account management.',
      workNarrative: 'Using the original project flow as the backbone, I designed dynamic tariff configuration, prefilled customer and address data, delivery-slot selection, order status in Sberbank Online, and the post-activation balance, bundle, payment, and support journey.',
      resultNarrative: 'The connected journey shipped across customer and employee touchpoints. During the product period, SberMobile moved from 10,000+ first-week connections to 500,000 active subscribers; rollout expanded from four to 50 regions—12.5× coverage, or +1,150%.'
    },
    sectionTitles: {
      challenge: 'A paid order could fail between the bank and the mobile service',
      direction: 'Make the SIM order legible from configuration to activation',
      process: 'Connect customer, delivery, telecom, and employee states',
      chapters: 'One order flow, then a recurring service',
      result: '500,000 active subscribers across 50 regions'
    },
    cover: { type: 'image', src: 'assets/sbermobile-behance-order-crop-en.png', className: 'work-card__media--clean-ui work-card__media--sber-clean-interface' },
    proof: [['10K+ → 500K', 'Connections to active subscribers'], ['4 → 50 regions', '12.5× rollout coverage'], ['5 journeys', 'Selection through support']],
    journey: [['Configure', 'Reveal tariff options as the customer changes data, minutes, messages, and unlimited services.'], ['Fulfil', 'Reuse customer data, choose delivery, and keep the order status visible inside Sberbank Online.'], ['Manage', 'After activation, expose balance, bundles, payment methods, and support as one recurring service.']],
    media: [
      { type: 'image', src: 'assets/sbermobile-behance-order-crop-en.png', title: 'Configure and submit the SIM order', className: 'media-frame--sber-behance-crop', integrity: 'Original Behance interface · English portfolio translation · 2018—2019', caption: 'The original plan builder shows the tariff changing with data, minutes, messages, and unlimited-service choices.' },
      { type: 'image', src: 'assets/sbermobile-behance-status-crop-en.png', title: 'Carry order status into Sberbank Online', className: 'media-frame--sber-behance-crop', integrity: 'Original Behance interface · English portfolio translation · 2018—2019', caption: 'Notifications, the activity feed, and the mobile-service entry keep the order and activation state visible inside the bank.' },
      { type: 'image', src: 'assets/sbermobile-behance-service-crop-en.png', title: 'Manage the active service without losing context', className: 'media-frame--sber-behance-crop', integrity: 'Original Behance interface · English portfolio translation · 2018—2019', caption: 'The original post-activation screens connect bundle status, unlimited services, handoff to the telecom app, and balance payment.' }
    ],
    impact: {
      'My contribution': 'Designed the customer and employee journey across Sberbank Online acquisition, fulfilment, activation, payment, and self-service.',
      'Validation evidence': 'The service blueprint aligned banking, telecom, delivery, employee, and customer states before delivery.'
    }
  });
}());
