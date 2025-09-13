import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, TrendingUp, Calendar, Heart } from "lucide-react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [journalEntry, setJournalEntry] = useState("");

  const moods = [
    { emoji: "😊", label: "Happy", color: "bg-success/20 border-success" },
    { emoji: "😐", label: "Neutral", color: "bg-secondary border-border" },
    { emoji: "😔", label: "Sad", color: "bg-primary-light/20 border-primary" },
    { emoji: "😰", label: "Anxious", color: "bg-destructive/20 border-destructive" },
    { emoji: "😴", label: "Tired", color: "bg-lavender/20 border-lavender" }
  ];

  const recentMoods = [
    { date: "Today", mood: "😊", note: "Had a great therapy session", color: "bg-success" },
    { date: "Yesterday", mood: "😐", note: "Work was stressful but manageable", color: "bg-secondary" },
    { date: "2 days ago", mood: "😔", note: "Feeling lonely", color: "bg-primary" },
    { date: "3 days ago", mood: "😊", note: "Spent time with friends", color: "bg-success" },
    { date: "4 days ago", mood: "😰", note: "Presentation anxiety", color: "bg-destructive" },
    { date: "5 days ago", mood: "😊", note: "Good self-care day", color: "bg-success" },
    { date: "6 days ago", mood: "😐", note: "Average day", color: "bg-secondary" }
  ];

  const handleSaveMood = () => {
    if (selectedMood) {
      // In a real app, this would save to a database
      console.log("Saving mood:", { mood: selectedMood, note: journalEntry, date: new Date() });
      setSelectedMood("");
      setJournalEntry("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Header */}
      <div className="bg-card/90 backdrop-blur-sm border-b border-border/50 p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-xl">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Mood Tracker</h1>
            <p className="text-foreground-muted">Track your emotional journey</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* Today's Mood Check-in */}
        <Card className="card-therapy p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            How are you feeling today?
          </h2>
          
          <div className="grid grid-cols-5 gap-4 mb-6">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`p-4 rounded-2xl border-2 transition-all hover:scale-105 ${
                  selectedMood === mood.label 
                    ? mood.color 
                    : "border-border bg-background hover:bg-secondary"
                }`}
              >
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className="text-sm font-medium">{mood.label}</div>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                What's on your mind? (Optional)
              </label>
              <Textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="Reflect on your day, feelings, or thoughts..."
                className="rounded-xl border-border/50 min-h-24"
              />
            </div>
            
            <Button 
              onClick={handleSaveMood}
              disabled={!selectedMood}
              className="btn-therapy w-full"
            >
              Save Today's Mood
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Mood History */}
          <Card className="card-therapy p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Recent Moods
            </h3>
            
            <div className="space-y-3">
              {recentMoods.map((entry, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30">
                  <div className="text-2xl">{entry.mood}</div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{entry.date}</div>
                    <div className="text-xs text-foreground-muted">{entry.note}</div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${entry.color}`}></div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4 rounded-xl">
              View Full History
            </Button>
          </Card>

          {/* Mood Insights */}
          <Card className="card-therapy p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              This Week's Insights
            </h3>
            
            <div className="space-y-4">
              <div className="bg-success/10 p-4 rounded-xl">
                <div className="text-2xl mb-2">😊</div>
                <div className="font-medium text-sm">Most Common Mood</div>
                <div className="text-xs text-foreground-muted">You felt happy 4 out of 7 days this week</div>
              </div>
              
              <div className="bg-primary-light/10 p-4 rounded-xl">
                <div className="font-medium text-sm mb-1">Mood Pattern</div>
                <div className="text-xs text-foreground-muted">
                  Your mood tends to be better on weekends and after therapy sessions
                </div>
              </div>
              
              <div className="bg-mint-light/10 p-4 rounded-xl">
                <div className="font-medium text-sm mb-1">Recommendation</div>
                <div className="text-xs text-foreground-muted">
                  Consider scheduling more self-care activities during weekdays
                </div>
              </div>
            </div>
            
            <Button className="btn-therapy w-full mt-4">
              View Detailed Report
            </Button>
          </Card>
        </div>

        {/* Weekly Goals */}
        <Card className="card-therapy p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">This Week's Wellness Goals</h3>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-xl bg-primary-light/10">
              <div className="text-2xl mb-2">🧘</div>
              <div className="font-medium text-sm">Daily Meditation</div>
              <div className="text-xs text-foreground-muted">5/7 days completed</div>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-success/10">
              <div className="text-2xl mb-2">💧</div>
              <div className="font-medium text-sm">Stay Hydrated</div>
              <div className="text-xs text-foreground-muted">Goal achieved!</div>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-lavender/10">
              <div className="text-2xl mb-2">😴</div>
              <div className="font-medium text-sm">Better Sleep</div>
              <div className="text-xs text-foreground-muted">Average: 7.2 hours</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MoodTracker;