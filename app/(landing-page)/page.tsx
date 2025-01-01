import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { stackServerApp } from "@/stack";
import { MagicWandIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  BarChart,
  BarChart2,
  BarChart3,
  BarChart4,
  BarChartIcon,
  CloudLightning,
  RocketIcon,
  SmileIcon,
} from "lucide-react";

export default async function IndexPage() {
  const project = await stackServerApp.getProject();
  if (!project.config.clientTeamCreationEnabled) {
    return (
      <div className="w-full min-h-96 flex items-center justify-center">
        <div className="max-w-xl gap-4">
          <p className="font-bold text-xl">Setup Required</p>
          <p className="">
            {
              "To start using this project, please enable client-side team creation in the Stack Auth dashboard (Project > Team Settings). This message will disappear once the feature is enabled."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero
        capsuleText=""
        capsuleLink="#features"
        title="Master Any Subject with AI-Powered Learning"
        subtitle="An intelligent companion for kids to conquer school challenges. From quizzes to progress tracking, we make learning fun and effective."
        primaryCtaText="Start Your Learning Journey Today"
        primaryCtaLink={stackServerApp.urls.signUp}
        secondaryCtaText="GitHub"
        secondaryCtaLink="https://github.com/kalubekalu"
      />

      <div id="about" />

      <div id="features" />
      <FeatureGrid
        title="Features"
        subtitle="Why Choose AI Study?"
        items={[
          {
            icon: <MagicWandIcon className="h-12 w-12" />,

            title: "Personalized Learning",
            description:
              "Tailored quizzes and explanations based on your learning needs and pace.",
          },
          {
            icon: <SmileIcon className="h-12 w-12" />,
            title: "Fun and Interactive",
            description:
              "Engage with vibrant visuals, games, and challenges designed to keep learning exciting.",
          },
          {
            icon: <BarChartIcon className="h-12 w-12" />,
            title: "Track Your Progress",
            description:
              "Monitor achievements and milestones to stay motivated on your journey.",
          },

          {
            icon: <CloudLightning className="h-12 w-12" />,
            title: "Powered by AI",
            description:
              "Utilizing the latest AI technology for accurate assessments and instant assistance.",
          },
          {
            icon: <QuestionMarkCircledIcon className="h-12 w-12" />,
            title: "Instant Doubt Resolution",
            description:
              "Got stuck? Get instant, clear explanations for any question or topic with just a click.",
          },
          {
            icon: <RocketIcon className="h-12 w-12" />,
            title: "Gamified Challenges",
            description:
              "Boost your learning with fun, gamified challenges that make studying feel like a game.",
          },
        ]}
      />

      <div id="pricing" />
      <PricingGrid
        title="Pricing"
        subtitle="Flexible plans for every team."
        items={[
          {
            title: "Basic",
            price: "Free",
            description: "For individuals and small projects.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Get Started",
            buttonHref: stackServerApp.urls.signUp,
          },
          {
            title: "Pro",
            price: "$0.00",
            description: "Ideal for growing teams and businesses.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Upgrade to Pro",
            isPopular: true,
            buttonHref: stackServerApp.urls.signUp,
          },
          {
            title: "Enterprise",
            price: "Still Free",
            description: "For large organizations.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Contact Us",
            buttonHref: stackServerApp.urls.signUp,
          },
        ]}
      />
    </>
  );
}
