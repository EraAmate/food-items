import React from 'react';
import ItemCard from './ItemCard';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 2rem;
`;
function ItemCards({ items }) {
  return (
    <CardsWrapper>
      {items.map((item, i) => {
        let color = '';
        if (item.category === 'meat') {
          color = 'red';
        } else if (item.category === 'fruits') {
          color = 'orange';
        } else if (item.category === 'veggie') {
          color = 'green';
        }
        return (
          <ItemCard
            src={item.src}
            key={item.key}
            name={item.name}
            category={item.category}
            article={item.article}
            info={item.info}
            color={color}
          />
        );
      })}
    </CardsWrapper>
  );
}
export default ItemCards;

ItemCards.propTypes = {
  items: PropTypes.array
};
