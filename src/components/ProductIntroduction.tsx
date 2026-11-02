import Link from "next/link";
import Image from "next/image";

export default function ProductIntroduction() {
  return (
    <section
      id="discover-zebbingo"
      aria-labelledby="discover-heading"
      className="scroll-mt-8 border-t border-black/10 bg-white px-6 pb-40 pr-16 pt-16 md:pl-10 md:pr-28 lg:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-sky-800">
            Discover Zebbingo
          </p>
          <h2 id="discover-heading" className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
            A world of imagination. A conversation away.
          </h2>
          <p className="text-xl leading-relaxed sm:text-2xl">
            Zebbingo is a screen-free speaker for children aged 5 to 11, paired
            with a cast of collectable figurines.
          </p>
        </header>

        <div className="space-y-12 text-lg leading-relaxed">
          <section aria-labelledby="cast-heading" className="max-w-3xl">
            <h3 id="cast-heading" className="mb-4 text-3xl font-bold">Meet the cast</h3>
            <p>
              The planned cast spans history, professions, animals and fantasy.
              Meet historical characters such as Cleopatra, Shakespeare, Julius
              Caesar and a Viking; explore the worlds of a doctor, scientist,
              firefighter and astronaut; or let a puppy, a T Rex, a cat, a
              fairytale princess or a unicorn spark your child&apos;s imagination.
            </p>
            <Image
              src="/assets/kickstarter-figurines-cutout.png"
              alt="Four Zebbingo figurines: an explorer in a white suit, a doctor, Julius Caesar and a blue T Rex"
              width={3020}
              height={1612}
              sizes="(min-width: 912px) 768px, (min-width: 768px) calc(100vw - 152px), calc(100vw - 88px)"
              className="mt-6 h-auto w-full rounded-2xl"
            />
          </section>

          <section aria-labelledby="how-heading">
            <h3 id="how-heading" className="mb-4 text-3xl font-bold">How it works</h3>
            <p className="mb-6 max-w-3xl">
              When your child places a figurine on the speaker, which we call the
              Stage, it unlocks a library specific to that character, blending
              education and entertainment.
            </p>
            <Image
              src="/assets/stage-speaker-cutout.png"
              alt="The Zebbingo Stage speaker with three circular figurine pads, a yellow button and blue playback controls"
              width={3332}
              height={1615}
              sizes="(min-width: 912px) 768px, (min-width: 768px) calc(100vw - 152px), calc(100vw - 88px)"
              className="mb-6 h-auto w-full max-w-3xl rounded-2xl"
            />
            <ol className="grid gap-4 md:grid-cols-3">
              <li className="rounded-2xl bg-sky-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-sky-800">Left-hand pad</p>
                <h4 className="my-2 text-2xl font-bold">Listen to stories</h4>
                <p>Discover original stories from the character&apos;s world.</p>
              </li>
              <li className="rounded-2xl bg-amber-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-amber-900">Middle pad</p>
                <h4 className="my-2 text-2xl font-bold">Start a conversation</h4>
                <p>Launch Spark, an AI-enabled conversation mode, and ask the character about its world.</p>
              </li>
              <li className="rounded-2xl bg-sky-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-sky-800">Right-hand pad</p>
                <h4 className="my-2 text-2xl font-bold">Enjoy songs</h4>
                <p>Explore original songs inspired by the character.</p>
              </li>
            </ol>
            <div className="mt-6 max-w-3xl space-y-4">
              <p>
                Spark lets your child talk with Julius Caesar about Roman times,
                or ask the T Rex about life as a dinosaur over 66 million years ago.
              </p>
              <p>
                We believe in the power of conversation to encourage children to
                dream, create and explore new worlds, growing through intelligent
                play. We fuel imagination through interaction — and interaction
                through imagination.
              </p>
            </div>
          </section>

          <section aria-labelledby="safety-heading" className="max-w-3xl">
            <h3 id="safety-heading" className="mb-4 text-3xl font-bold">Safety by design</h3>
            <p className="mb-4">
              Safety, privacy and parental control are central to how we design
              Spark. It is designed for age-appropriate conversations, with
              safeguards to help keep the experience within appropriate boundaries.
            </p>
            <p className="mb-4">
              The Stage has no screen. Children can explore stories, songs and
              conversation without social media, advertising or video recommendation loops.
            </p>
            <Link href="/safety/" className="font-bold underline underline-offset-4 hover:text-sky-800">
              Read about Spark safety and parental control
            </Link>
          </section>

          <section aria-labelledby="box-heading" className="max-w-3xl space-y-4">
            <h3 id="box-heading" className="text-3xl font-bold">Zip and the Stage</h3>
            <p>
              Meet Zip the Zebbingo Explorer, our company mascot. Zip is an
              inquisitive child who travels through time, meeting the other
              characters and introducing them to your child.
            </p>
            <p>The Stage contains a rechargeable battery.</p>
            <p>
              The parent app helps you set up and manage your Stage, and gives you
              control over your child&apos;s Spark experience.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
