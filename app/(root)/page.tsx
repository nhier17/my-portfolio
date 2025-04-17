import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import * as Sentry from "@sentry/nextjs";
import FeatureCards from "@/components/FeatureCards";


export default function Home() {
Sentry.metrics.set("user_view_home", "profile visited");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip  mx-auto sm:px-10 px-5">
      
      <div className="max-w-7xl w-full">
        <Hero />
        <TechStack />
        <RecentProjects />
        <FeatureCards />
        <Experience />
        <Clients />
      </div>
    </main>
  );
}
