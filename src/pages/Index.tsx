import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Brain, Target, CheckCircle, Clock, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
            Career Assessment Tool
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 leading-tight">
            Should You Become a<br />WealthTech Strategist?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover your potential in the exciting world of WealthTech through our comprehensive 
            assessment that combines psychology, aptitude testing, and career fit analysis.
          </p>
          <Button 
            size="lg" 
            variant="hero"
            onClick={handleStartAssessment}
            className="text-lg px-8 py-4"
          >
            Start Assessment
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes 15-20 minutes • Free assessment • Instant results
          </p>
        </div>
      </section>

      {/* What is WealthTech Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What is WealthTech?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            WealthTech is the intersection of technology and wealth management—think robo-advisors, 
            portfolio optimization, blockchain in asset management, and AI-driven personal finance. 
            A WealthTech Strategist operates at the crossroads of finance, technology, and customer experience.
          </p>
        </div>
      </section>

      {/* Assessment Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Assessment Framework</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-elegant bg-gradient-card">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Psychological Assessment</CardTitle>
                <CardDescription>
                  Evaluates personality traits, cognitive style, and motivational alignment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Interest scale analysis</li>
                  <li>• Personality fit evaluation</li>
                  <li>• Cognitive style mapping</li>
                  <li>• Motivation assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant bg-gradient-card">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Technical & Aptitude</CardTitle>
                <CardDescription>
                  Tests foundational knowledge and analytical capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Logical reasoning tests</li>
                  <li>• Numerical ability assessment</li>
                  <li>• Domain knowledge quiz</li>
                  <li>• Industry awareness check</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant bg-gradient-card">
              <CardHeader>
                <Target className="w-12 h-12 text-success mb-4" />
                <CardTitle>WISCAR Framework</CardTitle>
                <CardDescription>
                  Comprehensive readiness evaluation across six key dimensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Will & motivation</li>
                  <li>• Interest alignment</li>
                  <li>• Skill assessment</li>
                  <li>• Cognitive readiness</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Succeeds Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Who Succeeds as a WealthTech Strategist?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Strategic Thinkers</h3>
                  <p className="text-muted-foreground">
                    Individuals who can bridge finance and technology with systems thinking
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Analytical Minds</h3>
                  <p className="text-muted-foreground">
                    Strong analytical abilities with comfort in data-driven decision making
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Curious Learners</h3>
                  <p className="text-muted-foreground">
                    Passionate about how digital tools can transform investing and finance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Adaptable Professionals</h3>
                  <p className="text-muted-foreground">
                    Comfortable with ambiguity and emerging technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Clock className="w-12 h-12 text-primary mx-auto" />
              <div className="text-3xl font-bold text-primary">15-20</div>
              <div className="text-muted-foreground">Minutes to complete</div>
            </div>
            <div className="space-y-2">
              <Target className="w-12 h-12 text-success mx-auto" />
              <div className="text-3xl font-bold text-success">16</div>
              <div className="text-muted-foreground">Comprehensive questions</div>
            </div>
            <div className="space-y-2">
              <Users className="w-12 h-12 text-accent mx-auto" />
              <div className="text-3xl font-bold text-accent-foreground">5+</div>
              <div className="text-muted-foreground">Career paths explored</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Path?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take our comprehensive assessment and get personalized insights into your 
            potential as a WealthTech Strategist.
          </p>
          <Button 
            size="lg" 
            variant="hero"
            onClick={handleStartAssessment}
            className="text-lg px-8 py-4"
          >
            Begin Your Assessment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
