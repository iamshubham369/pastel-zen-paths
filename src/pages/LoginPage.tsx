import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import heroIllustration from "@/assets/hero-illustration.jpg";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard after "login"
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Illustration Section */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8">
          <img 
            src={heroIllustration} 
            alt="Mental wellness illustration" 
            className="w-full max-w-lg rounded-3xl float-animation"
          />
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Welcome to MindSpace
            </h1>
            <p className="text-lg text-foreground-muted max-w-md">
              Your safe space for mental wellness. Connect with therapists, track your mood, and access resources.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <Card className="card-therapy w-full max-w-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                {isLogin ? "Welcome Back" : "Get Started"}
              </h2>
              <p className="text-foreground-muted">
                {isLogin 
                  ? "Continue your mental wellness journey" 
                  : "Begin your path to better mental health"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="rounded-xl border-border/50"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-xl border-border/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  className="rounded-xl border-border/50"
                />
              </div>

              <Button 
                type="submit" 
                className="btn-therapy w-full py-3 text-base font-medium"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <Separator className="my-6" />

            <div className="text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary-light transition-colors font-medium"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>

            {isLogin && (
              <div className="text-center mt-4">
                <Link 
                  to="#" 
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;