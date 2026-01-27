import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { Mail } from "lucide-react";
import { Button } from "~/components/ui/button";

interface AuthPageProps {
  type: "login" | "signup";
}

export const AuthPage = ({ type }: AuthPageProps) => {
  const isLogin = type === "login";
  const title = isLogin ? "Log in" : "Create an account";
  const footerText = isLogin
    ? "Don't have an account?"
    : "Already have an account?";
  const footerLinkText = isLogin ? "Sign up" : "Log in";
  const footerLinkTo = isLogin ? "/signup" : "/login";

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side - Merch Image */}
      <div className="relative hidden w-full bg-gray-100 lg:block lg:w-2/3 xl:w-3/4">
        <Image
          src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
          alt="Merchandise Rack"
          layout="fullWidth"
          className="h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex w-full flex-col items-center justify-center px-8 py-12 bg-white lg:w-1/3 xl:w-1/4">
        <div className="w-full max-w-[320px] space-y-10 text-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold tracking-tighter text-black uppercase flex items-center justify-center gap-2"
          >
            <Image
              src="/favicon.svg"
              alt="MerchWay Logo"
              width={30}
              height={30}
            />
            MERCHWAY
          </Link>

          <div className="space-y-2">
            <h2 className="text-xl font-medium text-gray-900 font-manrope">
              {title}
            </h2>
          </div>

          <div className="space-y-4">
            <Button variant="outline" className="w-full gap-3 cursor-pointer">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>

            <Button variant="outline" className="w-full gap-3 cursor-pointer">
              <svg
                className="h-5 w-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 4.15-1.02 1.83.1 3.19.89 3.95 2.06-3.32 1.83-2.68 6.55.77 7.97-.69 1.99-1.68 3.93-3.95 3.22zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </Button>

            <Button variant="outline" className="w-full gap-3 cursor-pointer">
              <Mail className="h-5 w-5 text-gray-600 group-hover:text-black" />
              Continue with email
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              {footerText}{" "}
              <Link
                to={footerLinkTo}
                className="font-semibold text-black hover:underline"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
