import { OutboundLink } from 'gatsby-plugin-google-gtag';
import * as React from 'react';
import { ParagraphCopyrightStyled } from '../styled';

export const Copyright = () => {
  return (
    <ParagraphCopyrightStyled>
      Hosted on{' '}
      <OutboundLink target="blank" href="https://cloudflare.com" title="Cloudflare">
        Cloudflare
      </OutboundLink>{' '}
      | Made by{' '}
      <OutboundLink target="blank" href="http://theweb3.ninja/">
        The Web3 Ninja
      </OutboundLink>
    </ParagraphCopyrightStyled>
  );
};
