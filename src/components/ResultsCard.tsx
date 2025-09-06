import { AssessmentResult } from '@/types/assessment';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertTriangle, XCircle, TrendingUp, Brain, Code, Target } from 'lucide-react';

interface ResultsCardProps {
  result: AssessmentResult;
  onRetakeAssessment: () => void;
}

export function ResultsCard({ result, onRetakeAssessment }: ResultsCardProps) {
  const getRecommendationIcon = () => {
    switch (result.recommendation) {
      case 'Yes':
        return <CheckCircle className="w-8 h-8 text-success" />;
      case 'Maybe':
        return <AlertTriangle className="w-8 h-8 text-warning" />;
      case 'No':
        return <XCircle className="w-8 h-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (result.recommendation) {
      case 'Yes':
        return 'bg-success text-success-foreground';
      case 'Maybe':
        return 'bg-warning text-warning-foreground';
      case 'No':
        return 'bg-destructive text-destructive-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Main Recommendation */}
      <Card className="text-center shadow-elegant">
        <CardHeader>
          <div className="flex justify-center mb-4">
            {getRecommendationIcon()}
          </div>
          <CardTitle className="text-3xl font-bold">
            {result.recommendation === 'Yes' && 'Excellent Fit!'}
            {result.recommendation === 'Maybe' && 'Potential Match'}
            {result.recommendation === 'No' && 'Consider Alternatives'}
          </CardTitle>
          <CardDescription className="text-lg">
            Overall Confidence Score: <span className={getScoreColor(result.overallConfidence)}>{result.overallConfidence}/100</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className={`inline-flex items-center px-6 py-3 rounded-full font-semibold ${getRecommendationColor()}`}>
            Recommendation: {result.recommendation}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Scores */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Psychological Fit */}
        <Card className="shadow-elegant">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Psychological Fit</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2 text-primary">
              {result.psychologicalFit}/100
            </div>
            <Progress value={result.psychologicalFit} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Measures personality and cognitive alignment
            </p>
          </CardContent>
        </Card>

        {/* Technical Readiness */}
        <Card className="shadow-elegant">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              <CardTitle className="text-lg">Technical Readiness</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2 text-accent-foreground">
              {result.technicalReadiness}/100
            </div>
            <Progress value={result.technicalReadiness} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Assesses foundational knowledge and aptitude
            </p>
          </CardContent>
        </Card>

        {/* WISCAR Average */}
        <Card className="shadow-elegant">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-success" />
              <CardTitle className="text-lg">WISCAR Profile</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2 text-success">
              {Math.round(Object.values(result.wiscar).reduce((sum, val) => sum + val, 0) / 6)}/100
            </div>
            <Progress 
              value={Math.round(Object.values(result.wiscar).reduce((sum, val) => sum + val, 0) / 6)} 
              className="mb-2" 
            />
            <p className="text-sm text-muted-foreground">
              Comprehensive readiness framework
            </p>
          </CardContent>
        </Card>
      </div>

      {/* WISCAR Breakdown */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            WISCAR Framework Breakdown
          </CardTitle>
          <CardDescription>
            Detailed analysis across six key dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(result.wiscar).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className={getScoreColor(value)}>{value}/100</span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career Paths */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle>Recommended Career Paths</CardTitle>
          <CardDescription>
            Based on your assessment results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {result.careerPaths.map((path, index) => (
              <Badge 
                key={path} 
                variant={index === 0 ? "default" : "secondary"}
                className="text-sm py-1 px-3"
              >
                {path}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle>Personalized Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {result.insights.personalizedMessage}
          </p>
          
          {result.insights.strengths.length > 0 && (
            <div>
              <h4 className="font-semibold text-success mb-2">Your Strengths:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {result.insights.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
          )}
          
          {result.insights.areasForGrowth.length > 0 && (
            <div>
              <h4 className="font-semibold text-warning mb-2">Areas for Growth:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {result.insights.areasForGrowth.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>
            Your personalized action plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {result.nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button onClick={onRetakeAssessment} variant="outline">
          Retake Assessment
        </Button>
        <Button variant="hero">
          Explore Learning Paths
        </Button>
      </div>
    </div>
  );
}