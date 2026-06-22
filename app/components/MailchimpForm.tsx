export default function MailchimpForm() {
  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://yourgenus.us4.list-manage.com/subscribe/post?u=6bbf0cf6a5e82d78ad39f1769&id=9ee94aa0e3&f_id=000331e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Join the pre-order waitinglist</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                defaultValue=""
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
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
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
