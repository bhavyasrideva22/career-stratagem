import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AssessmentResult } from '@/types/assessment';
import { ResultsCard } from '@/components/ResultsCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Results() {
  const navigate = useNavigate();
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    const storedResult = localStorage.getItem('assessmentResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // No results found, redirect to home
      navigate('/');
    }
  }, [navigate]);

  const handleRetakeAssessment = () => {
    localStorage.removeItem('assessmentResult');
    navigate('/assessment');
  };

  const handleBackHome = () => {
    navigate('/');
  };

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={handleBackHome}
            className="mb-4 mx-auto flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
            Your WealthTech Assessment Results
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive analysis of your fit for a WealthTech Strategist role
          </p>
        </div>

        <ResultsCard 
          result={result}
          onRetakeAssessment={handleRetakeAssessment}
        />
      </div>
    </div>
  );
}