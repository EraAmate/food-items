import React from 'react';
import ItemCard from './ItemCard';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;
function ItemCards({ items }) {
  return (
    <CardsWrapper>
      {items.map((item) => {
        return (
          <ItemCard
            src={item.src}
            key={item.key}
            name={item.name}
            category={item.category}
            article={item.article}
            info={item.info}
          />
        );
      })}
    </CardsWrapper>
  );
}
export default ItemCards;

ItemCards.propTypes = {
  items: PropTypes.any
};
