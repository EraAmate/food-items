import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';

const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.bgSecondary};
`;

const Home = () => {
  return (
    <>
      <Header brandname="Brandname" />
      <Main></Main>
    </>
  );
};

export default Home;
