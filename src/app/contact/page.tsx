import { Button, Card, Input, TextArea } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <div>
      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-200"
      >
        <div className="mx-auto grid max-w-[1120px] gap-14 px-8 py-20 sm:grid-cols-[0.8fr_1fr] sm:py-28">
          {/* Contact Info */}
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-sky-500">
              Contact
            </p>

            <h2 className="text-5xl font-normal tracking-[-0.05em] sm:text-6xl">
              Let&apos;s talk.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-zinc-500">
              Have a question, idea, or collaboration opportunity?
            </p>

            <div className="mt-24 text-[10px] text-zinc-500">
              <p className="uppercase tracking-widest text-zinc-400">
                Response time
              </p>

              <p className="mt-2.5">
                Usually within one business day.
              </p>

              <p className="mt-2.5">
                GitHub ↗ &nbsp; LinkedIn ↗ &nbsp; Email ↗
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="rounded-xl border border-zinc-200 p-5 shadow-none sm:p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
              className={'rounded-sm border border-gray-100 shadow-sm hover:shadow-md'}
                placeholder="Your name"
                variant="primary"
              />

              <Input
              className={'rounded-sm border border-gray-100 shadow-sm hover:shadow-md'}
                placeholder="you@company.com"
                variant="primary"
              />
            </div>

            <Input
              className="mt-5 rounded-sm border border-gray-100 shadow-sm hover:shadow-md"
              placeholder="How can we help?"
              variant="primary"
            />

            <TextArea
              className="mt-5 rounded-sm border border-gray-100 shadow-sm hover:shadow-md h-30"
              placeholder="Tell us a little about your question or idea..."
              variant="primary"
            />

            <div className="mt-5 flex items-center justify-between gap-5">
              <span className="text-[9px] leading-4 text-zinc-400">
                By sending, you agree to our privacy policy.
              </span>

              <Button
                size="sm"
                className="h-9 shrink-0 rounded-md bg-sky-500 px-5 text-[10px] text-white shadow-none transition-colors hover:bg-sky-600"
              >
                Send Message
                <ArrowUpRight size={12} />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
