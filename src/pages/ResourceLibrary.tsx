import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Book, Play, Download, Clock, Heart } from "lucide-react";
import mindfulnessIcon from "@/assets/mindfulness-icon.jpg";

const ResourceLibrary = () => {
  const categories = [
    {
      id: 1,
      title: "Mindfulness",
      description: "Meditation guides and mindful practices",
      icon: mindfulnessIcon,
      color: "bg-primary-light",
      count: 24
    },
    {
      id: 2,
      title: "Stress Relief",
      description: "Techniques to manage daily stress",
      icon: mindfulnessIcon,
      color: "bg-mint-light", 
      count: 18
    },
    {
      id: 3,
      title: "Sleep & Rest",
      description: "Improve your sleep quality",
      icon: mindfulnessIcon,
      color: "bg-lavender-light",
      count: 15
    },
    {
      id: 4,
      title: "Self-Care Tips",
      description: "Daily practices for mental wellness",
      icon: mindfulnessIcon,
      color: "bg-peach",
      count: 32
    }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "5-Minute Daily Meditation",
      type: "Audio Guide",
      duration: "5 min",
      category: "Mindfulness",
      description: "A gentle introduction to daily meditation practice",
      image: mindfulnessIcon,
      popular: true
    },
    {
      id: 2,
      title: "Breathing Exercises for Anxiety",
      type: "Video",
      duration: "8 min", 
      category: "Stress Relief",
      description: "Simple breathing techniques to manage anxiety",
      image: mindfulnessIcon,
      popular: true
    },
    {
      id: 3,
      title: "Progressive Muscle Relaxation",
      type: "Audio Guide",
      duration: "15 min",
      category: "Sleep & Rest", 
      description: "Full body relaxation technique for better sleep",
      image: mindfulnessIcon,
      popular: false
    },
    {
      id: 4,
      title: "Building Healthy Habits",
      type: "Article",
      duration: "6 min read",
      category: "Self-Care Tips",
      description: "Science-backed strategies for lasting habit formation",
      image: mindfulnessIcon,
      popular: true
    },
    {
      id: 5,
      title: "Mindful Walking Practice",
      type: "Guide",
      duration: "10 min",
      category: "Mindfulness",
      description: "Transform your daily walk into a meditation",
      image: mindfulnessIcon,
      popular: false
    },
    {
      id: 6,
      title: "Gratitude Journal Template",
      type: "Download",
      duration: "PDF",
      category: "Self-Care Tips", 
      description: "A structured approach to daily gratitude practice",
      image: mindfulnessIcon,
      popular: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Audio Guide':
        return <Play className="w-4 h-4" />;
      case 'Video':
        return <Play className="w-4 h-4" />;
      case 'Download':
        return <Download className="w-4 h-4" />;
      default:
        return <Book className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Header */}
      <div className="bg-card/90 backdrop-blur-sm border-b border-border/50 p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-xl">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Resource Library</h1>
            <p className="text-foreground-muted">Guided content for your mental wellness journey</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Categories Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Explore by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="card-therapy p-6 text-center cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <img 
                    src={category.icon}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-foreground-muted text-sm mb-3">{category.description}</p>
                <Badge variant="secondary" className="rounded-full">
                  {category.count} resources
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Featured Resources</h2>
            <div className="flex gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary-light">All</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary-light">Popular</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary-light">New</Badge>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="card-therapy overflow-hidden cursor-pointer">
                <div className="relative">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  {resource.popular && (
                    <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                      {resource.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getTypeIcon(resource.type)}
                    <span className="text-sm text-foreground-muted">{resource.type}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <Clock className="w-4 h-4 text-foreground-muted" />
                      <span className="text-sm text-foreground-muted">{resource.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-foreground-muted text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex gap-2">
                    <Button className="btn-therapy flex-1 text-sm">
                      Start Now
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-xl">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Recommendations */}
        <Card className="card-therapy p-6">
          <h2 className="text-xl font-semibold mb-4">Today's Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-primary-light/20 p-4 rounded-xl">
              <h4 className="font-medium mb-2">Morning Practice</h4>
              <p className="text-sm text-foreground-muted">Start with 5-minute gratitude meditation</p>
            </div>
            <div className="bg-mint-light/20 p-4 rounded-xl">
              <h4 className="font-medium mb-2">Midday Reset</h4>
              <p className="text-sm text-foreground-muted">Try breathing exercises during lunch break</p>
            </div>
            <div className="bg-lavender-light/20 p-4 rounded-xl">
              <h4 className="font-medium mb-2">Evening Wind-down</h4>
              <p className="text-sm text-foreground-muted">Progressive muscle relaxation for better sleep</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResourceLibrary;