export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "윤태완",
  bio: "Product Manager",
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/username" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/username" },
  { id: "blog", label: "Blog", url: "https://example.com/blog" },
];
