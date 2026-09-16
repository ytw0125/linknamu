export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "윤태완",
  bio: "Product Manager",
  imageSrc: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", label: "🐙 GitHub", url: "https://github.com/ytw0125" },
  { id: "instagram", label: "📷 Instagram", url: "https://instagram.com/ytw0125" },
  { id: "email", label: "📬 Email", url: "mailto:ytw060125@gmail.com" },
];
