import { Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Image } from "@unpic/react";
import { cn } from "~/lib/utils";

interface Category {
  name: string;
  href: string;
  image: string;
  className: string;
}

const categories: Category[] = [
  {
    name: "T-Shirt",
    href: "/categories/t-shirts",
    image:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    name: "Accessories",
    href: "/categories/accessories",
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Grails",
    href: "/categories/grails",
    image:
      "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Bottoms",
    href: "/categories/bottoms",
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Outer wear",
    href: "/categories/outerwear",
    image:
      "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    name: "Shoes",
    href: "/categories/shoes",
    image:
      "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    className: "md:col-span-2 md:row-span-1",
  },
];

export function BrowseCategories() {
  return (
    <section className="w-full sm:mt-6 mt-3">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        Browse categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {categories.map((category) => (
          <div
            key={category.name}
            className={cn(
              "group relative overflow-hidden rounded-xl bg-gray-100",
              category.className,
            )}
          >
            <Image
              src={category.image}
              alt={category.name}
              layout="fullWidth"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-white rounded-lg p-2.5 pl-5 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <span className="font-semibold text-gray-900 tracking-tight">
                {category.name}
              </span>
              <Button
                asChild
                size="sm"
                className="bg-black text-white hover:bg-neutral-800 rounded-md px-6 h-9 font-medium"
              >
                <Link to={category.href}>Shop now</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
