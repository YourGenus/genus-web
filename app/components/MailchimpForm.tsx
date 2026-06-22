export default function MailchimpForm() {
  return (
    <div id="mc_embed_shell" style={{ width: "100%" }}>
      <div id="mc_embed_signup">
        <form
          action="https://yourgenus.us4.list-manage.com/subscribe/post?u=6bbf0cf6a5e82d78ad39f1769&id=9ee94aa0e3&f_id=000331e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
          noValidate
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div id="mc_embed_signup_scroll">
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "#1f2430",
                marginBottom: "0.5rem",
              }}
            >
              Join the pre-order waitlist
            </h2>
            <p
              style={{
                margin: "0.5rem 0 0 0",
                color: "#5f6a85",
                fontSize: "1rem",
              }}
            >
              Be the first to experience Genus
            </p>
          </div>

          <div
            className="mc-field-group"
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-end",
            }}
          >
            <div style={{ flex: 1 }}>
              <label
                htmlFor="mce-EMAIL"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.95rem",
                  color: "#5f6a85",
                  fontWeight: 500,
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                placeholder="your@email.com"
                defaultValue=""
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  fontSize: "1rem",
                  border: "1px solid #d6dbe7",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  color: "#1f2430",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#4f5f84";
                  e.target.style.outline = "none";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d6dbe7";
                }}
              />
            </div>
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              value="Subscribe"
              style={{
                padding: "0.875rem 2rem",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "#1f2430",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.2s ease, transform 0.1s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#4f5f84";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1f2430";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>

          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{
                display: "none",
                color: "#d32f2f",
                fontSize: "0.95rem",
              }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{
                display: "none",
                color: "#388e3c",
                fontSize: "0.95rem",
              }}
            ></div>
          </div>

          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input
              type="text"
              name="b_6bbf0cf6a5e82d78ad39f1769_9ee94aa0e3"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
        </form>
      </div>
    </div>
  );
}
