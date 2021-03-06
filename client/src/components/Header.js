import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/crown.svg';
import CartContainer from '../containers/CartContainer';
import CartDropdownContainer from '../containers/CartDropdownContainer';

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const LinkLogo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LinkLogo to="/">
      <Logo />
    </LinkLogo>
    <Options>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/authentication">SIGN IN</OptionLink>
      )}
      <CartContainer />
    </Options>
    {hidden ? null : <CartDropdownContainer />}
  </HeaderContainer>
);

export default Header;
