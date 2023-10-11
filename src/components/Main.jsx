export default function Main() {
  return (
    <main>
      <h1 className="title-name">Christina</h1>
      <h2 className="subtitle">Frontend Developer</h2>
      <p className="author-link">
        <a className="website-link" href="#">
          christina.website
        </a>
      </p>
      <section className="profile-details-section">
        <a className="email-btn" href="#">
          <span className="envelope-icon">
            <img src="./assets/mail-icon.png" />
          </span>
          Email
        </a>
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and user-friendly. I try to keep up with frontend developer
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p className="interests">
          Happy music listener. Reader. Cookie monster. Travel geek. Dog
          training ninja. Tea fanatic.
        </p>
      </section>
    </main>
  );
}
