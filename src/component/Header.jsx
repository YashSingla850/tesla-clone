import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/carslide/CarSlide";
import { useSelector } from "react-redux";

function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const cars = useSelector(selectCars);
  function open() {
    setBurgerOpen(true);
  }

  function close() {
    setBurgerOpen(false);
  }
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={open} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWraper>
          <CustomClose onClick={close} />
        </CloseWraper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index} href="">
                {car}
              </a>
            </li>
          ))}

        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">Cyber Truck</a>
        </li>
        <li>
          <a href="">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-item: center;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppar-case;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppar-case;

    margin-right: 10px;
    // z-index: -1;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  li {
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const CustomClose = styled(CloseIcon)``;
