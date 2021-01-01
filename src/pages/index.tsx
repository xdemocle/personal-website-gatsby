import * as React from "react";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import "../styles/typography.css";
import "../styles/layout.css";

// styles
const pageStyles = {
  minHeight: "100vh",
  maxWidth: "80rem",
  padding: "5rem",
  margin: "0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "right",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontFamily: "AlternateGotNo3D, -apple-system, Roboto, sans-serif, serif",
  textTransform: "uppercase",
  fontSize: "6rem",
  fontWeight: 100,
  lineHeight: "5rem",
};
const headingAccentStyles = {
  // color: "#663399",
  fontSize: "2.3rem",
  lineHeight: "3rem",
};
const paragraphStyles = {
  marginBottom: "5rem",
  marginLeft: "12rem",
  lineHeight: "1.7rem",
};
const paragraphStylesMobile = {
  marginBottom: "5rem",
  marginLeft: "0",
  lineHeight: "1.7rem",
  textAlign: "center",
};
const striked = {
  textDecoration: "line-through",
};
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// };
// const listStyles = {
//   marginBottom: 96,
//   paddingLeft: 0,
// };
// const listItemStyles = {
//   fontWeight: "300",
//   fontSize: "24px",
//   maxWidth: "560px",
// };

// const linkStyle = {
//   color: "#8954A8",
//   fontWeight: "bold",
//   fontSize: "16px",
//   verticalAlign: "5%",
// };

// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// };

// const descriptionStyle = {
//   color: "#232129",
//   fontSize: "14px",
// };

// const docLink = {
//   text: "Documentation",
//   url: "https://www.gatsbyjs.com/docs/",
//   color: "#8954A8",
// };

// markup
const IndexPage = () => {
  const breakpoints = useBreakpoint();

  return (
    <main style={pageStyles}>
      <Helmet title="Home Page" defer={false} />
      <h1 style={headingStyles}>
        Rocco Russo
        <br />
        <div style={headingAccentStyles}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-End Web Engineer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
            options={{
              // strings: ["Hello", "World"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* <span style={headingAccentStyles}>Front-End Web Engineer</span> */}
      </h1>
      <p>
        <a href="https://github.com/xdemocle" title="Visit my GitHub profile">
          GitHub
        </a>{" "}
        /{" "}
        <a
          href="https://www.linkedin.com/in/roccorusso"
          title="Visit my LinkedIn profile"
        >
          LinkedIn
        </a>{" "}
        /{" "}
        <a
          href="https://www.16personalities.com/profiles/cd1f69fbbefd8"
          title="Visit my ENFJ-A Assertive Protagonist profile"
        >
          ENFJ-A
        </a>{" "}
        /{" "}
        <a
          href="https://stackoverflow.com/story/xdemocle"
          title="Visit my StackOverflow story"
        >
          StackOverflow
        </a>{" "}
        /{" "}
        <a href="https://twitter.com/xdemocle" title="Visit my Twitter profile">
          Twitter
        </a>{" "}
        /{" "}
        <a
          href="skype:democle?chat"
          title="Chat with me on Skype"
          class="skype"
        >
          Skype
        </a>
      </p>

      <p
        style={
          breakpoints.xs || breakpoints.sm
            ? paragraphStylesMobile
            : paragraphStyles
        }
      >
        Freelance / <span style={striked}>Amsterdam</span> /{" "}
        <span style={striked}>Barcelona</span> / Spain /{" "}
        <span style={striked}>Malta</span> /{" "}
        <span style={striked}>Belgium</span> / HTML / CSS / JavaScript / SPA /{" "}
        <span class="striked removed-skill">Drupal</span> / Theming /{" "}
        CoffeeScript / SASS / Webpack / LESS / AngularJS / Templating / React /
        Vue.js / Redux / GraphQL /{" "}
        <a href="https://medium.com/@amitmojumder/front-end-engineer-differs-from-front-end-developer-68efe13fce7b">
          Front-End Web Developer VS Front-End Web Engineer
        </a>{" "}
        / PhoneGap / Cordova /{" "}
        <span class="harsh">
          Don't send me e-mail about permanent positions in Holland or UK, or I
          will scratch your car!!! /
        </span>{" "}
        Node.js / Yeoman / cross-browser / Grunt / Gulp / Client-side / Nginx /
        Apache / Comanche / Cheyenne / Sitting /{" "}
        <span class="striked removed-skill">PHP</span> / Bull / Pizza / Pasta /
        Mafia / Mandolino / South Italy /{" "}
        <span class="harsh">
          Sir, Do You Have a Moment to Talk About Jesus Christ? /
        </span>{" "}
        I hate seafood / Minimal Style / I hate pizza made abroad but I cannot
        avoid IT, otherwise I could become extinct / I hate ﬁsh in general / I
        hate who hates / Sometime I hate also myself / Slowpoke / if you read
        that far, means you don't have that much to do :P / Bower / GIT /{" "}
        <span class="striked removed-skill">SVN</span>/{" "}
        <span class="harsh">I wrote these bullshits at 2am /</span> OOP / AJAX /
        REST / I'm Batman / Redis Cache / MongoDB / I played american football
        in Italy and I hate who thinks rugby is better... /{" "}
        <span class="harsh">
          <span style={striked}>
            I have a motorbike in Holland, brought from Malta and bought in
            Sicily... still have to fix it, i'm worried cause I could run away
            from the shitty weather
          </span>{" "}
          /
        </span>
        <span id="yearsOld">39</span> /{" "}
        <span style={striked}>Sort of Single</span> / Electronic / Power Metal /
        Punk Rock / Blues / Enduro / #endurolife / Supermotard / Supermoto / No
        limits / No excuses /{" "}
        <a
          href="mailto:im@rocco.me?subject=Inquiry from website"
          class="hire-me"
        >
          Want to hire me?
        </a>
      </p>
      <p>
        Hosted on{" "}
        <a href="https://github.com" title="GitHub">
          GitHub
        </a>{" "}
        | Made with{" "}
        <a
          href="https://www.google.com/search?q=zen+mind+full"
          title="Search on Google.. I don't know what it does mean :D"
        >
          Zen Mind Full
        </a>
      </p>
      {/* <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p> */}
      {/* <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map((link) => (
          <li style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      /> */}
    </main>
  );
};

export default IndexPage;
