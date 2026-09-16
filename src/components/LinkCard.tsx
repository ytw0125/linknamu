import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/60 bg-white/30 px-5 py-4 text-center font-medium text-gray-700 shadow-sm backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/45 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:hover:bg-white/10"
    >
      {link.label}
    </a>
  );
}
