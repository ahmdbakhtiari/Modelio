import { Button, Card, Chip } from "@heroui/react";
import {
  ArrowUpRight,
  CircleHelp,
  Command,
  Crosshair,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const models = [
  {
    name: "Nemotron-3",
    maker: "NVIDIA",
    description: "Advanced reasoning and technical problem solving",
    detail: "Strong for coding and complex tasks",
    tags: ["Reasoning", "Coding", "Analysis"],
    icon: Command,
  },
  {
    name: "Space-Bunny",
    maker: "Open Source",
    description: "Lightweight AI for fast everyday interactions",
    detail: "Fast, simple, and efficient",
    tags: ["Chat", "General", "Speed"],
    icon: CircleHelp,
  },
  {
    name: "Ling-3",
    maker: "InclusionAI",
    description: "Reasoning, coding, and multilingual intelligence",
    detail: "Flexible for technical and global tasks",
    tags: ["Coding", "Reasoning", "Multilingual"],
    icon: Sparkles,
  },
  {
    name: "Dots3",
    maker: "Open Source",
    description: "Flexible model for general-purpose AI applications",
    detail: "Practical and easy to use",
    tags: ["General", "Chat", "Generation"],
    icon: Crosshair,
  },
];


export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section
        id="models"
        className="border-t border-zinc-200 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-sky-500">
                Model library
              </p>

              <h1 className="text-4xl font-normal tracking-[-0.04em] sm:text-5xl">
                Explore AI Models
              </h1>

              <p className="mt-4 text-sm text-zinc-500">
                Choose the model that fits your task.
              </p>
            </div>

            <span className="hidden text-xs text-zinc-400 sm:block">
              05 available models
            </span>
          </div>

          {/* Table Header */}
          <div className="hidden grid-cols-[1fr_1fr_1.3fr_130px] border-b border-zinc-200 pb-4 text-[9px] uppercase tracking-widest text-zinc-400 sm:grid">
            <span>Model</span>
            <span>Best for</span>
            <span>Strengths</span>
            <span>Action</span>
          </div>

          {/* Model Rows */}
          <div className="divide-y divide-zinc-200">
            {models.map(
              ({
                name,
                maker,
                description,
                detail,
                tags,
                icon: Icon,
              }) => (
                <div
                  key={name}
                  className="grid gap-5 py-6 sm:grid-cols-[1fr_1fr_1.3fr_130px] sm:items-center"
                >
                  {/* Model */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-zinc-200 text-zinc-500">
                      <Icon size={15} />
                    </div>

                    <div>
                      <div className="text-sm font-medium">
                        {name}{" "}
                        <span className="font-normal text-zinc-400">
                          {maker}
                        </span>
                      </div>

                      <p className="mt-1.5 text-[10px] text-zinc-400">
                        {detail}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-sm leading-5 text-zinc-600">
                    {description}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <Chip
                        key={tag}
                        size="sm"
                        variant="secondary"
                        className="h-6 rounded-full bg-zinc-100 px-2.5 text-[10px] text-zinc-500"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>

                  {/* Action */}
                  <Link href={'/assistant'}>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-9 w-full rounded-md border-zinc-300 px-3 text-xs shadow-none sm:w-auto"
                    >
                      Chat with {name}
                      <ArrowUpRight size={13} />
                    </Button>
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
