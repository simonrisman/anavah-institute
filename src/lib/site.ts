import { base } from '$app/paths';

export const practice = {
  name: 'Anavah Institute',
  tagline: 'Empowering Radical Responsibility',
  motto: 'Humility in practice. Excellence in care.',
  phoneDisplay: '(216) 625-0028',
  phoneHref: 'tel:+12166250028',
  faxDisplay: '(216) 625-0053',
  email: 'Scherb@anavah-institute.org',
  headway: 'https://care.headway.co/providers/phillip-scherbakov-2',
  linkedin: 'https://www.linkedin.com/in/phillip-scherbakov/',
  region: 'Ohio and New York',
  providerReach: 'worldwide'
};

export const nav = [
  { href: `${base}/about`, label: 'About' },
  { href: `${base}/patients`, label: 'For Patients' },
  { href: `${base}/providers`, label: 'For Providers' },
  { href: `${base}/wellness`, label: 'Wellness' },
  { href: `${base}/services`, label: 'Services' },
  { href: `${base}/collective`, label: 'Collective' }
];

export const footerExplore = [
  { href: `${base}/about`, label: 'About' },
  { href: `${base}/patients`, label: 'For Patients' },
  { href: `${base}/providers`, label: 'For Providers' },
  { href: `${base}/services`, label: 'Services' },
  { href: `${base}/wellness`, label: 'Eight Dimensions' },
  { href: `${base}/collective`, label: 'Anavah Collective' }
];

export const footerInfo = [
  { href: `${base}/contact`, label: 'Contact' },
  { href: `${base}/accessibility`, label: 'Accessibility' },
  { href: `${base}/privacy`, label: 'Privacy' },
  { href: `${base}/terms`, label: 'Terms' }
];

export const patientSteps = [
  {
    tag: '01 / Start',
    title: 'Tell us what you need',
    text: 'Book a free consultation to talk it through — no referral needed.'
  },
  {
    tag: '02 / Connect',
    title: 'Find the right fit',
    text: 'Get matched to the right services for your needs.'
  },
  {
    tag: '03 / Coordinate',
    title: 'Meet your team',
    text: 'Meet your care coordination and clinical team.'
  },
  {
    tag: '04 / Continue',
    title: 'Care that connects',
    text: 'Receive connected, ongoing care — with all providers aligned.'
  }
];

export const providerBenefits = [
  {
    title: 'Cross-disciplinary referral network',
    text: 'Connect with vetted mental health clinicians, PTs, OTs, and physiatrists. Give and receive coordinated referrals with clinical context — not cold handoffs.'
  },
  {
    title: 'Shared clinical protocols',
    text: 'Access evidence-based, cross-disciplinary care frameworks — intake tools, communication templates, and treatment alignment protocols, ready to implement.'
  },
  {
    title: 'Continuing education',
    text: 'Clinical training programs and Lunch & Learns, with CE credits and certification tracks in integrative care coordination coming soon.'
  },
  {
    title: 'Clinic consulting & implementation',
    text: 'Build integrative care capacity through workflow redesign, staff training, and protocol development with hands-on consulting support.'
  },
  {
    title: 'Clinician community',
    text: 'Join a professional network of cross-disciplinary providers sharing cases, questions, and insights.'
  }
];

export const providerPillars = [
  {
    title: 'Cross-disciplinary coordination',
    text: 'Bridge mental health clinicians, physical therapists, occupational therapists, and physiatrists through a unified care plan.'
  },
  {
    title: 'Patient safety at the core',
    text: 'Medication awareness, contraindication screening, and shared treatment context help prevent harmful gaps and conflicts.'
  },
  {
    title: 'Provider education',
    text: 'Train clinicians and care teams in integrative frameworks — so the healthcare system works better together.'
  }
];

export const audiences = ['Clinics', 'Attorneys', 'Employers', 'Organizations'];

