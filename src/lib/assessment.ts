import { Answer, AssessmentResult } from '@/types/assessment';
import { correctAnswers } from '@/data/questions';

export function calculateAssessmentResult(answers: Answer[]): AssessmentResult {
  // Group answers by category and subcategory
  const psychometric = answers.filter(a => a.category === 'psychometric');
  const technical = answers.filter(a => a.category === 'technical');
  const wiscar = answers.filter(a => a.category === 'wiscar');

  // Calculate Psychological Fit Score (0-100)
  const psychologicalFit = calculatePsychologicalFit(psychometric);
  
  // Calculate Technical Readiness Score (0-100)
  const technicalReadiness = calculateTechnicalReadiness(technical);
  
  // Calculate WISCAR scores
  const wiscarScores = calculateWISCARScores(wiscar);
  
  // Calculate overall confidence (weighted average)
  const overallConfidence = Math.round(
    (psychologicalFit * 0.3 + technicalReadiness * 0.3 + getWISCARAverage(wiscarScores) * 0.4)
  );
  
  // Determine recommendation
  const recommendation = getRecommendation(overallConfidence, psychologicalFit, technicalReadiness);
  
  // Generate career paths and next steps based on scores
  const careerPaths = getCareerPaths(psychologicalFit, technicalReadiness, wiscarScores);
  const nextSteps = getNextSteps(recommendation, overallConfidence);
  
  // Generate insights
  const insights = generateInsights(psychologicalFit, technicalReadiness, wiscarScores, recommendation);

  return {
    psychologicalFit,
    technicalReadiness,
    wiscar: wiscarScores,
    overallConfidence,
    recommendation,
    careerPaths,
    nextSteps,
    insights
  };
}

function calculatePsychologicalFit(answers: Answer[]): number {
  const total = answers.reduce((sum, answer) => sum + Number(answer.value), 0);
  const maxPossible = answers.length * 5; // Assuming 5-point scale
  return Math.round((total / maxPossible) * 100);
}

function calculateTechnicalReadiness(answers: Answer[]): number {
  let correct = 0;
  answers.forEach(answer => {
    if (correctAnswers[answer.questionId] === answer.value) {
      correct++;
    }
  });
  return Math.round((correct / answers.length) * 100);
}

function calculateWISCARScores(answers: Answer[]) {
  const categories = ['will', 'interest', 'skill', 'cognitive', 'ability_to_learn', 'real_world_alignment'];
  const scores: any = {};
  
  categories.forEach(category => {
    const categoryAnswers = answers.filter(a => a.subcategory === category);
    if (categoryAnswers.length > 0) {
      const total = categoryAnswers.reduce((sum, answer) => sum + Number(answer.value), 0);
      const maxPossible = categoryAnswers.length * 5;
      scores[category === 'ability_to_learn' ? 'abilityToLearn' : category === 'real_world_alignment' ? 'realWorldAlignment' : category] = Math.round((total / maxPossible) * 100);
    }
  });
  
  return scores;
}

function getWISCARAverage(wiscarScores: any): number {
  const values = Object.values(wiscarScores) as number[];
  return Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);
}

function getRecommendation(overall: number, psychological: number, technical: number): 'Yes' | 'Maybe' | 'No' {
  if (overall >= 75 && psychological >= 70 && technical >= 60) return 'Yes';
  if (overall >= 55 && (psychological >= 60 || technical >= 50)) return 'Maybe';
  return 'No';
}

function getCareerPaths(psychological: number, technical: number, wiscar: any): string[] {
  const paths = [];
  
  if (psychological >= 80 && technical >= 70) {
    paths.push('WealthTech Strategist', 'FinTech Product Manager');
  }
  if (psychological >= 70 && wiscar.cognitive >= 75) {
    paths.push('Digital Transformation Consultant (Wealth)');
  }
  if (technical >= 80) {
    paths.push('Data Analyst (Wealth Sector)');
  }
  if (psychological >= 75 && wiscar.will >= 80) {
    paths.push('Financial Innovation Officer');
  }
  
  // Default paths if scores are lower
  if (paths.length === 0) {
    paths.push('Digital Marketing in FinTech', 'UX Research for Financial Products');
  }
  
  return paths.slice(0, 3); // Return top 3 paths
}

function getNextSteps(recommendation: 'Yes' | 'Maybe' | 'No', confidence: number): string[] {
  if (recommendation === 'Yes') {
    return [
      'Enroll in WealthTech Foundations course',
      'Explore robo-advisor platforms hands-on',
      'Connect with WealthTech professionals on LinkedIn',
      'Start following industry publications like WealthManagement.com'
    ];
  } else if (recommendation === 'Maybe') {
    return [
      'Build foundational knowledge in personal finance',
      'Take introductory courses in fintech',
      'Practice with financial calculators and tools',
      'Assess learning preferences and style'
    ];
  } else {
    return [
      'Consider related roles in financial services',
      'Explore general business analysis skills',
      'Focus on areas of strength identified in assessment',
      'Retake assessment after skill development'
    ];
  }
}

function generateInsights(psychological: number, technical: number, wiscar: any, recommendation: 'Yes' | 'Maybe' | 'No') {
  const strengths = [];
  const areasForGrowth = [];
  
  // Identify strengths
  if (psychological >= 75) strengths.push('Strong psychological fit for the role');
  if (technical >= 75) strengths.push('Solid technical foundation');
  if (wiscar.will >= 80) strengths.push('High motivation and drive');
  if (wiscar.interest >= 75) strengths.push('Genuine interest in the field');
  if (wiscar.abilityToLearn >= 75) strengths.push('Strong learning capability');
  
  // Identify areas for growth
  if (psychological < 60) areasForGrowth.push('Developing comfort with ambiguity and complex problem-solving');
  if (technical < 60) areasForGrowth.push('Building technical and analytical skills');
  if (wiscar.skill < 60) areasForGrowth.push('Gaining practical experience in finance and technology');
  if (wiscar.cognitive < 60) areasForGrowth.push('Strengthening ability to work across multiple domains');
  
  // Generate personalized message
  let personalizedMessage = '';
  if (recommendation === 'Yes') {
    personalizedMessage = `Excellent! Your assessment results indicate strong alignment with a WealthTech Strategist role. Your combination of ${strengths.join(', ').toLowerCase()} positions you well for success in this field.`;
  } else if (recommendation === 'Maybe') {
    personalizedMessage = `You show promise for a WealthTech career with some development needed. Focus on ${areasForGrowth.slice(0, 2).join(' and ').toLowerCase()} to strengthen your candidacy.`;
  } else {
    personalizedMessage = `While WealthTech Strategist may not be the ideal fit currently, your strengths in other areas could lead to success in related roles. Consider exploring alternative paths that leverage your existing capabilities.`;
  }
  
  return {
    strengths,
    areasForGrowth,
    personalizedMessage
  };
}