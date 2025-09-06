import { AssessmentProgress } from '@/types/assessment';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  progress: AssessmentProgress;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">
          Question {progress.currentQuestion} of {progress.totalQuestions}
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round(progress.percentComplete)}% Complete
        </span>
      </div>
      <Progress 
        value={progress.percentComplete} 
        className="h-2 bg-muted"
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-muted-foreground">
          Section {progress.currentSection} of {progress.totalSections}
        </span>
        <span className="text-xs text-muted-foreground">
          Keep going! 💪
        </span>
      </div>
    </div>
  );
}