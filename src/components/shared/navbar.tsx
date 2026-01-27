import { Link } from "@tanstack/react-router";
import { Search, ShoppingCart } from "lucide-react";
import { Image } from "@unpic/react";

const TopNav = () => {
  return (
    <div className="flex w-full items-center justify-between px-4 py-4 sm:px-[60px] border-b border-subtle-100">
      <Link
        to="/"
        className="text-2xl font-bold tracking-tight text-black uppercase flex gap-2 items-center"
      >
        <Image src="/favicon.svg" alt="MerchWay Logo" width={30} height={30} />
        <h2 className="max-sm:hidden">MERCHWAY</h2>
      </Link>

      <div className="hidden items-center gap-8 sm:flex">
        <Link
          to="/"
          className="text-sm font-medium text-secondary-700 hover:text-black transition-colors"
        >
          Sell
        </Link>
        <Link
          to="/"
          className="text-sm font-medium text-secondary-700 hover:text-black transition-colors"
        >
          Shop
        </Link>
        <Link
          to="/login"
          className="text-sm font-medium text-secondary-700 hover:text-black transition-colors"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="rounded-md bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

const BottomNav = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-[60px] border-b border-subtle-100 max-sm:hidden">
      <nav className="flex items-center gap-8 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide font-manrope">
        <Link
          to="/"
          className="whitespace-nowrap text-base font-medium text-secondary-700 hover:text-black"
        >
          Men&apos;s wear
        </Link>
        <Link
          to="/"
          className="whitespace-nowrap text-base font-medium text-secondary-700 hover:text-black"
        >
          Women&apos;s wear
        </Link>
        <Link
          to="/"
          className="whitespace-nowrap text-base font-medium text-secondary-700 hover:text-black"
        >
          Collections
        </Link>
        <Link
          to="/"
          className="whitespace-nowrap text-base font-medium text-secondary-700 hover:text-black"
        >
          Trending
        </Link>
      </nav>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="relative flex w-full sm:w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-900" />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-subtle-100 py-2.5 pl-10 pr-4 text-sm placeholder:text-secondary-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <button
          className="rounded-lg border border-subtle-100 p-2.5 text-secondary-700 hover:bg-primary-50 hover:text-black transition-colors cursor-pointer"
          aria-label="Cart"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-50 flex w-full flex-col bg-white"
      data-testid="navbar"
    >
      <TopNav />
      <BottomNav />
    </header>
  );
};
