import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "~/components/shared/navbar";

export const Route = createFileRoute("/(public)/_public")({
  component: App,
});

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
