import type { ReactNode } from "react";

type StoryPageLayoutProps = {
  category?: string;
  title: string;
  intro?: ReactNode;
  body: ReactNode[];
};

const styles = {
  page: {
    width: "min(1100px, 94vw)",
    margin: "0 auto",
    padding: "1rem 0 4rem",
  } as const,
  hero: {
    width: "100%",
  } as const,
  content: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "0 1rem",
  } as const,
  category: {
    margin: 0,
    color: "#6b7280",
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 700,
  } as const,
  title: {
    margin: "0.5rem 0 0.4rem",
    fontSize: "clamp(2rem, 7vw, 3.8rem)",
    lineHeight: 1.08,
  } as const,
  intro: {
    margin: "0 0 3rem",
    maxWidth: 760,
    fontSize: "1.05rem",
    lineHeight: 1.6,
  } as const,
  body: {
    display: "grid",
    gap: "1rem",
  } as const,
  bodyCopy: {
    maxWidth: 760,
    fontSize: "1.05rem",
    lineHeight: 1.6,
  } as const,
};

export default function StoryPageLayout({
  category,
  title,
  intro,
  body,
}: StoryPageLayoutProps) {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.content}>
          {category ? <p style={styles.category}>{category}</p> : null}
          <h1 style={styles.title}>{title}</h1>
          {intro ? <p style={styles.intro}>{intro}</p> : null}
          <div style={styles.body}>
            {body.map((block, index) => (
              <div key={index} style={styles.bodyCopy}>
                {block}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
