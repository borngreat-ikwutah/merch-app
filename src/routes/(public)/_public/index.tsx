import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getHeroSlides } from "~/server/hero";
import { Hero } from "~/components/home/hero";
import { Navbar } from "~/components/shared/navbar";

export const Route = createFileRoute("/(public)/_public/")({
  loader: () => getHeroSlides(),
  component: Home,
});

function Home() {
  const slides = Route.useLoaderData();
  return (
    <>
      <Hero slides={slides} />
    </>
  );
}
