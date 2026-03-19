/* filepath: /workspaces/genus-web/app/app/page.tsx */
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1rem" }}>
          <p style={{ color: "#5f6a85", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>
            Genus — Being Yourself
          </p>
          <h1 style={{ margin: "0.3rem 0 1rem", fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}>
            Genus is the next-generation consumer brand
          </h1>
          <p style={{ color: "#3d445a", fontSize: "1.1rem", maxWidth: 700 }}>
            Creating experiences and products supported by a modern technology platform. A sustainable, identity-driven system and early product experience that builds our brand and evolves toward a direct-to-consumer platform.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 style={{ margin: 0, fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>Philosophy</h2>
        <p style={{ color: "#5f6a85", maxWidth: 760, marginTop: 8 }}>
          Identity is the core. We build meaningful product experiences from first principles with a brand-first platform.
        </p>
      </section>

      <section className="section">
        <h3 style={{ margin: 0 }}>Our Approach</h3>
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gap: "0.75rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <article className="card" style={{ padding: 16 }}>
            <h4>Modern Platform</h4>
            <p style={{ color: "#5f6a85" }}>Built on modern architecture for speed, scale, and reliability.</p>
          </article>
          <article className="card" style={{ padding: 16 }}>
            <h4>Sustainable Design</h4>
            <p style={{ color: "#5f6a85" }}>A system that evolves with our audience and our brand identity.</p>
          </article>
        </div>
      </section>
    </main>
  );
}