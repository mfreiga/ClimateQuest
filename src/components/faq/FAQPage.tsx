import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/ui/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");

  const faqs = [
    {
      question: "How does the carbon footprint tracking work?",
      answer:
        "Our carbon footprint tracking system calculates your environmental impact based on your daily activities including transportation, home energy use, shopping habits, and waste management. The data is analyzed to provide personalized recommendations for reducing your carbon emissions.",
    },
    {
      question: "What are the benefits of joining challenges?",
      answer:
        "Joining challenges helps you make a measurable impact while earning points and competing with friends. You'll receive guidance on sustainable practices, track your progress, and contribute to global environmental goals. Plus, you can win achievements and rewards!",
    },
    {
      question: "How are points calculated in the system?",
      answer:
        "Points are awarded based on various eco-friendly actions: reducing carbon emissions, conserving water, planting trees, and completing challenges. Each activity has a specific point value, and bonus points are awarded for consistent sustainable behavior and achieving milestone targets.",
    },
    {
      question: "Can I track my water consumption accurately?",
      answer:
        "Yes! Our water consumption tracker allows you to input your household's water usage data and compares it to regional averages. The system considers factors like household size and seasonal variations to provide accurate conservation recommendations.",
    },
    {
      question: "How does tree planting verification work?",
      answer:
        "When you contribute to tree planting, we partner with verified reforestation organizations who handle the actual planting. You receive regular updates about your trees' location, species, and growth progress, along with certification of your contribution.",
    },
  ];

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the question to a backend
    console.log("Question submitted:", { question, email });
    setQuestion("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation showLogin={false} />

      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">FAQ</h1>
            <p className="text-white/80 mb-8">
              Find answers to commonly asked questions about ClimateQuest
            </p>

            <Card className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Ask a Question
            </h2>
            <p className="text-white/80 mb-6">
              Don't see your question? Submit it here and we'll get back to you.
            </p>

            <Card className="p-6">
              <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
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
                  <Label htmlFor="question">Your Question</Label>
                  <Textarea
                    id="question"
                    placeholder="Type your question here"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="min-h-[100px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Question
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
