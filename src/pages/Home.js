import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Filter from '../components/Filter';

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.theme.colors.bgSecondary};
`;

const Home = () => {
  return (
    <>
      <Header brandname="Brandname" />
      <Main>
        <Filter text1="meat" text2="fruits" text3="veggie" />
      </Main>
    </>
  );
};

export default Home;
