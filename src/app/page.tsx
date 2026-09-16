import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center gap-6 px-6 py-12 sm:px-8 sm:py-16">
      <div className="flex w-full justify-end">
        <DarkModeToggle />
      </div>
      <div className="flex w-full flex-col items-center gap-10 rounded-[2.5rem] border border-white/60 bg-white/40 px-6 py-14 shadow-[0_20px_60px_-15px_rgba(210,150,100,0.35)] backdrop-blur-2xl sm:px-12 sm:py-16 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
        <ProfileHeader name={profile.name} bio={profile.bio} imageSrc={profile.imageSrc} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
