
import {
  Sparkles,
  MessageSquare,
  AudioLines,
  FileText,
  BookOpen,
  ArrowRight
} from "lucide-react";

const tools = [
  {
    name: "AI Chat",
    description: "Ask questions, explore ideas and get clear answers.",
    icon: MessageSquare
  },
  {
    name: "English Practice",
    description: "Improve your English with guided conversations.",
    icon: AudioLines
  },
  {
    name: "Resume Builder",
    description: "Create professional resumes with AI assistance.",
    icon: FileText
  },
  {
    name: "PDF Assistant",
    description: "Summarise documents and understand their content.",
    icon: BookOpen
  }
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#">
          <Sparkles /> nuvara
        </a>
        <a className="nav-link" href="#tools">
          Explore tools <ArrowRight size={16} />
        </a>
      </nav>

      <section className="hero">
        <div className="eyebrow">
          ✦ YOUR SPACE TO THINK BIGGER
        </div>

        <h1>
          Make room for
          <br />
          <span>what's possible.</span>
        </h1>

        <p>
          A thoughtful collection of AI tools to help
          you learn, create and get things done —
          all in one place.
        </p>

        <a className="primary-button" href="#tools">
          Explore Nuvara <ArrowRight size={17} />
        </a>

        <div className="glow">
          <Sparkles size={55} />
        </div>
      </section>

      <section className="tools" id="tools">
        <div className="eyebrow">THE NUVARA TOOLKIT</div>
        <h2>Good ideas deserve <span>great tools.</span></h2>

        <div className="tool-grid">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <article className="tool-card" key={tool.name}>
                <div className="tool-icon">
                  <Icon size={24} />
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <span className="coming-soon">
                  Coming soon →
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <footer>
        <a className="logo" href="#">
          <Sparkles /> nuvara
        </a>
        <p>Thoughtfully building what's next.</p>
        <small>© 2026 Nuvara</small>
      </footer>
    </main>
  );
}
