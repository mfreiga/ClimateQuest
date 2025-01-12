import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Sparkles } from "lucide-react";
import Navigation from "@/components/ui/navigation";

const tiers = [
  {
    name: "Free",
    price: "$0",
    icon: <Star className="w-6 h-6 text-gray-500" />,
    description: "Access basic features and start your climate journey",
    features: [
      "Access to basic resources",
      "Blogs, tips, and challenges",
      "Limited access to group webinars",
      "Pre-recorded sessions",
    ],
    color: "border-gray-200",
    buttonVariant: "outline" as const,
  },
  {
    name: "Premium",
    price: "$9.99",
    icon: <Crown className="w-6 h-6 text-yellow-500" />,
    description: "Enhanced features for dedicated eco-warriors",
    features: [
      "All Free features",
      "Personalized coaching sessions",
      "Access to live, exclusive webinars",
      "Interactive sustainability tracker",
      "Personalized action plans",
    ],
    color: "border-yellow-200",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "VIP",
    price: "$29.99",
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    description: "Ultimate package for sustainability leaders",
    features: [
      "All Premium features",
      "One-on-one coaching with experts",
      "Customizable eco-roadmap",
      "Early access to new features",
      "Priority access to events",
      "Beta tools testing",
    ],
    color: "border-purple-200",
    buttonVariant: "outline" as const,
  },
];

const MembershipLevels = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation showLogin={false} />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose Your Membership
          </h1>
          <p className="text-xl text-white/80">
            Select the perfect plan for your sustainability journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`p-6 flex flex-col border-2 ${tier.color} ${tier.popular ? "relative border-yellow-400" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                {tier.icon}
                <h2 className="text-2xl font-bold mt-4 mb-2">{tier.name}</h2>
                <div className="text-3xl font-bold mb-2">{tier.price}</div>
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.buttonVariant}
                className={`w-full ${tier.popular ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}`}
              >
                Choose {tier.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipLevels;
