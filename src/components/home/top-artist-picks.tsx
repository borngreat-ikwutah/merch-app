import { Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Image } from "@unpic/react";

const artists = [
  {
    id: 1,
    name: "Artist name",
    image:
      "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Artist name",
    image:
      "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Artist name",
    image:
      "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function TopArtistPicks() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Top Artist picks</h2>
        <Button
          asChild
          variant="default"
          className="bg-black text-white hover:bg-gray-800"
        >
          <Link to=".">View more</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="group relative overflow-hidden space-y-3"
          >
            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 relative">
              <Image
                src={artist.image}
                alt={artist.name}
                layout="fullWidth"
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h3 className="text-base font-medium text-gray-900">
                {artist.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
