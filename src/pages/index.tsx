import * as React from 'react';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import '../styles/typography.css';
import '../styles/layout.css';
import '../styles/thirdparty.css';

// styled
const PageStyled = styled.main`
  min-height: 100vh;
  max-width: 80rem;
  padding: 1rem;
  margin: 0;
  font-family: 'Roboto', sans-serif, serif;
  text-align: 'right';
  text-align: center;

  @media (min-width: 1024px) {
    padding: 5rem;
    text-align: right;
  }
`;

const ParagraphStyled = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.7rem;
  text-align: center;

  @media (min-width: 1024px) {
    margin-left: 12rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    text-align: right;
  }
`;

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontFamily: 'AlternateGotNo3D, -apple-system, Roboto, sans-serif, serif',
  textTransform: 'uppercase',
  fontSize: '6rem',
  fontWeight: 100,
  lineHeight: '5rem',
};

const headingAccentStyles = {
  fontSize: '2.3rem',
  lineHeight: '3rem',
};

const striked = {
  textDecoration: 'line-through',
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

const IndexPage = () => {
  return (
    <>
      <Helmet title="Rocco Russo | Gatsby personal website" defer={false}>
        <title>Rocco Russo | Gatsby personal website</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#663399" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#663399" />
      </Helmet>

      <PageStyled>
        <h1
          style={
            headingStyles as React.DetailedHTMLProps<
              React.HTMLAttributes<HTMLHeadingElement>,
              HTMLHeadingElement
            >
          }
        >
          Rocco Russo
          <br />
          <div style={headingAccentStyles}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Front-End Web Engineer')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
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
        </h1>

        <ParagraphStyled>
          <a href="https://github.com/xdemocle" title="Visit my GitHub profile">
            GitHub
          </a>{' '}
          /{' '}
          <a
            href="https://www.linkedin.com/in/roccorusso"
            title="Visit my LinkedIn profile"
          >
            LinkedIn
          </a>{' '}
          /{' '}
          <a
            href="https://calendly.com/rocco-russo"
            title="Want to book 30 minute meeting with me free of charge?"
          >
            Calendly
          </a>{' '}
          /{' '}
          <a
            href="https://www.16personalities.com/profiles/cd1f69fbbefd8"
            title="Visit my ENFJ-A Assertive Protagonist profile"
          >
            ENFJ-A
          </a>{' '}
          /{' '}
          <a
            href="https://twitter.com/xdemocle"
            title="Visit my Twitter profile"
          >
            Twitter
          </a>{' '}
          /{' '}
          <a
            href="skype:democle?chat"
            title="Chat with me on Skype"
            className="skype"
          >
            Skype
          </a>{' '}
          /{' '}
          <a href="https://www.twine.net/roccor" title="Twine profile">
            Twine
          </a>
        </ParagraphStyled>

        <ParagraphStyled>
          Freelance / <span style={striked}>Amsterdam</span> /{' '}
          <span style={striked}>Barcelona</span> /{' '}
          <span style={striked}>Spain</span> / South Africa /{' '}
          <span style={striked}>Malta</span> /{' '}
          <span style={striked}>Belgium</span> / HTML / CSS / JavaScript / React
          / SPA / <span className="striked removed-skill">Drupal</span> /
          Theming / CoffeeScript / SASS / Webpack / LESS / AngularJS / Web3 /
          Blockchain / Crypto / Bitcoin / Ethereum / Templating / Vue.js / Redux
          / GraphQL /{' '}
          <a href="https://medium.com/@amitmojumder/front-end-engineer-differs-from-front-end-developer-68efe13fce7b">
            Front-End Web Developer VS Front-End Web Engineer
          </a>{' '}
          / React Native / PhoneGap / Cordova /{' '}
          <span className="harsh">
            Don't send me e-mail about permanent positions in Holland or UK, or
            I will scratch your car!!! /
          </span>{' '}
          Node.js / Yeoman / cross-browser / Grunt / Gulp / Client-side / Nginx
          / Apache / Comanche / Cheyenne / Sitting / Next.js / Gatsby.js /{' '}
          <span className="striked removed-skill">PHP</span> / Bull / Pizza /
          Pasta / Mafia / Mandolino / South Italy /{' '}
          <span className="harsh">
            Sir, Do You Have a Moment to Talk About Jesus Christ? /
          </span>{' '}
          I hate seafood / Minimal Style / I hate pizza made abroad but I cannot
          avoid IT, otherwise I could become extinct / I hate ﬁsh in general / I
          hate who hates / Sometime I hate also myself / Slowpoke / if you read
          that far, means you don't have that much to do :P / Bower / GIT /
          GitHub / GitLab / BitBucket /{' '}
          <span className="striked removed-skill">SVN</span> /{' '}
          <span className="harsh">I wrote these bullshits at 2am /</span> OOP /
          AJAX / REST / I'm Batman / Redis Cache / MongoDB / I played american
          football in Italy and I hate who thinks rugby is better... /{' '}
          <span className="harsh">
            <span style={striked}>
              I have a motorbike in Holland, brought from Malta and bought in
              Sicily... still have to fix it, i'm worried cause I could run away
              from the shitty weather
            </span>{' '}
            /
          </span>
          <span id="yearsOld">39</span> /{' '}
          <span style={striked}>Sort of Single</span> / Electronic / Power Metal
          / Punk Rock / Blues / Enduro / #endurolife / Supermotard / Supermoto /
          No limits / No excuses.
          <p>
            <a
              href="mailto:im@rocco.me?subject=Inquiry from website"
              className="hire-me"
            >
              Want to drop me an e-mail?
            </a>
            <br />
            <a href="https://calendly.com/rocco-russo" className="hire-me">
              Want to book 30 minute meeting with me free of charge?
            </a>
          </p>
        </ParagraphStyled>

        <ParagraphStyled>
          Hosted on{' '}
          <a href="https://cloudflare.com" title="Cloudflare">
            Cloudflare
          </a>{' '}
          | Made with{' '}
          <a
            href="https://www.google.com/search?q=full+zen+mind"
            title="Search on Google.. I don't know what it does mean :D"
          >
            Full Zen Mind
          </a>
        </ParagraphStyled>
      </PageStyled>
      <div id="popup-calendly"></div>
    </>
  );
};

export default IndexPage;
