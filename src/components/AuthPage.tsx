import { useState } from "react";
import { Mic } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  const handleVoiceAuth = () => {
    setIsListening(true);
    toast({
      title: isLogin ? "Listening for voice login..." : "Listening for voice signup...",
      description: "Please speak clearly into your microphone.",
    });

    // Simulate voice recognition (replace with actual implementation)
    setTimeout(() => {
      setIsListening(false);
      toast({
        title: "Voice recognition not implemented",
        description: "This is a UI demo. Voice recognition to be implemented.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-md p-8 rounded-2xl space-y-8 transition-transform duration-300 hover:scale-105">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">Height Detection App</h1>
          <p className="text-primary/80">Authenticate with your voice</p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`button-3d px-6 py-2 rounded-lg ${
              isLogin
                ? "bg-primary text-white"
                : "bg-transparent text-primary hover:bg-primary/10"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`button-3d px-6 py-2 rounded-lg ${
              !isLogin
                ? "bg-primary text-white"
                : "bg-transparent text-primary hover:bg-primary/10"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleVoiceAuth}
            disabled={isListening}
            className="microphone-button w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-50"
          >
            <Mic
              size={32}
              className={`${isListening ? "animate-pulse" : ""}`}
            />
          </button>
          <p className="text-primary/80">
            {isLogin ? "Login with your voice" : "Sign up with your voice"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;