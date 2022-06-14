import * as React from 'react';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';
import { PopupButton } from 'react-calendly';
import useBreakpoint from 'use-breakpoint';
import '../styles/typography.css';
import '../styles/layout.css';
import '../styles/thirdparty.css';
import { BREAKPOINTS } from '../constants';

// styles
const pageStyles = {
  minHeight: '100vh',
  maxWidth: '80rem',
  padding: '5rem',
  margin: '0',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  textAlign: 'right',
};

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
  color: '#ffffff',
  fontSize: '2.3rem',
  lineHeight: '3rem',
};

const paragraphStyles = {
  marginTop: '3rem',
  marginBottom: '5rem',
  marginLeft: '12rem',
  lineHeight: '1.7rem',
};

const paragraphStylesMobile = {
  marginBottom: '5rem',
  marginLeft: '0',
  lineHeight: '1.7rem',
  textAlign: 'center',
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
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    'desktop'
  );

  return (
    <>
      <Helmet title="Home Page" defer={false}>
        <title>Home page</title>
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

      <main
        style={
          pageStyles as React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLHeadingElement>,
            HTMLHeadingElement
          >
        }
      >
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

        <div>
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
          {/* <a
            href="https://calendly.com/rocco-russo"
            title="Want to book 30 minute meeting with me free of charge?"
          >
            Calendly
          </a>{' '} */}
          <PopupButton
            url="https://calendly.com/rocco-russo"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById('popup-calendly')}
            text="Calendly"
            className="calendly-button-link"
          />{' '}
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
        </div>

        <div
          style={
            breakpoint === 'mobile' || breakpoint === 'tablet'
              ? paragraphStylesMobile
              : paragraphStyles
          }
        >
          Freelance / <span style={striked}>Amsterdam</span> /{' '}
          <span style={striked}>Barcelona</span> / Spain /{' '}
          <span style={striked}>Malta</span> /{' '}
          <span style={striked}>Belgium</span> / HTML / CSS / JavaScript / SPA /{' '}
          <span className="striked removed-skill">Drupal</span> / Theming /{' '}
          CoffeeScript / SASS / Webpack / LESS / AngularJS / Templating / React
          / Vue.js / Redux / GraphQL /{' '}
          <a href="https://medium.com/@amitmojumder/front-end-engineer-differs-from-front-end-developer-68efe13fce7b">
            Front-End Web Developer VS Front-End Web Engineer
          </a>{' '}
          / PhoneGap / Cordova /{' '}
          <span className="harsh">
            Don't send me e-mail about permanent positions in Holland or UK, or
            I will scratch your car!!! /
          </span>{' '}
          Node.js / Yeoman / cross-browser / Grunt / Gulp / Client-side / Nginx
          / Apache / Comanche / Cheyenne / Sitting /{' '}
          <span className="striked removed-skill">PHP</span> / Bull / Pizza /
          Pasta / Mafia / Mandolino / South Italy /{' '}
          <span className="harsh">
            Sir, Do You Have a Moment to Talk About Jesus Christ? /
          </span>{' '}
          I hate seafood / Minimal Style / I hate pizza made abroad but I cannot
          avoid IT, otherwise I could become extinct / I hate ﬁsh in general / I
          hate who hates / Sometime I hate also myself / Slowpoke / if you read
          that far, means you don't have that much to do :P / Bower / GIT /{' '}
          <span className="striked removed-skill">SVN</span>/{' '}
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
            <PopupButton
              url="https://calendly.com/rocco-russo"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById('popup-calendly')}
              text="Want to book 30 minute meeting with me free of charge?"
              className="calendly-button-link"
            />{' '}
          </p>
        </div>

        <p>
          Hosted on{' '}
          <a href="https://github.com" title="GitHub">
            GitHub
          </a>{' '}
          | Made with{' '}
          <a
            href="https://www.google.com/search?q=zen+mind+full"
            title="Search on Google.. I don't know what it does mean :D"
          >
            Zen Mind Full
          </a>
        </p>
      </main>
      <div id="popup-calendly"></div>
    </>
  );
};

export default IndexPage;
