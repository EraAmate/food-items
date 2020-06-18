import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 150px;
  width: 100%;
  align-items: center;
  padding: 20px 30px 20px 30px;
  border: none;
  background: ${(props) => props.theme.colors.bgPrimary};
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.textPrimary};
`;

function Header({ brandname }) {
  return (
    <HeaderContainer>
      <Title>{brandname}</Title>
    </HeaderContainer>
  );
}
export default Header;

Header.propTypes = {
  brandname: PropTypes.string
};
