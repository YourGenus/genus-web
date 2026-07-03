import StoryPageLayout from "../../components/StoryPageLayout";

export default function IntroducingCitizen() {
  return (
    <StoryPageLayout
      category="Genre"
      title="Introducing CITIZEN"
      intro="Simplicity as a value."
      body={[
        "Experience designed from first principles as the stable foundation of the Genus system.",
        "CITIZEN is crafted for those who value clarity, purpose, and quiet confidence. Simplicity in principle. Every line, surface, and material is considered, refined, and reduced until only what matters remains.",
        "We introduce sustainability by design. A fully aluminium shell for strength, while PCR (Post‑Consumer Recycled) materials in the insert reinforce our commitment to responsible creation.",
        "It's designed to endure, to adapt, and to feel right — today, tomorrow, and long after trends fade.",
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
      ]}
      
    />
  );
}
