import { useState, useRef } from "react";
import { Upload as UploadIcon, Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("audio/")) {
        setAudioFile(file);
        toast.success("Audio file uploaded successfully!");
      } else {
        toast.error("Please upload an audio file");
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setAudioFile(files[0]);
      toast.success("Audio file selected!");
    }
  };

  const handleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast.info("Recording started...");
      // Simulate recording
      setTimeout(() => {
        setIsRecording(false);
        toast.success("Recording stopped!");
      }, 3000);
    }
  };

  const handleAnalyze = () => {
    if (!audioFile && !isRecording) {
      toast.error("Please upload or record an audio file first");
      return;
    }
    
    toast.loading("Analyzing bird sound...", { duration: 2000 });
    
    setTimeout(() => {
      navigate("/results");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-dark">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold text-center mb-2">Upload or Record Bird Sound</h1>
          <p className="text-muted-foreground text-center mb-12">
            Upload an audio file or record live to detect and classify bird species
          </p>

          <Card
            className={`p-12 border-2 border-dashed transition-all duration-300 ${
              isDragging ? "border-primary bg-primary/5" : "border-border bg-card/50"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="p-6 rounded-full bg-primary/10">
                <UploadIcon className="w-16 h-16 text-primary" />
              </div>
              
              <div className="text-center">
                <p className="text-lg mb-2">Drag and drop your audio file here</p>
                <p className="text-sm text-muted-foreground mb-4">or</p>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="secondary"
                  className="mb-2"
                >
                  Choose File
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                {audioFile && (
                  <p className="text-sm text-primary mt-2 flex items-center justify-center gap-2">
                    <Volume2 className="w-4 h-4" />
                    {audioFile.name}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 w-full max-w-xs">
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground">OR</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <Button
                onClick={handleRecording}
                variant={isRecording ? "destructive" : "default"}
                size="lg"
                className="gap-2"
              >
                <Mic className={`w-5 h-5 ${isRecording ? "animate-pulse" : ""}`} />
                {isRecording ? "Stop Recording" : "Record Audio"}
              </Button>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Button
              onClick={handleAnalyze}
              size="lg"
              className="px-12 shadow-glow hover:shadow-glow"
            >
              Analyze Sound
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;
