import { Button, Card } from "@heroui/react";
import {
  CircleHelp,
  Command,
  Crosshair,
  Sparkles,
} from "lucide-react";
import MainMenu from "../../components/MainMenu";
import Link from "next/link";


const features = [
  {
    title: "Unified access",
    text: "Move between leading AI systems without changing tools or losing context.",
    icon: "◈",
  },
  {
    title: "Model choice",
    text: "Match reasoning, coding, writing, vision, and multimodal tasks to the right model.",
    icon: "⌁",
  },
  {
    title: "Calm by default",
    text: "A fast, distraction-free conversation space that keeps the important information.",
    icon: "◎",
  },
];

const steps = [
  {
    num: "01",
    title: "Choose a model",
    text: "Start with the model that best matches your task.",
  },
  {
    num: "02",
    title: "Ask naturally",
    text: "Use your best prompt for every conversation.",
  },
  {
    num: "03",
    title: "Keep moving",
    text: "Switch models and continue with clarity.",
  },
];

function WindowPreview() {
  return (
    <Card className="mx-auto w-full max-w-[680px] rounded-lg border border-zinc-200 bg-white shadow-none">
      <div className="p-0">
        <div className="flex h-7 items-center justify-center border-b border-zinc-100 px-3 text-[8px] text-zinc-400">
          <span className="absolute left-3 flex gap-1">
            <i className="h-1 w-1 rounded-full bg-zinc-300" />
            <i className="h-1 w-1 rounded-full bg-zinc-300" />
            <i className="h-1 w-1 rounded-full bg-zinc-300" />
          </span>

          <span>Nemotron-3 · Example</span>
        </div>

        <div className="space-y-4 p-7 text-center text-[10px] leading-relaxed text-zinc-500 sm:p-10">
          <p className="text-zinc-600">
            Compare providers databases for a global project.
          </p>

          <div className="flex justify-center gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />

            <div className="text-center">
              <p className="font-medium text-zinc-600">Nemotron-3</p>

              <p>
                A powerful reasoning model designed for complex tasks, coding,
                analysis, and technical problem solving.
                <br />
                A practical choice for applications that require reliable and
                capable AI assistance.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Card>

  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">

      {/* Hero */}
      <section
        id="home"
        className="border-b border-zinc-200 px-6 pb-14 pt-20 sm:pb-18 sm:pt-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            AI model hub
          </p>

          <h1 className="mx-auto max-w-3xl text-6xl font-normal leading-[1.1] tracking-[-0.04em] sm:text-7xl">
            One place to
            <br className="sm:hidden" /> explore AI models.
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-xl font-light leading-8 text-zinc-500">
            Chat with powerful AI models through a simple and unified interface.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Link href={'/assistant'}>
              <Button
                size="md"
                className="h-10 rounded-md bg-sky-500 px-5 text-sm font-light text-white shadow-none"
              >
                Start Chatting
              </Button>
            </Link>

            <Link href={'/models'}>
              <Button
                size="md"
                variant="primary"
                className="h-10 rounded-md border-zinc-300 px-5 text-sm font-light shadow-none"
              >
                Explore Models
              </Button>
            </Link>


          </div>

          <div className="mt-12">
            <WindowPreview />
          </div>
        </div>
      </section>

      {/* Supported Models */}
      <section className="border-b border-zinc-200 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-zinc-400">
            Supported models
          </span>

          <div className="hidden gap-12 text-xs text-zinc-500 sm:flex">
            <span>Nemotron-3</span>
            <span>Space-Bunny</span>
            <span>Ling-3</span>
            <span>Dots3</span>
          </div>

        </div>
      </section>

      {/* About / Features */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 sm:py-24"
      >
        <div className="mb-12 grid gap-8 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-sky-500">
              Designed for focus
            </p>

            <h2 className="max-w-2xl text-4xl font-normal leading-tight tracking-[-0.035em] sm:text-5xl">
              The right intelligence,
              <br />
              without the switching cost.
            </h2>
          </div>

          <p className="max-w-sm self-end text-sm leading-6 text-zinc-500">
            One workspace for exploring strengths, comparing responses, and moving
            from question to answer with less friction.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="rounded-lg border border-zinc-200 bg-zinc-50/50 shadow-none"
            >
              <div className="min-h-44 p-6">
                <div className="mb-10 flex justify-between text-sm text-sky-400">
                  <span className="text-[10px] text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{feature.icon}</span>
                </div>

                <h3 className="mb-3 text-base font-medium">
                  {feature.title}
                </h3>

                <p className="text-xs leading-5 text-zinc-500">
                  {feature.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="border-y border-zinc-200 px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-sky-500">
              Simple by design
            </p>

            <h2 className="text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl">
              From intent to insight
              <br />
              in three quiet steps.
            </h2>

            <p className="mt-5 max-w-sm text-xs leading-6 text-zinc-500">
              No fragmented tabs, model dashboards, or setup rituals.
            </p>
          </div>

          <div className="divide-y divide-zinc-200">
            {steps.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-[45px_1fr_1fr] items-center py-5 text-xs"
              >
                <span className="text-sky-400">{step.num}</span>

                <strong className="font-medium">{step.title}</strong>

                <span className="text-zinc-500">{step.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="chat"
        className="px-6 py-24 text-center sm:py-28"
      >
        <h2 className="mx-auto max-w-2xl text-4xl font-normal leading-tight tracking-[-0.04em] sm:text-5xl">
          Your next answer starts with the
          <br />
          right model.
        </h2>

        <p className="mt-5 text-xs text-zinc-500">
          Five leading model families. One focused interface.
        </p>

        <Link href={'/assistant'}>
          <Button
            size="md"
            className="mt-6 h-10 rounded-md bg-sky-500 px-6 text-sm text-white shadow-none"
          >
            Start Chatting
          </Button>
        </Link>

      </section>



    </main>
  );
}
