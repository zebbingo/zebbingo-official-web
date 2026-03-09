import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety | Zebbingo",
  description:
    "Zebbingo Spark child safety and parental control by design.",
};

const sections = [
  {
    title: "What is Spark?",
    paragraphs: [
      "Spark is Zebbingo’s AI-powered storytelling and conversation experience.",
      "It is designed to encourage imagination, creativity and learning while keeping children safe. Conversations are carefully limited to age-appropriate topics, and parents remain in control of whether Spark is enabled and how it is used.",
      "Spark is part of Zebbingo’s screen-free environment. There is no advertising, profiling or hidden data use. Safety, privacy and parental control are built into how it works.",
    ],
  },
  {
    title: "Do I have to use Spark?",
    paragraphs: [
      "No. Spark is optional.",
      "Parents can enable or disable Spark at any time through the Zebbingo app.",
      "You can also choose how long transcripts are kept, delete stored conversations and withdraw consent at any time.",
      "If consent is withdrawn, Spark is disabled immediately and stored conversation data is deleted within 24 hours.",
    ],
  },
  {
    title: "How do you limit what children experience in Spark?",
    paragraphs: [
      "Every character’s Spark operates within strict guard-rails. These define what topics the character can discuss and how it responds during conversations.",
      "Spark also limits how long it can be used each day, helping it fit into healthy routines rather than replacing other activities.",
      "Children are told clearly, in age-appropriate language, that Spark characters are AI storytellers, not real people. Characters also explain their boundaries and remind children that parents can review conversations.",
    ],
  },
  {
    title: "What safety systems does Zebbingo use?",
    paragraphs: [
      "While a conversation is taking place, automated safety systems monitor what the child says and how the AI responds.",
      "If a topic becomes inappropriate or concerning, Spark will gently refuse to continue and guide the conversation elsewhere. In more serious situations, the system may trigger a safety alert so that the interaction can be reviewed.",
      "These safeguards are designed to prevent unsafe conversations and ensure that Spark stays within appropriate boundaries.",
    ],
  },
  {
    title: "Are you always listening?",
    paragraphs: [
      "No. Spark is off by default and can only be enabled by a parent in the Zebbingo app.",
      "There is no always-on listening, no wake word and no background audio monitoring.",
      "The device listens only when a figurine is placed on the Stage and a Spark conversation is active. When the figurine is removed, listening stops immediately.",
      "Visible lights and spoken cues make it clear when listening is taking place.",
    ],
  },
  {
    title: "How is children’s data processed?",
    paragraphs: [
      "When Spark is enabled, a child’s voice is processed in real time so the device can respond. Audio is not stored beyond what is technically necessary.",
      "Conversation transcripts are stored for a limited period — 30 days by default, or up to 180 days with additional parental consent. They are used only for safety review, reliability and story continuity.",
      "Zebbingo does not sell children’s data or share it for commercial purposes. Conversations are never used for advertising and are not used to train AI models.",
      "We do not create voiceprints, biometric identifiers or behavioural profiles.",
      "Zebbingo operates under UK GDPR and the Age-Appropriate Design Code. Our infrastructure is hosted in the UK and stored data is encrypted.",
    ],
  },
  {
    title: "How are children’s conversations reviewed?",
    paragraphs: [
      "Spark conversations are automatically checked by safety systems after each session to ensure nothing inappropriate was missed.",
      "Human review takes place only if a serious safety concern is flagged. This helps us investigate potential issues and improve the system.",
      "If a child repeatedly tries to push the conversation outside safe boundaries, Spark will end the session.",
    ],
  },
];

export default function SafetyPage() {
  return (
    <main className="bg-porcelain min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-zebbingo-900 mb-4">
            Spark Child Safety and Parental Control by Design
          </h1>
          <p className="text-lg text-soft-ink/80">
            Clear principles for how Spark keeps children safe while parents stay in control.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="bg-white border border-zebbingo-100 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-2xl font-display font-bold text-zebbingo-800 mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-soft-ink leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
