import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Category = styled.p`
  align-self: center;
`;
const CardBody = styled.section`
  padding: 0 8px 8px 8px;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;
const H2 = styled.h2`
  padding: 0;
`;
const Img = styled.img`
  background: black;
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.basic};
`;

function ItemCard({ name, category, article, info, src }) {
  return (
    <>
      <CardContainer>
        <Img src={src} />
        <CardBody>
          <Section>
            <H2>{name}</H2>
            <Category>{category}</Category>
          </Section>
          <div>{article}</div>
          <details>
            <summary>More Info</summary>
            <p>{info}</p>
          </details>
        </CardBody>
      </CardContainer>
    </>
  );
}
export default ItemCard;

ItemCard.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  article: PropTypes.string,
  info: PropTypes.string,
  src: PropTypes.string
};
