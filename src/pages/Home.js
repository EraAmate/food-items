import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import { mockItems } from '../db';
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
  const [items, setItems] = React.useState(mockItems);
  const allItems = mockItems;

  function filterItems(event) {
    const inputName = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked === true) {
      let filteredItems = items.filter(function (item) {
        if (item.category === inputName) {
          return item;
        }
      });
      setItems(filteredItems);
    } else {
      setItems(allItems);
    }
  }
  return (
    <>
      <Header brandname="Brandname" />
      <Main>
        <Filter
          text1="meat"
          text2="fruits"
          text3="veggie"
          onClick={filterItems}
        />
      </Main>
    </>
  );
};

export default Home;
