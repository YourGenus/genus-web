import MailchimpForm from './components/MailchimpForm';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1rem" }}>
          <h1 style={{ margin: "0.3rem 0 1rem", fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}>
            The next-generation consumer brand
          </h1>

          <p style={{ color: "#3d445a", fontSize: "1.1rem", maxWidth: 700 }}>
            Engineered for the <a href="/index/identity-driven-future">identity-driven future.</a>
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: "3rem", borderTop: "1px solid #e0e0e0", paddingTop: "2rem" }}>
        <MailchimpForm />
      </section>

      

    </main>
  );
}
