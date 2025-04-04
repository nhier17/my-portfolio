import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import * as Sentry from "@sentry/nextjs";


export default function Home() {
Sentry.metrics.set("user_view_home", "profile visited");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
