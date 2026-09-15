import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center gap-4 px-4 py-10">
      <div className="flex w-full justify-end">
        <DarkModeToggle />
      </div>
      <div className="flex w-full flex-col items-center gap-10 rounded-[2.5rem] border border-gray-200 bg-white px-10 py-16 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <ProfileHeader name={profile.name} bio={profile.bio} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
