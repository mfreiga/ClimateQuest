import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TreePine } from "lucide-react";
import Navigation from "@/components/ui/navigation";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle registration
    console.log("Sign up attempt with:", { name, email, password });
    navigate("/dashboard");
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation showBack={false} showLogin={false} />

      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Card className="w-full max-w-md p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-green-100 p-3 rounded-full">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center mb-2">
              Join ClimateQuest
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Start your journey towards a sustainable future
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Sign Up
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => handleSocialSignup("google")}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4"
                />
                Continue with Google
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => handleSocialSignup("apple")}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.52-3.2 0-1.44.71-2.2.51-3.08-.4C3.33 16.08 4.81 8.89 9.09 8.55c1.43-.11 2.46.83 3.36.83.89 0 2.26-1.03 4.05-.87 1.13.1 4.19.56 4.19 4.96-.04 3.88-2.58 5.86-3.64 6.81zM15.84 6.41c.89-1.17.78-2.79-.69-4.41C13.46.3 11.6 0 11.6 0s-.06 1.21.81 2.37c.91 1.23 2.46 1.9 3.43 4.04z" />
                </svg>
                Continue with Apple
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => handleSocialSignup("facebook")}
              >
                <svg
                  className="w-4 h-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continue with Facebook
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="text-green-600 hover:text-green-700 p-0"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;
