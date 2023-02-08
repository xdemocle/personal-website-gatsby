import styled from 'styled-components';

// styled
export const PageStyled = styled.main`
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

export const ParagraphStyled = styled.div`
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
export const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontFamily: 'AlternateGotNo3D, -apple-system, Roboto, sans-serif, serif',
  textTransform: 'uppercase',
  fontSize: '6rem',
  fontWeight: 100,
  lineHeight: '5rem',
};

export const headingAccentStyles = {
  fontSize: '2.3rem',
  lineHeight: '3rem',
};

export const striked = {
  textDecoration: 'line-through',
};

export const Harsh  = styled.span`
  font-style: italic;
`