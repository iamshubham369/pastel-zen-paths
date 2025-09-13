import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, BookOpen, Heart, Users, PenTool, Lightbulb } from "lucide-react";
import dashboardIllustration from "@/assets/dashboard-illustration.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Dashboard = () => {
  const quickActions = [
    {
      title: "Start Chat",
      description: "Talk to our AI therapist",
      icon: MessageCircle,
      color: "bg-primary-light",
      link: "/chat"
    },
    {
      title: "Book Session", 
      description: "Schedule with a therapist",
      icon: Calendar,
      color: "bg-lavender-light",
      link: "/therapists"
    },
    {
      title: "Daily Journal",
      description: "Reflect on your thoughts",
      icon: PenTool,
      color: "bg-mint-light",
      link: "/mood"
    },
    {
      title: "Resources",
      description: "Explore wellness content",
      icon: BookOpen,
      color: "bg-peach",
      link: "/resources"
    }
  ];

  const recentActivities = [
    { activity: "Completed mood check-in", time: "2 hours ago", icon: Heart },
    { activity: "Chatted with AI therapist", time: "Yesterday", icon: MessageCircle },
    { activity: "Read mindfulness article", time: "2 days ago", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Navigation */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`
        }}
      >
        {/* Navigation Bar */}
        <nav className="w-full px-6 py-4 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-orange-600" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/dashboard" className="text-white hover:text-orange-200 transition-colors font-medium">
              Home
            </Link>
            <button className="text-white hover:text-orange-200 transition-colors font-medium">
              About Us
            </button>
            <button className="text-white hover:text-orange-200 transition-colors font-medium">
              Pricing
            </button>
            <Link to="/mood">
              <Button 
                variant="outline" 
                className="border-2 border-red-300 text-white hover:bg-red-300 hover:text-red-800 bg-transparent rounded-xl px-6"
              >
                Take a Free Assessment
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Unlock a better you with
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              expert tailored therapy for every mind
            </h2>
          </div>
        </div>
      </div>

      {/* Dashboard Content Section */}
      <div className="bg-gradient-calm p-4">
        <div className="max-w-6xl mx-auto py-12">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Hi Shubham, how are you feeling today?
              </h3>
              <p className="text-foreground-muted">
                Welcome back to your mental wellness journey
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src={dashboardIllustration} 
                alt="Wellness illustration" 
                className="w-32 h-32 rounded-2xl object-cover float-animation"
              />
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickActions.map((action, index) => (
              <Link key={action.title} to={action.link}>
                <Card className="card-therapy p-6 text-center hover:scale-105 transition-transform">
                  <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <action.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                  <p className="text-foreground-muted text-sm">{action.description}</p>
                </Card>
              </Link>
            ))}
          </div>

          {/* Dashboard Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Quick Mood Check */}
            <Card className="card-therapy p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Quick Mood Check
              </h3>
              <p className="text-foreground-muted mb-4">How are you feeling right now?</p>
              <div className="flex gap-2 mb-4">
                {['😊', '😐', '😔', '😰', '😴'].map((emoji, i) => (
                  <button 
                    key={i}
                    className="w-12 h-12 rounded-xl bg-secondary hover:bg-accent transition-colors text-2xl hover:scale-110"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <Link to="/mood">
                <Button variant="outline" className="w-full rounded-xl">
                  View Mood History
                </Button>
              </Link>
            </Card>

            {/* Recent Activity */}
            <Card className="card-therapy p-6">
              <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivities.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.activity}</p>
                      <p className="text-xs text-foreground-muted">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Therapist Connection */}
            <Card className="card-therapy p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-lavender" />
                Your Therapist
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-lavender-light rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="font-medium">Dr. Sarah Johnson</p>
                  <p className="text-sm text-foreground-muted">Available today</p>
                </div>
              </div>
              <Link to="/therapists">
                <Button className="btn-therapy w-full">Book Session</Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;