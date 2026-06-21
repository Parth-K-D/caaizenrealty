import { Reveal } from "@/components/reveal";

type Founder = {
  name: string;
  role: string;
  image: string;
  initials: string;
};

// NOTE: Placeholder names/bios — replace with real founder details.
const founders: Founder[] = [
  {
    name: "Kailash Dubal",
    role: "Founder & Principal Visionary",
    image: "/kailash.jpeg",
    initials: "KD",
  },
  {
    name: "Suresh G",
    role: "Partner & Chief Engineer",
    image: "/suresh.jpeg",
    initials: "SG",
  },
  {
    name: "Vadiraj",
    role: "Senior Advisor & Sales Head",
    image: "/vadiraj.jpeg",
    initials: "V",
  },
    {
    name: "Gnanesh",
    role: "Chief Architect",
    image: "/gnanesh.jpeg",
    initials: "G",
  }
];

export function TeamGrid() {
  return (
    <div className="grid md:grid-cols-4 gap-10">
      {founders.map((f, i) => (
        <Reveal key={f.name} delay={i * 0.1}>
          <article className="group">
            <div className="aspect-[4/5] w-full bg-olive/10 border border-olive/15 flex items-center justify-center overflow-hidden">
              <span className="font-display text-7xl text-olive/40 italic">
                {f.image ? (
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  f.initials
                )}
              </span>
            </div>
            <p className="font-eyebrow text-accent mt-6 text-[0.65rem]">{f.role}</p>
            <h3 className="font-display text-3xl mt-2 text-olive-deep">{f.name}</h3>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
