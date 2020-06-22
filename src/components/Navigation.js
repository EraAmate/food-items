import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const NavList = styled.ul`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  list-style: none;
  text-decoration: none;
  align-self: innerhit;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const Link = styled.a`
  font-size: 0.9rem;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.textPrimary};
  :active {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.basic};
  }
`;

function Navigation({ navItems = [] }) {
  return (
    <nav>
      <NavList>
        {navItems.map((nav, i) => {
          return (
            <li key={i}>

              <Link href={nav.link}>{nav.name}</Link>
            </li>
          );
        })}
      </NavList>
    </nav>
  );
}
export default Navigation;

Navigation.propTypes = {
  navName: PropTypes.string,
  navItems: PropTypes.array
};
