import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import DailyBriefPreview from "@/components/DailyBriefPreview";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0B1120" }}>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <DailyBriefPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}
