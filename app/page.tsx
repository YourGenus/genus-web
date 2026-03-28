/* filepath: /workspaces/genus-web/app/app/page.tsx */
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1rem" }}>
          <h1 style={{ margin: "0.3rem 0 1rem", fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}>
            The next-generation consumer brand
          </h1>

          <p style={{ color: "#3d445a", fontSize: "1.1rem", maxWidth: 700 }}>
            Creating products and experiences supported by a modern technology platform. Sustainable by design, building an identity‑driven system and an early product foundation that shapes who we are, enabling the brand to grow naturally while evolving toward a direct‑to‑consumer platform.
          </p>
        </div>
      </section>

      <section
        style={{
          marginTop: "1.5rem",
          background: "linear-gradient(90deg, #f7f7f7 0%, #e9e8e8 45%, #e1e0e0 100%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <a
          href="/introducing-citizen"
          style={{
            display: "block",
            textDecoration: "none",
            color: "inherit",
            minHeight: 180,
            position: "relative",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 980, margin: "0 auto", minHeight: 180 }}>
            <h2 style={{ margin: 0, color: "white", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", lineHeight: 1.1, position: "absolute", right: 16, bottom: 16 }}>Introducing CITIZEN</h2>
          </div>
        </a>
      </section>

      <section className="section">
        <h2 style={{ margin: 0, fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
          Sustainability by design
        </h2>

        <p style={{ color: "#5f6a85", maxWidth: 760, marginTop: 8 }}>
          We build products and systems that reduce waste from the start. Explore our open‑source platform shaping the future of responsible products.
        </p>

        <a
          href="https://packaging-dev.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            fontSize: "1rem",
            fontWeight: 500,
            color: "#000",
            textDecoration: "underline",
          }}
        >
          Find your Genus →
        </a>
      </section>

      
    </main>
  );
}