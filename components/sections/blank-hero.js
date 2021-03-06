import React from 'react';
import styled from 'styled-components';

import Header from '../header';
import media from '../../helpers/media';

const Root = styled.div`
  height: 367px;
  width: 100%;
  position: relative;
  background-color: rgb(8, 0, 34);
  padding: 0 20px 25px 20px;

  @media ${media.medium} {
    height: 385px;
    padding: 0px;
  }
`;

const BlankHero = () => (
  <>
    <Root>
      <Header />
    </Root>
  </>
);

export default BlankHero;
