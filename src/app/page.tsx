import { Metadata } from "next";
import Home from "./home/page";
export const metadata: Metadata = {
  title: {
    default: "Medical Website",
    template: "%s | Medical Website",
  },
  description:
    "Welcome to the Medical website. Here you can find all the data about the Habibiyar hospital.",
};

export default function Root() {
  return (
    <main>
      <Home />
    </main>
  );
}
