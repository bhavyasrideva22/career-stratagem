import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { assessmentQuestions } from '@/data/questions';
import { calculateAssessmentResult } from '@/lib/assessment';
import { Answer, AssessmentProgress } from '@/types/assessment';
import { QuestionCard } from '@/components/QuestionCard';
import { ProgressBar } from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Assessment() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string | number | undefined>();

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === assessmentQuestions.length - 1;
  
  const progress: AssessmentProgress = {
    currentSection: Math.ceil((currentQuestionIndex + 1) / 6), // Assuming ~6 questions per section
    currentQuestion: currentQuestionIndex + 1,
    totalSections: 3,
    totalQuestions: assessmentQuestions.length,
    percentComplete: ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100
  };

  // Load existing answer when question changes
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionId === currentQuestion.id);
    setCurrentAnswer(existingAnswer?.value);
  }, [currentQuestionIndex, answers, currentQuestion.id]);

  const handleAnswer = (value: string | number) => {
    setCurrentAnswer(value);
    
    // Update answers array
    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({
      questionId: currentQuestion.id,
      value,
      category: currentQuestion.category,
      subcategory: currentQuestion.subcategory
    });
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate results and navigate to results page
      const result = calculateAssessmentResult(answers);
      localStorage.setItem('assessmentResult', JSON.stringify(result));
      navigate('/results');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const canProceed = currentAnswer !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-8 px-4">
      <div className="container mx-auto">
        <ProgressBar progress={progress} />
        
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedAnswer={currentAnswer}
        />
        
        <div className="flex justify-between items-center max-w-2xl mx-auto mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <span className="text-sm text-muted-foreground">
            {currentQuestionIndex + 1} / {assessmentQuestions.length}
          </span>
          
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            variant={isLastQuestion ? "success" : "default"}
            className="flex items-center gap-2"
          >
            {isLastQuestion ? 'View Results' : 'Next'}
            {!isLastQuestion && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}