"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group text-sm font-medium tracking-tight text-zinc-900"
        >
          <span className="mr-1.5 text-sky-400 transition-colors group-hover:text-sky-500">
            ●
          </span>

          <span className="transition-colors group-hover:text-zinc-700">
            AI Model Hub
          </span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <Link href="/assistant" className="hidden sm:block">
          <Button
            size="sm"
            className="h-9 min-w-0 rounded-md bg-sky-500 px-5 text-xs font-medium text-white shadow-none transition-all duration-200 hover:bg-sky-600 hover:shadow-sm"
          >
            Start Chatting
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          isIconOnly
          variant="ghost"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onPress={() => setIsOpen((prev) => !prev)}
          className="h-9 min-w-9 rounded-md text-zinc-700 sm:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-5 sm:hidden">
          <nav className="flex flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-zinc-100 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Home
            </Link>

            <Link
              href="/models"
              onClick={closeMenu}
              className="border-b border-zinc-100 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Models
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-zinc-100 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="border-b border-zinc-100 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Contact
            </Link>

            <Link
              href="/assistant"
              onClick={closeMenu}
              className="mt-4"
            >
              <Button
                fullWidth
                size="sm"
                className="h-10 rounded-md bg-sky-500 text-sm font-medium text-white shadow-none hover:bg-sky-600"
              >
                Start Chatting
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
