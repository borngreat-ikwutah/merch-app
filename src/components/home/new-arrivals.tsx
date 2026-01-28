import { Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Image } from "@unpic/react";

const products = [
  {
    id: 1,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    name: "Product name",
    price: 200.0,
    oldPrice: 250.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function NewArrivals() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight">New arrivals</h2>
        <Button
          asChild
          variant="default"
          className="bg-black text-white hover:bg-gray-800"
        >
          <Link to=".">View all</Link>
        </Button>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory -mx-4 px-4 sm:grid sm:grid-cols-2 sm:gap-y-8 sm:gap-x-6 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0 lg:grid-cols-4 scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] snap-center sm:min-w-0 sm:snap-align-none group flex flex-col"
          >
            <div className="aspect-[306/321] w-full overflow-hidden bg-gray-100 relative mb-3">
              <Image
                src={product.image}
                alt={product.name}
                layout="fullWidth"
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 mb-4">
              <h3 className="text-sm font-medium text-gray-900">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-red-500 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-none mt-auto">
              Add to cart
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
