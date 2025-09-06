import { Question } from '@/types/assessment';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: string | number) => void;
  selectedAnswer?: string | number;
}

export function QuestionCard({ question, onAnswer, selectedAnswer }: QuestionCardProps) {
  const renderQuestionContent = () => {
    switch (question.type) {
      case 'likert':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">{question.scale?.labels[question.scale.min]}</span>
              <span className="text-sm text-muted-foreground">{question.scale?.labels[question.scale.max]}</span>
            </div>
            <div className="flex gap-2 justify-center">
              {Array.from({ length: question.scale?.max || 5 }, (_, i) => {
                const value = i + 1;
                return (
                  <Button
                    key={value}
                    variant={selectedAnswer === value ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      "w-12 h-12 rounded-full transition-all duration-200",
                      selectedAnswer === value && "shadow-glow"
                    )}
                    onClick={() => onAnswer(value)}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
            {question.scale?.labels[3] && (
              <div className="text-center">
                <span className="text-sm text-muted-foreground">{question.scale.labels[3]}</span>
              </div>
            )}
          </div>
        );

      case 'mcq':
      case 'preference':
      case 'scenario':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <Button
                key={option}
                variant={selectedAnswer === option ? "default" : "outline"}
                className={cn(
                  "w-full text-left justify-start p-4 h-auto whitespace-normal",
                  selectedAnswer === option && "shadow-elegant"
                )}
                onClick={() => onAnswer(option)}
              >
                <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const getCategoryLabel = () => {
    switch (question.category) {
      case 'psychometric':
        return 'Psychological Assessment';
      case 'technical':
        return 'Technical & Aptitude';
      case 'wiscar':
        return 'WISCAR Framework';
      default:
        return 'Assessment';
    }
  };

  const getCategoryColor = () => {
    switch (question.category) {
      case 'psychometric':
        return 'bg-primary/10 text-primary';
      case 'technical':
        return 'bg-accent/10 text-accent-foreground';
      case 'wiscar':
        return 'bg-success/10 text-success';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-elegant animate-fade-in">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <span className={cn("px-3 py-1 rounded-full text-sm font-medium", getCategoryColor())}>
            {getCategoryLabel()}
          </span>
        </div>
        <CardTitle className="text-xl font-semibold leading-tight">
          {question.question}
        </CardTitle>
        {question.type === 'likert' && (
          <CardDescription>
            Rate your response on a scale from {question.scale?.min} to {question.scale?.max}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {renderQuestionContent()}
      </CardContent>
    </Card>
  );
}