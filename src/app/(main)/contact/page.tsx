"use client";

import { Button, Card, Input, TextArea } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

const handleSubmit = async () => {
  if (!name.trim() || !email.trim() || !message.trim()) {
    setStatus("Please fill in all required fields.");
    return;
  }

  setIsSending(true);
  setStatus("");

  try {
const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name,
    email,
    subject,
    message,
  }),
});

console.log("STATUS:", response.status);
console.log("URL:", response.url);

const text = await response.text();

console.log("RESPONSE:", text);
    if (!response.ok) {
      throw new Error(
        text || `Request failed with status ${response.status}`
      );
    }

    if (!text.trim()) {
      throw new Error("The server returned an empty response.");
    }

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("The server returned invalid JSON.");
    }

    if (!data.success) {
      throw new Error(data.error || "Failed to send message.");
    }

    setStatus("Message sent successfully.");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  } catch (error) {
    console.error("Contact form error:", error);

    setStatus(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSending(false);
  }
};


  return (
    <div>
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

            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                value={name}
                onChange={(action) => {
                  setName(action.target.value);
                }}
                className="rounded-sm border border-gray-100 shadow-sm hover:shadow-md"
                placeholder="Your name"
                variant="primary"
              />

              <Input
                type="email"
                value={email}
                onChange={(action) => {
                  setEmail(action.target.value);
                }}
                className="rounded-sm border border-gray-100 shadow-sm hover:shadow-md"
                placeholder="you@company.com"
                variant="primary"
              />
            </div>

            {/* Subject */}
            <Input
              value={subject}
              onChange={(action) => {
                setSubject(action.target.value);
              }}
              className="mt-5 rounded-sm border border-gray-100 shadow-sm hover:shadow-md"
              placeholder="How can we help?"
              variant="primary"
            />

            {/* Message */}
            <TextArea
              value={message}
              onChange={(action) => {
                setMessage(action.target.value);
              }}
              className="mt-5 h-30 rounded-sm border border-gray-100 shadow-sm hover:shadow-md"
              placeholder="Tell us a little about your question or idea..."
              variant="primary"
            />

            {/* Submit */}
            <div className="mt-5 flex items-center justify-between gap-5">
              <span
                className={`text-[9px] leading-4 ${
                  status.includes("success")
                    ? "text-green-500"
                    : status
                      ? "text-red-400"
                      : "text-zinc-400"
                }`}
              >
                {status ||
                  "By sending, you agree to our privacy policy."}
              </span>

              <Button
                size="sm"
                isDisabled={isSending}
                onPress={handleSubmit}
                className="h-9 shrink-0 rounded-md bg-sky-500 px-5 text-[10px] text-white shadow-none transition-colors hover:bg-sky-600"
              >
                {isSending ? "Sending..." : "Send Message"}

                {!isSending && (
                  <ArrowUpRight size={12} />
                )}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
