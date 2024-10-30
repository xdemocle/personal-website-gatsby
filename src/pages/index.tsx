import { OutboundLink } from 'gatsby-plugin-google-gtag';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';
import Copyright from '../components/copyright';
import {
  Harsh,
  headingAccentStyles,
  headingStyles,
  PageStyled,
  ParagraphStarredStyled,
  ParagraphStyled,
  striked,
} from '../styled';
import '../styles/layout.css';
import '../styles/spinner.css';
import '../styles/thirdparty.css';
import '../styles/typography.css';

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

    const response = await fetch('https://api.github.com/users/xdemocle/starred?per_page=25');
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
        <title>Rocco Russo | Personal website</title>
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#663399" />
        <meta name="theme-color" content="#663399" />
      </Helmet>

      <PageStyled>
        <h1
          style={headingStyles as React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>}
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
          <OutboundLink target="blank" href="https://theweb3.ninja/" title="Visit my company website">
            The Web3 Ninja
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://mirror.xyz/0xb0832e423881bc0371352CFDF189a3B61af1b97B"
            title="Visit my Blog"
          >
            My Blog
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink target="blank" href="https://github.com/xdemocle" title="Visit my GitHub profile">
            GitHub
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink target="blank" href="https://www.linkedin.com/in/roccorusso" title="Visit my LinkedIn profile">
            LinkedIn
          </OutboundLink>{' '}
          /{' '}
          <OutboundLink
            target="blank"
            href="https://calendar.app.google/i74EQDYJh1BopwMz9"
            title="Want to book 30 minute meeting with me free of charge?"
          >
            Book a Meeting with Me
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
          <OutboundLink target="blank" href="https://x.com/xdemocle" title="Visit my X.com profile">
            X.com
          </OutboundLink>{' '}
        </ParagraphStyled>

        <ParagraphStyled>
          Freelance / Italian / Digital Nomad /<span style={striked}>Amsterdam</span> /{' '}
          <span style={striked}>Barcelona</span> / <span style={striked}>Spain</span> /{' '}
          <span style={striked}>South Africa</span> / <span style={striked}>Malta</span> /{' '}
          <span style={striked}>Belgium</span> / HTML / CSS / JavaScript / React / TypeScript / SPA /{' '}
          <span style={striked}>Drupal</span> / Theming / CoffeeScript / SASS / Webpack / LESS / AngularJS / Web3 /
          Blockchain / Crypto / Bitcoin / Ethereum / Templating / Vue.js / Redux / GraphQL /{' '}
          <OutboundLink
            target="blank"
            href="https://medium.com/@amitmojumder/front-end-engineer-differs-from-front-end-developer-68efe13fce7b"
          >
            Front-End Web Developer VS Front-End Web Engineer
          </OutboundLink>{' '}
          / React Native / PhoneGap / Cordova /{' '}
          <Harsh>
            Don't send me e-mail about permanent positions in Holland or UK, or I will scratch your car!!! /
          </Harsh>{' '}
          Node.js / Yeoman / cross-browser / Grunt / Gulp / Client-side / Nginx / Apache / Comanche / Cheyenne / Sitting
          Bull / Next.js / Gatsby.js / <span style={striked}>PHP</span> / Bull / Pizza / Pasta / Mafia / Mandolino /
          South Italy / <Harsh>Sir, Do You Have OutboundLink Moment to Talk About Jesus Christ? /</Harsh> I hate seafood
          / Minimal Style / I hate pizza made abroad but I cannot avoid IT, otherwise I could become extinct / I hate
          ﬁsh in general / I hate who hates / Sometime I hate also myself / Slowpoke / if you read that far, means you
          don't have that much to do :P / Bower / GIT / GitHub / GitLab / BitBucket /{' '}
          <span className="striked removed-skill">SVN</span> / <Harsh>I wrote these bullshits at 2am</Harsh> / OOP /
          AJAX / REST / I'm Batman / Redis Cache / MongoDB / I played american football in Italy and I hate who thinks
          rugby is better... /{' '}
          <Harsh>
            <span style={striked}>
              I have OutboundLink motorbike in Holland, brought from Malta and bought in Sicily... still have to fix it,
              i'm worried cause I could run away from the shitty weather
            </span>{' '}
          </Harsh>
          / <span>{yearBorn}</span> / <span style={striked}>Sort of Single</span> / Electronic / Power Metal / Punk Rock
          / Blues / Enduro / #endurolife / Supermotard / Supermoto / No limits / No excuses / Father.
          <p>
            <OutboundLink target="blank" href="mailto:im@rocco.me?subject=Inquiry from website" className="hire-me">
              Want to drop me an e-mail?
            </OutboundLink>
            <br />
            <OutboundLink target="blank" href="https://calendar.app.google/i74EQDYJh1BopwMz9" className="hire-me">
              Want to book 30 minute meeting with me free of charge?
            </OutboundLink>
          </p>
        </ParagraphStyled>

        <ParagraphStarredStyled>
          <h3>My latest 25 starred repositories on Github:</h3>

          {loading && (
            <div className="lds-heart">
              <div></div>
            </div>
          )}

          <div style={{ lineHeight: '2rem' }}>
            {starredRepos.map((repo, ix) => (
              <>
                <OutboundLink href={repo.url} target="_blank" title={repo.description || ''} key={`${repo.name}-${ix}`}>
                  {repo.name}
                </OutboundLink>{' '}
                {ix + 1 !== starredRepos.length && '/ '}
              </>
            ))}
          </div>
        </ParagraphStarredStyled>

        <Copyright />
      </PageStyled>
    </>
  );
};

export default IndexPage;
