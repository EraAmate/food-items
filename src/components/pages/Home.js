import React from 'react';
import styled from '@emotion/styled';

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.bgPrimary};
`;

const Home = () => {
  return <Main></Main>;
};

export default Home;
