import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Clock, MapPin, Video, Calendar } from "lucide-react";
import therapistAvatar from "@/assets/therapist-avatar.jpg";

const TherapistDirectory = () => {
  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Anxiety & Depression",
      rating: 4.9,
      experience: "8 years",
      location: "Online",
      availability: "Available Today",
      image: therapistAvatar,
      bio: "Specializing in cognitive behavioral therapy and mindfulness-based approaches.",
      sessionTypes: ["Video Call", "Voice Call", "Chat"],
      price: "$120/session"
    },
    {
      id: 2,
      name: "Dr. Michael Chen", 
      specialization: "Trauma & PTSD",
      rating: 4.8,
      experience: "12 years",
      location: "Online",
      availability: "Available Tomorrow", 
      image: therapistAvatar,
      bio: "Expert in trauma-informed therapy and EMDR techniques.",
      sessionTypes: ["Video Call", "In-Person"],
      price: "$150/session"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Relationship Counseling", 
      rating: 4.9,
      experience: "6 years",
      location: "Online & NYC",
      availability: "Available Today",
      image: therapistAvatar,
      bio: "Helping couples and individuals build healthier relationships.",
      sessionTypes: ["Video Call", "Voice Call", "In-Person"],
      price: "$110/session"
    },
    {
      id: 4,
      name: "Dr. David Park",
      specialization: "Stress & Burnout",
      rating: 4.7,
      experience: "10 years", 
      location: "Online",
      availability: "Available This Week",
      image: therapistAvatar,
      bio: "Specialized in helping professionals manage workplace stress and burnout.",
      sessionTypes: ["Video Call", "Chat"],
      price: "$130/session"
    }
  ];

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
            <h1 className="text-2xl font-bold">Find Your Therapist</h1>
            <p className="text-foreground-muted">Connect with licensed mental health professionals</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Filter Section */}
        <Card className="card-therapy p-6 mb-6">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="rounded-full px-4 py-2 cursor-pointer hover:bg-primary-light">
              All Specializations
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-2 cursor-pointer hover:bg-primary-light">
              Anxiety
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-2 cursor-pointer hover:bg-primary-light">
              Depression
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-2 cursor-pointer hover:bg-primary-light">
              Trauma
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-2 cursor-pointer hover:bg-primary-light">
              Relationships
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-2 cursor-pointer hover:bg-primary-light">
              Available Today
            </Badge>
          </div>
        </Card>

        {/* Therapist Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {therapists.map((therapist) => (
            <Card key={therapist.id} className="card-therapy p-6">
              <div className="flex gap-4 mb-4">
                <img 
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{therapist.name}</h3>
                  <p className="text-primary font-medium">{therapist.specialization}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{therapist.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-foreground-muted">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{therapist.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-foreground-muted text-sm mb-4">{therapist.bio}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-foreground-muted" />
                  <span className="text-sm">{therapist.location}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-success" />
                  <span className="text-sm text-success font-medium">{therapist.availability}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {therapist.sessionTypes.map((type) => (
                    <Badge key={type} variant="outline" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-primary">{therapist.price}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-xl">
                    View Profile
                  </Button>
                  <Button className="btn-therapy text-sm px-4">
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="card-therapy p-6 mt-8 text-center">
          <h3 className="font-semibold text-lg mb-2">Don't see the right fit?</h3>
          <p className="text-foreground-muted mb-4">
            We have over 200+ licensed therapists. Let us help you find the perfect match.
          </p>
          <Button className="btn-therapy">Get Personalized Matches</Button>
        </Card>
      </div>
    </div>
  );
};

export default TherapistDirectory;