export const serviceGroups = [
  {
    id: 'clinical-care',
    pill: 'Clinical care',
    title: 'Integrative psychiatric care',
    intro: 'Services include, but are not limited to:',
    items: [
      'Psychiatric intake',
      'Psychiatric follow-up',
      'Blood work analysis',
      'Functional fitness assessments',
      'Nutrition optimization',
      'Bibliotherapy',
      'Medication management',
      'Psychiatric consultations'
    ]
  },
  {
    id: 'care-navigation',
    pill: 'Coordination',
    title: 'Care navigation',
    intro: 'Support to help patients and providers connect the pieces of care.',
    items: [
      'Exercise readiness screening',
      'Referral services',
      'Care coordination',
      'Legal report generation during a scheduled session'
    ]
  },
  {
    id: 'professional-education',
    pill: 'For professionals',
    title: 'Professional education',
    intro: '',
    items: [
      'Lunch & Learns',
      'Networking',
      'Consultation calls',
      'CEUs for individuals in each dimension of wellness — coming soon'
    ]
  }
];

export const collectiveFeatures = [
  { title: 'Discussion boards', text: 'Share experiences, ask questions, and connect with others.' },
  {
    title: 'Interest-based groups',
    text: 'Anxiety, ADHD, relationships, personal growth, grief, and more.'
  },
  {
    title: 'Community events',
    text: 'Optional wellness workshops, educational sessions, and peer gatherings.'
  },
  {
    title: 'Peer encouragement',
    text: 'Celebrate progress, share coping strategies, and offer mutual support.'
  },
  {
    title: 'Educational resources',
    text: 'Provider-created content, guided exercises, wellness materials, and training modules.'
  }
];

export type CtaKind = 'patients' | 'patient-booking' | 'provider-booking' | 'collective' | 'insurance';

export type Dimension = {
  slug: string;
  name: string;
  headline: string;
  lead: string;
  what: string[];
  supportIntro?: string;
  support: string[];
  ctas: { kind: CtaKind; label: string }[];
};

const defaultCtas: Dimension['ctas'] = [
  { kind: 'patients', label: 'Explore patient care' },
  { kind: 'provider-booking', label: 'Interested in joining as a provider' }
];

