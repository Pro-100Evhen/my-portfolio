import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: var(--secondary-color);
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover, &.active {
      color: var(--secondary-color);
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>My Portfolio</Logo>
        <NavLinks>
          <NavLink to="/about" end>Про мене</NavLink>
          <NavLink to="/my-city">Моє місто</NavLink>
          <NavLink to="/my-future">Моє майбутнє</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 