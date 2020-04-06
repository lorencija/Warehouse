import React from 'react';
import StyledLink from '../../components/styledLink';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

export default function HomePage() {
  return (
    <>
      <StyledLink link="/products" text="Ikea Products List" />
      <StyledLink link="/products" text="Eoltas Products List" />
    </>
  );
}
