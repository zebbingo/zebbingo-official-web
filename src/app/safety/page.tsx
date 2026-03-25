import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";

export const metadata: Metadata = {
  title: "Zebbingo | Safety",
  description:
    "Zebbingo Spark child safety and parental control by design.",
};

const sections = [
  {
    title: "What is Spark?",
    content: (
      <>
        <p>Spark is Zebbingo’s AI-powered storytelling and conversation experience.</p>
        <p>
          It is designed to encourage imagination, creativity and learning while keeping children
          safe. Conversations are carefully limited to age-appropriate topics, and parents remain
          in control of whether Spark is enabled and how it is used.
        </p>
        <p>
          Spark is part of Zebbingo’s screen-free environment. There is no advertising, profiling
          or hidden data use. Safety, privacy and parental control are built into how it works.
        </p>
      </>
    ),
  },
  {
    title: "Do I have to use Spark?",
    content: (
      <>
        <p>No. Spark is optional.</p>
        <p>Parents can enable or disable Spark at any time through the Zebbingo app.</p>
        <p>
          You can delete stored conversations and withdraw consent at any time.
        </p>
        <p>
          If consent is withdrawn, Spark is disabled immediately and stored conversation data is
          deleted within 24 hours.
        </p>
      </>
    ),
  },
  {
    title: "How do you limit what children experience in Spark?",
    content: (
      <>
        <p>
          Every character’s Spark operates within strict guard-rails. These define what topics the
          character can discuss and how it responds during conversations.
        </p>
        <p>
          Spark also limits how long it can be used each day, helping it fit into healthy routines
          rather than replacing other activities.
        </p>
        <p>
          Children are told clearly, in age-appropriate language, that Spark characters are AI
          storytellers, not real people. Characters also explain their boundaries and remind
          children that parents can review conversations.
        </p>
      </>
    ),
  },
  {
    title: "What safety systems does Zebbingo use?",
    content: (
      <>
        <p>
          While a conversation is taking place, automated safety systems monitor what the child
          says and how the AI responds. To ensure safety, every input and output is moderated by
          an AI model that is independent from our fundamental one.
        </p>
        <p>
          If a topic becomes inappropriate or concerning, Spark will gently refuse to continue and
          guide the conversation elsewhere. In more serious situations, the system may trigger a
          safety alert so that the interaction can be reviewed.
        </p>
        <p>
          These safeguards are designed to prevent unsafe conversations and ensure that Spark stays
          within appropriate boundaries.
        </p>
      </>
    ),
  },
  {
    title: "Are you always listening?",
    content: (
      <>
        <p>No. Spark is off by default and can only be enabled by a parent in the Zebbingo app.</p>
        <p>There is no always-on listening, no wake word and no background audio monitoring.</p>
        <p>
          The device listens only when a figurine is placed on the Stage and a Spark conversation
          is active. When the figurine is removed, listening stops immediately.
        </p>
        <p>Visible lights and spoken cues make it clear when listening is taking place.</p>
      </>
    ),
  },
  {
    title: "How is children’s data processed?",
    content: (
      <>
        <p>
          When Spark is enabled, a child’s voice is processed in real time so the device can
          respond. Audio is not stored beyond what is technically necessary.
        </p>
        <p>
          Conversation transcripts are stored for a limited period: 30 days by default, or up to
          180 days with additional parental consent. They are used only for safety review,
          reliability and story continuity.
        </p>
        <p>
          Zebbingo does not sell children’s data or share it for commercial purposes. Conversations
          are never used for advertising and are not used to train AI models.
        </p>
        <p>We do not create voiceprints, biometric identifiers or behavioural profiles.</p>
        <p>
          Zebbingo operates under UK GDPR and the Age-Appropriate Design Code. Our infrastructure
          is hosted in the UK and stored data is encrypted.
        </p>
      </>
    ),
  },
  {
    title: "How are children’s conversations reviewed?",
    content: (
      <>
        <p>
          Spark conversations are automatically checked by safety systems after each session to
          ensure nothing inappropriate was missed.
        </p>
        <p>
          Human review takes place only if a serious safety concern is flagged. This helps us
          investigate potential issues and improve the system.
        </p>
        <p>
          If a child repeatedly tries to push the conversation outside safe boundaries, Spark will
          end the session.
        </p>
      </>
    ),
  },
];

export default function SafetyPage() {
  return (
    <InfoPageLayout
      title="Spark Child Safety and Parental Control by Design"
      description="Clear principles for how Spark keeps children safe while parents stay in control."
      sections={sections}
    />
  );
}
