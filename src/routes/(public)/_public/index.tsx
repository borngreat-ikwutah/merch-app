import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getHeroSlides } from "~/server/home";
import { Hero } from "~/components/home/hero";
import { Navbar } from "~/components/shared/navbar";
import { TopArtistPicks } from "~/components/home/top-artist-picks";
import { NewArrivals } from "~/components/home/new-arrivals";
import { BrowseCategories } from "~/components/home/browse-categories";
import { Newsletter } from "~/components/home/newsletter";
import { Footer } from "~/components/home/footer";

export const Route = createFileRoute("/(public)/_public/")({
  loader: () => getHeroSlides(),
  component: Home,
});

function Home() {
  const slides = Route.useLoaderData();
  return (
    <>
      <Hero slides={slides} />
      <div className="flex flex-col w-full p-6 pb-12 sm:p-[60px] sm:pb-24 space-y-5">
        <TopArtistPicks />
        <NewArrivals />
        <BrowseCategories />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
