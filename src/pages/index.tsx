import * as React from 'react';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';
import '../styles/typography.css';
import '../styles/layout.css';
import '../styles/thirdparty.css';
import '../styles/spinner.css';
import {
  Harsh,
  headingAccentStyles,
  headingStyles,
  PageStyled,
  ParagraphStyled,
  striked,
} from '../styled';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

type StarredRepoType = {
  name: string;
  url: string;
  description: string | null;
};

const IndexPage = () => {
  const [loading, setLoading] = React.useState(true);
  const [starredRepos, setStarredRepo] = React.useState<StarredRepoType[]>([]);

  const getStarredRepositories = async () => {
    setLoading(true);
    const repositories: StarredRepoType[] = [];

    const response = await fetch(
      'https://api.github.com/users/xdemocle/starred?per_page=100'
    );
    const repos = await response.json();

    repos.forEach((repo: { name: any; html_url: any; description: any }) => {
      repositories.push({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
      });
    });

    setLoading(false);
    setStarredRepo(repositories);
  };

  React.useEffect(() => {
    getStarredRepositories();
  }, []);

  const yearBorn = new Date().getFullYear() - 1982;

  return (
    <>
      <Helmet>
        <title>Rocco Russo | Gatsby personal website</title>
        {/* <link
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
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" /> */}
        <meta name="msapplication-TileColor" content="#663399" />
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
          <OutboundLink
            target="blank"
            href="https://mirror.xyz/0xb0832e423881bc0371352CFDF189a3B61af1b97B"
            title="Visit my Blog"
          >
            My Blog
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://github.com/xdemocle"
            title="Visit my GitHub profile"
          >
            GitHub
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://www.linkedin.com/in/roccorusso"
            title="Visit my LinkedIn profile"
          >
            LinkedIn
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://calendly.com/rocco-russo"
            title="Want to book 30 minute meeting with me free of charge?"
          >
            Calendly
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://www.16personalities.com/profiles/cd1f69fbbefd8"
            title="Visit my ENFJ-A Assertive Protagonist profile"
          >
            ENFJ-A
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://twitter.com/xdemocle"
            title="Visit my Twitter profile"
          >
            Twitter
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://www.facebook.com/xdemocle"
            title="Visit my Facebook profile"
          >
            Facebook
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://instagram.com/roc_71"
            title="Visit my Instagram profile"
          >
            Instagram
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://www.twine.net/roccor"
            title="Twine profile"
          >
            Twine
          </OutboundLink>
        </ParagraphStyled>

        <ParagraphStyled>
          Freelance / <span style={striked}>Amsterdam</span> /{' '}
          <span style={striked}>Barcelona</span> /{' '}
          <span style={striked}>Spain</span> / South Africa /{' '}
          <span style={striked}>Malta</span> /{' '}
          <span style={striked}>Belgium</span> / HTML / CSS / JavaScript / React
          / TypeScript / SPA / <span style={striked}>Drupal</span> / Theming /
          CoffeeScript / SASS / Webpack / LESS / AngularJS / Web3 / Blockchain /
          Crypto / Bitcoin / Ethereum / Templating / Vue.js / Redux / GraphQL /{' '}
          <OutboundLink
            target="blank"
            href="https://medium.com/@amitmojumder/front-end-engineer-differs-from-front-end-developer-68efe13fce7b"
          >
            Front-End Web Developer VS Front-End Web Engineer
          </OutboundLink>{' '}
          / React Native / PhoneGap / Cordova /{' '}
          <Harsh>
            Don't send me e-mail about permanent positions in Holland or UK, or
            I will scratch your car!!! /
          </Harsh>{' '}
          Node.js / Yeoman / cross-browser / Grunt / Gulp / Client-side / Nginx
          / Apache / Comanche / Cheyenne / Sitting Bull / Next.js / Gatsby.js /{' '}
          <span style={striked}>PHP</span> / Bull / Pizza / Pasta / Mafia /
          Mandolino / South Italy /{' '}
          <Harsh>
            Sir, Do You Have OutboundLink Moment to Talk About Jesus Christ? /
          </Harsh>{' '}
          I hate seafood / Minimal Style / I hate pizza made abroad but I cannot
          avoid IT, otherwise I could become extinct / I hate ﬁsh in general / I
          hate who hates / Sometime I hate also myself / Slowpoke / if you read
          that far, means you don't have that much to do :P / Bower / GIT /
          GitHub / GitLab / BitBucket /{' '}
          <span className="striked removed-skill">SVN</span> /{' '}
          <Harsh>I wrote these bullshits at 2am</Harsh> / OOP / AJAX / REST /
          I'm Batman / Redis Cache / MongoDB / I played american football in
          Italy and I hate who thinks rugby is better... /{' '}
          <Harsh>
            <span style={striked}>
              I have OutboundLink motorbike in Holland, brought from Malta and
              bought in Sicily... still have to fix it, i'm worried cause I
              could run away from the shitty weather
            </span>{' '}
          </Harsh>
          / <span>{yearBorn}</span> /{' '}
          <span style={striked}>Sort of Single</span> / Electronic / Power Metal
          / Punk Rock / Blues / Enduro / #endurolife / Supermotard / Supermoto /
          No limits / No excuses / Father.
          <p>
            <OutboundLink
              target="blank"
              href="mailto:im@rocco.me?subject=Inquiry from website"
              className="hire-me"
            >
              Want to drop me an e-mail?
            </OutboundLink>
            <br />
            <OutboundLink
              target="blank"
              href="https://calendly.com/rocco-russo"
              className="hire-me"
            >
              Want to book 30 minute meeting with me free of charge?
            </OutboundLink>
          </p>
        </ParagraphStyled>

        <ParagraphStyled>
          <h3>My latest 100 starred repositories on Github:</h3>

          {loading && (
            <div className="lds-heart">
              <div></div>
            </div>
          )}

          <div style={{ lineHeight: '2rem' }}>
            {starredRepos.map((repo, ix) => (
              <>
                <OutboundLink
                  href={repo.url}
                  target="_blank"
                  title={repo.description || ''}
                  key={`${repo.name}-${ix}`}
                >
                  {repo.name}
                </OutboundLink>{' '}
                {ix + 1 !== starredRepos.length && '/ '}
              </>
            ))}
          </div>
        </ParagraphStyled>

        <ParagraphStyled>
          Hosted on{' '}
          <OutboundLink
            target="blank"
            href="https://cloudflare.com"
            title="Cloudflare"
          >
            Cloudflare
          </OutboundLink>{' '}
          | Made by{' '}
          <OutboundLink target="blank" href="http://theweb3.ninja/">
            The Web3 Ninja
          </OutboundLink>
        </ParagraphStyled>
      </PageStyled>
      {/* <div id="popup-calendly"></div> */}
    </>
  );
};

export default IndexPage;
