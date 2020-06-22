import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

const HeaderContainer = styled.header`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px 40px 20px 40px;
  border: none;
  background: ${(props) => props.theme.colors.bgPrimary};
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.textPrimary};
  text-shadow: 0.8px 0.8px;
`;

let navs = [
  { name: 'Menu Item 1', link: '/menu1' },
  { name: 'Menu Item 2', link: '/menu1' },
  { name: 'Menu Item 3', link: '/menu1' },
  { name: 'Menu Item 4', link: '/menu1' },
  { name: 'Menu Item 5', link: '/menu1' },
  { name: 'Menu Item 6', link: '/menu1' }
];

function Header({ brandname }) {
  return (
    <HeaderContainer>
      <Title>{brandname}</Title>
      <Navigation navItems={navs} />
    </HeaderContainer>
  );
}
export default Header;

Header.propTypes = {
  brandname: PropTypes.string
};
