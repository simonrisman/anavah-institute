import { base } from '$app/paths';

export const practice = {
  name: 'Anavah Institute',
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
  { href: `${base}/patients`, label: 'For Patients' },
  { href: `${base}/providers`, label: 'For Providers' },
  { href: `${base}/about`, label: 'About' },
  { href: `${base}/contact`, label: 'Contact' }
];

export const patientSteps = [
  {
    title: 'Free consultation',
    text: 'A short call to talk through what you need and see if Anavah is a fit.'
  },
  {
    title: 'Psychiatric intake',
    text: 'A full evaluation of your mental health, history, and medications.'
  },
  {
    title: 'Labs and assessments',
    text: 'Blood work review, nutrition, and functional fitness assessments.'
  },
  {
    title: 'Your plan and follow-up',
    text: 'One coordinated plan, with regular follow-up and referrals when needed.'
  }
];

export const patientServices = [
  {
    title: 'Psychiatric intake and follow-up',
    text: 'A full evaluation, then regular visits to track how you are doing.'
  },
  {
    title: 'Medication management',
    text: 'Prescribing and monitoring, coordinated with the rest of your care.'
  },
  {
    title: 'Blood work analysis',
    text: 'Your lab results reviewed alongside your mental health care.'
  },
  {
    title: 'Nutrition optimization',
    text: 'Practical nutrition guidance tied to your goals.'
  },
  {
    title: 'Functional fitness assessments',
    text: 'Movement screening and exercise readiness, so your plan fits your body.'
  },
  {
    title: 'Bibliotherapy',
    text: 'Guided reading chosen to support your care.'
  },
  {
    title: 'Peptide therapy',
    text: 'Discussed with a licensed prescriber when it may belong in a plan. Information on this site is educational only and is not a treatment recommendation.'
  },
  {
    title: 'Care coordination',
    text: 'Referrals and communication with your other providers, so you are not the messenger between them.'
  }
];

export const providerServices = [
  {
    title: 'Consultation calls',
    text: 'Talk through a patient, a case, or a program with a psychiatric nurse practitioner.'
  },
  {
    title: 'Care coordination',
    text: 'Exercise readiness screening, medication management, psychiatric consultations, and referrals.'
  },
  {
    title: 'Reports',
    text: 'Written reports based on our assessments.'
  },
  {
    title: 'Lunch-and-learns',
    text: 'Educational sessions for your team on connecting mental and physical care.'
  },
  {
    title: 'Networking',
    text: 'Connect with Anavah and other providers working across disciplines.'
  },
  {
    title: 'Peptide education',
    text: 'Educational discussion for clinics that want peptides considered alongside the rest of a patient’s care. Treatment decisions stay with a licensed prescriber.'
  }
];

export const audiences = ['Clinics', 'Attorneys', 'Employers', 'Organizations'];

export const wellness = [
  {
    name: 'Emotional',
    text: 'Understanding, expressing, and managing emotion, and building resilience.'
  },
  {
    name: 'Environmental',
    text: 'Safe, supportive surroundings at home, at work, and in the community.'
  },
  {
    name: 'Financial',
    text: 'A steadier relationship with money, now and for what comes next.'
  },
  {
    name: 'Intellectual',
    text: 'Learning, creativity, and room to keep thinking.'
  },
  {
    name: 'Social',
    text: 'Belonging, supportive relationships, and community.'
  },
  {
    name: 'Physical',
    text: 'Movement, nutrition, sleep, and preventive care.'
  },
  {
    name: 'Spiritual',
    text: 'Values, purpose, and a sense of connection.'
  },
  {
    name: 'Occupational',
    text: 'Meaning in work, and a balance with the rest of life.'
  }
];
