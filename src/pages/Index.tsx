import { ArrowRight, Bird, Waves, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-dark">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-wave" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-wave" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 animate-pulse-glow">
              <Bird className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Bird Sound Detection
              <br />
              and Classification
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Detect and classify bird species through sound using advanced AI technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                onClick={() => navigate("/upload")}
                size="lg"
                className="text-lg px-8 py-6 gap-2 shadow-glow hover:shadow-glow group"
              >
                Start Detection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate("/about")}
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
                <Waves className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Upload Audio</h3>
                <p className="text-sm text-muted-foreground">
                  Upload or record bird sounds for instant analysis
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
                <Sparkles className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">AI Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced AI identifies bird species with high accuracy
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
                <Bird className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Species Info</h3>
                <p className="text-sm text-muted-foreground">
                  Get detailed classification and confidence scores
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
