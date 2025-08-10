
import { ActivitySquare, BarChart3, Shield, Settings } from "lucide-react";
import { CircuitBoard, BarChart3 as BarChart, Shield as ShieldIcon, Rocket } from "lucide-react";
import { Microscope, Bot, Cpu } from "lucide-react";
import { Zap, Lightbulb } from "lucide-react";

export const features = [
  {
    title: "AI-Driven Simulator",
    description: "Simulate thousands of edge-case scenarios to comprehensively evaluate your chatbot agents. Plurai empowers developers to ensure robust deployments with detailed performance analysis.",
    icon: CircuitBoard,
  },
  {
    title: "Seamless Optimization",
    description: "Optimize your chatbot agents using advanced reinforcement learning and synthetic datasets. Our AI-powered approach ensures efficient performance aligned with your business goals.",
    icon: BarChart,
  },
  {
    title: "Proven Expertise",
    description: "Led by industry leaders with decades of AI experience, we bring the perfect blend of innovation and practicality to your Generative AI solutions.",
    icon: ShieldIcon,
  },
  {
    title: "Scalable Solutions",
    description: "Delivering scalable, cost and latency efficient solutions with impactful results. Our platform ensures optimal performance and resource utilization while maintaining high reliability and adaptability.",
    icon: Rocket,
  },
];

export const valuePropositions = [
  {
    title: "Proactive Reliability Rating",
    icon: Shield,
  },
  {
    title: "Faster Time to Value",
    icon: Zap,
  },
  {
    title: "Intelligent Risk Prevention",
    icon: Lightbulb,
  },
];

export const diagnosticFeatures = [
  {
    icon: Microscope,
    text: "Simulation: Generate realistic edge-case scenarios to stress-test your agent from all angles"
  },
  {
    icon: BarChart,
    text: "Evaluation: Get a comprehensive report on agent failures across multiple dimensions"
  },
  {
    icon: Cpu,
    text: "Optimization: Seamlessly integrate optimization layers to minimize failures and ensure alignment with your business needs"
  },
  {
    icon: Shield,
    text: "Deployment: Ship reliable, impactful agents with confidence"
  }
];

// Organized features by category
export const categorizedFeatures = {
  automatedTesting: [
    {
      icon: ActivitySquare,
      title: "Simulate Data",
      description: "Automatically generate a test dataset customized to your product specifications and policies, ensuring your LLM app is stress-tested from every angle before shipping"
    },
    {
      icon: BarChart3,
      title: "Evaluate Performance",
      description: "Detailed analysis to identify failures and performance gaps, prioritize improvements, and compare outcomes across experiments"
    }
  ],
  qualityAndRisk: [
    {
      icon: Settings,
      title: "Optimize Performance",
      description: "Enhance application performance using simulated data to align with business needs"
    },
    {
      icon: Shield,
      title: "SafeGuard Reliability",
      description: "Robust guardrails to proactively prevent risks, ensure compliance, and guarantee your LLM-App operates within defined boundaries"
    }
  ]
};
