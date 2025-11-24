import type { Metadata } from "next";
import AboutPageContent from "./page-content"; // We'll move the component logic here

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Zebbingo mission to bridge timeless storytelling with cutting-edge AI technology.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