export const dimensions: Dimension[] = [
  {
    slug: 'emotional',
    name: 'Emotional',
    headline: 'Your emotions are signals to be understood.',
    lead: 'Emotional wellness is the foundation of everything else — and at Anavah, it’s where we begin.',
    what: [
      'Emotional wellness is the ability to understand, process, and express emotions in healthy ways and to maintain resilience in the face of stress, loss, and change. It’s not the absence of difficult feelings; it’s the capacity to move through them without being defined by them.',
      'When emotional wellness is compromised, the effects reach everywhere. Physical pain feels more intense. Motivation disappears. Relationships strain. Recovery from illness or injury slows. The body and the emotions are not separate systems.'
    ],
    supportIntro:
      'Every treatment plan begins with a comprehensive psychiatric evaluation that looks at the full emotional picture — not just presenting symptoms, but patterns, history, and the way emotional health intersects with physical well-being.',
    support: [
      'Psychiatric evaluation and diagnosis — understanding what’s driving symptoms, not just naming them',
      'Medication management when appropriate — calibrated to the full health picture',
      'Lifestyle and stress coaching — evidence-based strategies for regulation, recovery, and resilience',
      'Coordinated care — ensuring every provider understands and accounts for emotional health'
    ],
    ctas: defaultCtas
  },
  {
    slug: 'environmental',
    name: 'Environmental',
    headline: 'Your environment shapes your mental health.',
    lead: 'The spaces you live, work, and move through matter more than many healthcare providers acknowledge.',
    what: [
      'Environmental wellness is the relationship between a person and their surroundings — the physical spaces they inhabit and the degree to which those spaces support or undermine health. It encompasses sleep environment, workspace design, natural light, noise levels, safety, access to nature, and what you consume mentally, from media feeds to music.'
    ],
    support: [
      'Sleep environment assessment — reviewing physical conditions affecting sleep quality',
      'Light and circadian health — guidance on light exposure patterns that support mood regulation',
      'Workspace and daily routine design — practical strategies for reducing environmental stressors',
      'Coordination with physical medicine providers — aligning environmental modifications with physical treatment goals'
    ],
    ctas: defaultCtas
  },
  {
    slug: 'financial',
    name: 'Financial',
    headline: 'Financial stress is a real clinical factor.',
    lead: 'Anavah recognizes financial pressure as a contributor to mental health struggles — and works to make care more accessible.',
    what: [
      'Financial wellness is the ability to manage resources in a way that supports security, reduces chronic stress, and allows you to pursue the life you want. It is not about wealth — it is about the relationship between your financial situation and your mental and physical health.',
      'Financial stress can affect sleep, relationships, the ability to seek and maintain treatment, and the cognitive bandwidth available for recovery.'
    ],
    supportIntro:
      'Financial stress is recognized as a legitimate factor in treatment planning. We ask about it, talk about it, and account for it in how care is structured. We offer private pay and insurance options; where we are out-of-network, we can help patients submit superbills for potential reimbursement, subject to plan terms.',
    support: [],
    ctas: [
      { kind: 'insurance', label: 'Insurance & getting started' },
      { kind: 'provider-booking', label: 'Interested in joining as a provider' }
    ]
  },
  {
    slug: 'intellectual',
    name: 'Intellectual',
    headline: 'A mind that’s engaged heals better.',
    lead: 'Intellectual wellness shapes recovery, resilience, and long-term mental health.',
    what: [
      'Intellectual wellness is the ongoing engagement of the mind through learning, curiosity, creativity, and critical thinking. It is connected to emotional resilience, a sense of purpose, professional effectiveness, and cognitive longevity.',
      'When depression, anxiety, trauma, or medication side effects blunt intellectual engagement — concentration, pleasure in learning, or creativity — it may be both a symptom and a driver of declining well-being.'
    ],
    support: [
      'Cognitive impact assessment — understanding how symptoms and medications affect concentration, memory, and mental clarity',
      'Medication calibration — minimizing cognitive side effects while maintaining therapeutic benefit',
      'Coaching on intellectual engagement — protecting and rekindling meaningful intellectual and creative pursuits',
      'Education as part of care — helping patients understand their conditions'
    ],
    ctas: defaultCtas
  },
  {
    slug: 'social',
    name: 'Social',
    headline: 'Connection is medicine. Isolation is a clinical risk factor.',
    lead: 'Social wellness is a documented driver of mental and physical health outcomes — and a dimension Anavah takes seriously.',
    what: [
      'Social wellness is the quality of your relationships, your sense of belonging, and your ability to give and receive meaningful support. It is not about being extroverted or having a large social circle — it is about having connection that is real and sustaining.',
      'Social isolation is associated with increased rates of depression, anxiety, cardiovascular disease, and earlier mortality. Strong social connection can be a protective factor for mental and physical health.'
    ],
    support: [
      'Coordinated care — keeping providers aligned so patients are not left navigating the system alone',
      'Community Hub — an anonymous-friendly space for connection, group wellness classes, and peer support',
      'Lifestyle coaching — exploring social support, barriers to connection, and strategies that fit each person’s life'
    ],
    ctas: [
      { kind: 'collective', label: 'Explore the Collective' },
      { kind: 'provider-booking', label: 'Interested in joining as a provider' }
    ]
  },
  {
    slug: 'physical',
    name: 'Physical',
    headline: 'A healthy mind requires a healthy body. We treat both.',
    lead: 'Physical health is never an afterthought — it’s integrated into every aspect of psychiatric care.',
    what: [
      'Physical wellness is more than fitness or the absence of disease. It encompasses movement, nutrition, sleep, cardiovascular health, pain management, and the body’s overall capacity to function, heal, and adapt. It is inseparable from mental health.',
      'Psychiatric medications affect metabolism, weight, cardiovascular function, and exercise capacity. Chronic pain intensifies depression and anxiety. Sleep disorders fuel mood instability. Physical injuries trigger emotional crises. The body and mind are one system, and they must be treated as one.'
    ],
    supportIntro:
      'Every psychiatric care plan accounts for a patient’s physical health status, including active PT, OT, or physiatry treatment.',
    support: [
      'Exercise readiness and clearance screenings',
      'Lifestyle and movement coaching',
      'Nutritional coaching aligned with treatment goals',
      'Cross-provider coordination with physical medicine providers'
    ],
    ctas: defaultCtas
  },
  {
    slug: 'spiritual',
    name: 'Spiritual',
    headline: 'Purpose is not peripheral to healing. It’s fundamental.',
    lead: 'Spiritual wellness at Anavah is not about religion — it’s about meaning, values, and the sense that your life matters.',
    what: [
      'Spiritual wellness is the sense of meaning, purpose, and alignment between a person’s values and how they live. It is not necessarily religious — though it can be. It is the experience of feeling that what you do matters, that you are connected to something larger than yourself, and that your life is moving in a direction that reflects who you are.'
    ],
    supportIntro:
      'The name Anavah comes from the Hebrew word for humility — accepting strengths, limitations, and circumstances, and taking responsibility for what you do with them. This philosophy shapes our approach.',
    support: [
      'Values clarification — identifying what matters most and how those values are honored in daily life',
      'Purpose-centered coaching — treatment plans that protect and strengthen sources of meaning',
      'Inclusive approach — grounded in clinical research, not a particular religious tradition; people of all backgrounds and belief systems are welcome'
    ],
    ctas: defaultCtas
  },
  {
    slug: 'occupational',
    name: 'Occupational',
    headline: 'Your work and your health affect one another.',
    lead: 'Care should understand the intersection of mental health, physical recovery, and professional life.',
    what: [
      'Occupational wellness is the sense of engagement, purpose, and sustainable balance you find in your work and daily responsibilities. It’s not just about job performance — it’s about whether your work gives you meaning and whether you can show up for it without sacrificing your health.',
      'When mental health or physical injuries collide with a person’s ability to work, consequences can affect income, identity, legal standing, and recovery.'
    ],
    support: [
      'Return-to-work coordination with occupational therapists, physiatrists, and physical therapists',
      'Exercise readiness screenings for movement-based interventions',
      'Psychiatric documentation for personal injury cases, disability evaluations, or return-to-work clearances, subject to clinical evaluation and scheduled sessions',
      'Employer and workplace wellness programming, consulting, and staff training'
    ],
    ctas: [
      { kind: 'patient-booking', label: 'Book a free consultation' },
      { kind: 'provider-booking', label: 'Employer inquiries' }
    ]
  }
];

export const research = [
  {
    href: 'https://internationaljournalofwellbeing.org/index.php/ijow/article/view/2619',
    title: 'Assessing the Structures and Domains of Wellness Models: A Systematic Review (2023)',
    note: 'Reviews 44 wellness models and examines how physical, psychological, social, and other dimensions are incorporated.'
  },
  {
    href: 'https://psychiatryonline.org/doi/10.1176/appi.ps.20230622',
    title: 'Factor Structure, Reliability, and Construct Validity of the Wellness Inventory',
    note: 'Examines reliability and validity of an eight-dimension wellness assessment.'
  },
  {
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11923716/',
    title: 'How Are You Doing… Really? A Review of Whole Person Health Assessments (2025)',
    note: 'Reviews whole-person health assessments across several domains.'
  },
  {
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11515516/',
    title: 'A Scoping Review of Well-Being Measures (2024)',
    note: 'Reviews studies and tools used to define and measure well-being.'
  },
  {
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12489739/',
    title: 'Measuring Whole Person Health: A Scoping Review (2025)',
    note: 'Examines domains and measurement challenges in whole-person health.'
  }
];
