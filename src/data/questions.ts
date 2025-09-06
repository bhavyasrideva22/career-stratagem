import { Question } from '@/types/assessment';

export const assessmentQuestions: Question[] = [
  // Psychometric - Interest Scale
  {
    id: 'psych_1',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest',
    question: 'How much do you enjoy solving problems that require both numbers and creativity?',
    scale: { min: 1, max: 5, labels: { 1: 'Not at all', 3: 'Moderately', 5: 'Extremely' } }
  },
  {
    id: 'psych_2',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest',
    question: 'How interested are you in understanding how technology can transform financial services?',
    scale: { min: 1, max: 5, labels: { 1: 'Not interested', 3: 'Somewhat interested', 5: 'Very interested' } }
  },
  {
    id: 'psych_3',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'personality',
    question: 'In uncertain situations, do you feel energized or anxious?',
    scale: { min: 1, max: 5, labels: { 1: 'Very anxious', 3: 'Neutral', 5: 'Very energized' } }
  },
  {
    id: 'psych_4',
    type: 'preference',
    category: 'psychometric',
    subcategory: 'cognitive_style',
    question: 'Would you describe yourself as more:',
    options: ['Structured and methodical', 'Adaptable and flexible', 'A balance of both']
  },
  {
    id: 'psych_5',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'motivation',
    question: 'How persistent are you when facing challenging problems?',
    scale: { min: 1, max: 5, labels: { 1: 'Give up easily', 3: 'Moderately persistent', 5: 'Extremely persistent' } }
  },

  // Technical & Aptitude
  {
    id: 'tech_1',
    type: 'mcq',
    category: 'technical',
    subcategory: 'domain_knowledge',
    question: 'Which of the following is a robo-advisory platform?',
    options: ['Betterment', 'QuickBooks', 'Slack', 'Photoshop']
  },
  {
    id: 'tech_2',
    type: 'mcq',
    category: 'technical',
    subcategory: 'numerical',
    question: 'If investment A yields 4% per annum compounded monthly, what is the approximate effective annual return?',
    options: ['4.00%', '4.07%', '4.12%', '4.25%']
  },
  {
    id: 'tech_3',
    type: 'mcq',
    category: 'technical',
    subcategory: 'logical',
    question: 'Complete the sequence: 5, 10, 20, __, __',
    options: ['40, 80', '30, 40', '25, 30', '35, 70']
  },
  {
    id: 'tech_4',
    type: 'mcq',
    category: 'technical',
    subcategory: 'domain_knowledge',
    question: 'What does "AUM" typically stand for in wealth management?',
    options: ['Assets Under Management', 'Annual User Metrics', 'Automated User Matching', 'Advanced User Modeling']
  },
  {
    id: 'tech_5',
    type: 'scenario',
    category: 'technical',
    subcategory: 'application',
    question: 'A wealth management firm wants to implement AI-driven portfolio rebalancing. What would be your first step?',
    options: [
      'Understand current portfolio management processes and pain points',
      'Research the latest AI algorithms for portfolio optimization',
      'Hire a team of data scientists immediately',
      'Purchase the most expensive AI software available'
    ]
  },

  // WISCAR Framework
  {
    id: 'wiscar_1',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'will',
    question: 'How motivated are you to learn new technologies and financial concepts regularly?',
    scale: { min: 1, max: 5, labels: { 1: 'Not motivated', 3: 'Moderately motivated', 5: 'Highly motivated' } }
  },
  {
    id: 'wiscar_2',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'interest',
    question: 'How often do you explore new financial technologies or fintech apps on your own?',
    scale: { min: 1, max: 5, labels: { 1: 'Never', 3: 'Sometimes', 5: 'Very frequently' } }
  },
  {
    id: 'wiscar_3',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'skill',
    question: 'Rate your current confidence in analyzing financial data and making tech-related recommendations.',
    scale: { min: 1, max: 5, labels: { 1: 'No confidence', 3: 'Moderate confidence', 5: 'High confidence' } }
  },
  {
    id: 'wiscar_4',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'cognitive',
    question: 'How comfortable are you with learning complex concepts that bridge multiple domains (finance + technology)?',
    scale: { min: 1, max: 5, labels: { 1: 'Very uncomfortable', 3: 'Neutral', 5: 'Very comfortable' } }
  },
  {
    id: 'wiscar_5',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'ability_to_learn',
    question: 'How confident are you in learning independently from online resources and courses?',
    scale: { min: 1, max: 5, labels: { 1: 'Not confident', 3: 'Moderately confident', 5: 'Very confident' } }
  },
  {
    id: 'wiscar_6',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'real_world_alignment',
    question: 'Would you enjoy analyzing financial data to make technology-related strategic decisions?',
    scale: { min: 1, max: 5, labels: { 1: 'Would not enjoy', 3: 'Neutral', 5: 'Would love it' } }
  }
];

// Correct answers for technical questions
export const correctAnswers: { [key: string]: string | number } = {
  'tech_1': 'Betterment',
  'tech_2': '4.07%',
  'tech_3': '40, 80',
  'tech_4': 'Assets Under Management',
  'tech_5': 'Understand current portfolio management processes and pain points'
};