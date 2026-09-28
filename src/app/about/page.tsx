const models = [
  {
    number: "01",
    name: "GPT",
    maker: "OpenAI",
    description:
      "A flexible general-purpose family designed to perform reliably across complex knowledge-work tasks.",
    training:
      "Broad reasoning, tool use, multimodal understanding",
    uses: "Product work, analysis, software development",
    strengths: "Reasoning · Coding · Vision · Research",
  },
  {
    number: "02",
    name: "Claude",
    maker: "Anthropic",
    description:
      "A thoughtful model family known for clear communication and careful handling of long, detailed material.",
    training:
      "Nuanced reasoning, long context, precise writing",
    uses: "Documents, synthesis, strategy, code review",
    strengths: "Reasoning · Writing · Coding · Analysis",
  },
  {
    number: "03",
    name: "Gemini",
    maker: "Google",
    description:
      "A multimodal family built to connect text, images, data, and information-rich research tasks.",
    training:
      "Native multimodality, research, ecosystem reach",
    uses: "Visual analysis, research, data-rich workflows",
    strengths: "Vision · Research · Coding · Audio",
  },
  {
    number: "04",
    name: "Qwen",
    maker: "Alibaba",
    description:
      "A technically capable family with strong language coverage and practical performance in code-heavy work.",
    training:
      "Multilingual performance, mathematics, coding",
    uses: "Global products, localization, development",
    strengths: "Coding · Reasoning · Multilingual · Math",
  },
  {
    number: "05",
    name: "Llama",
    maker: "Meta",
    description:
      "An open model family that gives teams greater control over adaptation, hosting, and specialized workflows.",
    training:
      "Open ecosystem, adaptability, experiment control",
    uses: "Private systems, research, custom applications",
    strengths: "General · Coding · Reasoning · Open source",
  },
];

export default function Page() {
  return (
    <main
      id="top"
      className="min-h-screen bg-white text-zinc-950"
    >
      {/* About */}
      <section id="about">
        <div className="mx-auto grid max-w-[1120px] gap-14 border-b border-zinc-200 px-8 py-18 sm:grid-cols-[1fr_0.82fr] sm:py-24">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-sky-500">
              About AI models
            </p>

            <h1 className="max-w-lg text-5xl font-normal leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              Understanding AI
              <br />
              Models
            </h1>
          </div>

          <div className="max-w-md pt-1">
            <p className="text-base leading-6">
              AI models are systems trained to recognize patterns,
              generate content, reason through problems, and work with
              language, code, images, and data.
            </p>

            <p className="mt-6 text-[11px] leading-5 text-zinc-500">
              Model families differ in how they are trained and where
              they perform best. The strongest choice depends on the
              task in front of you.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-[1120px] gap-6 px-8 py-6 text-[10px] sm:grid-cols-[0.35fr_1fr]">
          <span className="uppercase tracking-[0.2em] text-zinc-400">
            How to choose
          </span>

          <span className="leading-5 text-zinc-500">
            Start with the task, not the brand. Consider modality,
            context, reasoning depth, language support, speed, and how
            much control you need over deployment.
          </span>
        </div>
      </section>

      {/* Models */}
      <section
        id="models"
        className="mx-auto max-w-[1120px] px-8"
      >
        <div className="divide-y divide-zinc-200">
          {models.map((model) => (
            <article
              key={model.name}
              className="grid gap-8 py-10 sm:grid-cols-[0.28fr_1fr_1.5fr] sm:gap-12"
            >
              {/* Model Info */}
              <div className="flex justify-between sm:block">
                <div>
                  <span className="text-[14px] text-sky-400">
                    {model.number}
                  </span>

                  <h2 className="mt-3 text-3xl font-normal tracking-[-0.04em]">
                    {model.name}
                  </h2>
                </div>

                <div className="text-right text-[11px] text-zinc-400 sm:mt-7 sm:text-left">
                  <p className="uppercase tracking-widest">
                    Provider
                  </p>

                  <p className="mt-1.5 text-zinc-700">
                    {model.maker}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="max-w-lg text-[14px] font-light leading-6 text-zinc-600 sm:pt-1">
                {model.description}
              </p>

              {/* Details */}
              <div className="grid gap-6 text-[10px] sm:grid-cols-3 sm:pt-1">
                <div>
                  <p className="uppercase tracking-widest text-zinc-400">
                    What it is best at
                  </p>

                  <p className="mt-2.5 text-xs font-light leading-5">
                    {model.training}
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-widest text-zinc-400">
                    Common use cases
                  </p>

                  <p className="mt-2.5 text-xs font-light leading-5">
                    {model.uses}
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-widest text-zinc-400">
                    Strengths
                  </p>

                  <p className="mt-2.5 text-xs font-light leading-5">
                    {model.strengths}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
