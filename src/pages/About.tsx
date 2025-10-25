import { Users, Target, BookOpen, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    { name: "Nethra R", role: "Developer" },
    { name: "Rakshana S", role: "Developer" },
    { name: "Rhenita S A", role: "Developer" },
    { name: "Varshini M", role: "Developer" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-dark">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold text-center mb-12">About the Project</h1>

          <div className="grid gap-8 mb-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Project Objective</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Develop an AI-powered system to detect and classify bird species through their sound signatures. 
                    This project aims to assist wildlife conservation efforts, ecological research, and bird watching 
                    enthusiasts by providing accurate, real-time bird species identification based on audio input.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Problem Statement</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Existing System:</h3>
                      <p>
                        Traditional bird identification requires expert knowledge and often depends on visual sighting. 
                        Many bird species are difficult to observe directly but have distinctive calls that can be used 
                        for identification.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Proposed System:</h3>
                      <p>
                        Our system leverages machine learning to analyze audio recordings and automatically identify 
                        bird species. It provides instant results with confidence scores and spectrogram visualizations, 
                        making bird identification accessible to everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-6">Team Members</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {team.map((member, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                      >
                        <p className="font-semibold">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Project Guide</h2>
                  <p className="text-lg">Ms. Aarthi T</p>
                  <p className="text-muted-foreground">Assistant Professor, Department of Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground mt-2">KGiSL Institute of Technology</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
