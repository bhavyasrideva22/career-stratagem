export interface Question {
  id: string;
  type: 'likert' | 'mcq' | 'scenario' | 'preference';
  category: 'psychometric' | 'technical' | 'wiscar';
  subcategory: string;
  question: string;
  options?: string[];
  scale?: { min: number; max: number; labels: { [key: number]: string } };
}

export interface Answer {
  questionId: string;
  value: number | string;
  category: string;
  subcategory: string;
}

export interface AssessmentResult {
  psychologicalFit: number;
  technicalReadiness: number;
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    abilityToLearn: number;
    realWorldAlignment: number;
  };
  overallConfidence: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
  careerPaths: string[];
  nextSteps: string[];
  insights: {
    strengths: string[];
    areasForGrowth: string[];
    personalizedMessage: string;
  };
}

export interface AssessmentProgress {
  currentSection: number;
  currentQuestion: number;
  totalSections: number;
  totalQuestions: number;
  percentComplete: number;
}