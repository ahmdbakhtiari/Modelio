import { Button } from "@heroui/react";
import Link from "next/link";

export default function MainMenu() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group text-sm font-medium tracking-tight text-zinc-900"
        >
          <span className="mr-1.5 text-sky-400 transition-colors group-hover:text-sky-500">
            ●
          </span>
          <span className="transition-colors group-hover:text-zinc-700">
            AI Model Hub
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-500 transition-all duration-200 hover:font-semibold hover:text-zinc-950"
          >
            Home
          </Link>

          <Link
            href="/models"
            className="text-sm font-medium text-zinc-500 transition-all duration-200 hover:font-semibold hover:text-zinc-950"
          >
            Models
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-zinc-500 transition-all duration-200 hover:font-semibold hover:text-zinc-950"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-500 transition-all duration-200 hover:font-semibold hover:text-zinc-950"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link href={'/assistant'}>
          <Button
            size="sm"
            className="h-9 min-w-0 rounded-md bg-sky-500 px-5 text-xs font-medium text-white shadow-none transition-all duration-200 hover:bg-sky-600 hover:shadow-sm"
          >
            Start Chatting
          </Button>
        </Link>
      </div>
    </header>
  );
}
