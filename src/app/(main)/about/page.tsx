const models = [
  {
    number: "01",
    name: "Nemotron-3",
    maker: "NVIDIA",
    description:
      "A reasoning-focused model family designed for strong performance across complex tasks, coding, and technical problem solving.",
    training:
      "Advanced reasoning, coding, instruction following",
    uses: "Software development, analysis, technical workflows",
    strengths: "Reasoning · Coding · Analysis · Technical Tasks",
  },
  {
    number: "02",
    name: "Space-Bunny",
    maker: "Open Source",
    description:
      "A lightweight model designed for fast, practical interactions and efficient AI-powered applications.",
    training:
      "Instruction following, general language understanding",
    uses: "Chat applications, assistants, lightweight workflows",
    strengths: "Speed · General · Chat · Efficiency",
  },
  {
    number: "03",
    name: "Ling-3",
    maker: "InclusionAI",
    description:
      "A modern language model focused on reasoning, coding, and multilingual understanding across a wide range of tasks.",
    training:
      "Reasoning, multilingual understanding, coding",
    uses: "Development, research, multilingual applications",
    strengths: "Reasoning · Coding · Multilingual · Research",
  },
  {
    number: "04",
    name: "Dots3",
    maker: "Open Source",
    description:
      "A flexible model designed for general-purpose AI applications with an emphasis on practical performance and usability.",
    training:
      "General language understanding, instruction following",
    uses: "AI assistants, content generation, general applications",
    strengths: "General · Chat · Generation · Flexibility",
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
