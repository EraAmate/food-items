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
    { isChecked: false, name: 'meat', color: 'red' },
    { isChecked: false, name: 'fruits', color: 'orange' },
    { isChecked: false, name: 'veggie', color: 'green' }
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

    const activeFilters = filters.reduce((acc, filter) => {
      if (filter.isChecked) {
        acc.push(filter.name);
      }
      return acc;
    }, []);

    const filteredItems = activeFilters.reduce((acc, value) => {
      const filteredItems = allItems.filter(filterBy(value));
      return [...acc, ...filteredItems];
    }, []);

    setItems(filteredItems);

    if (activeFilters.length === 0) {
      setItems(allItems);
    }
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
