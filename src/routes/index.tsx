import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getHeroSlides } from "~/server/hero";
import { Hero } from "~/components/home/hero";

export const Route = createFileRoute("/")({
  loader: () => getHeroSlides(),
  component: Home,
});

function Home() {
  const slides = Route.useLoaderData();
  return (
    <main>
      <Hero slides={slides} />
    </main>
  );
}
