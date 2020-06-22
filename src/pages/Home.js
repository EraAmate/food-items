import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import ItemCards from '../components/ItemCards';
import { mockItems } from '../db';
import Filter from '../components/Filter';

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px 20px 40px;
  background: ${(props) => props.theme.colors.bgSecondary};
`;

const Home = () => {
  const [items, setItems] = React.useState(mockItems);
  const [filters, setFilters] = React.useState([
    { isChecked: true, name: 'meat', color: 'red' },
    { isChecked: true, name: 'fruits', color: 'orange' },
    { isChecked: true, name: 'veggie', color: 'green' }
  ]);
  const allItems = mockItems;

  function filterItems(event) {
    const checkboxName = event.target.name;
    const newFilters = filters.map((filter) => {
      if (filter.name === checkboxName) {
        filter.isChecked = !filter.isChecked;
      }
      return filter;
    });

    setFilters(newFilters);

    const activeFilters = filters.map((filter) => {
      if (filter.isChecked) return filter.name;
    });

    const filteredItems = activeFilters.reduce((acc, value) => {
      const filteredItems = allItems.filter(filterBy(value));
      // Possible Improvment, sort so that the last clicked filtered items show up first
      //filteredItems.sort((a, b) => a.category.localeCompare(b.category));
      return [...acc, ...filteredItems];
    }, []);

    setItems(filteredItems);
  }

  const filterBy = (category) => (item) => {
    return item.category === category;
  };

  return (
    <>
      <Header brandname="Brandname" />
      <Main>
        <Filter filters={filters} onChange={filterItems} />
        <ItemCards items={items} />
      </Main>
    </>
  );
};

export default Home;
