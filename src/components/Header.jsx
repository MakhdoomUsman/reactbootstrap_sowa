import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header() {
  const [burgerOpen, setburgerOpen] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="images/logo.svg" alt="logo" />
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
        <CostumMenu onClick={() => setburgerOpen(true)} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseRaper>
          <CostumClose onClick={() => setburgerOpen(false)} />
        </CloseRaper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a  href="#">
                {car}
              </a>
            </li>
          ))}

        <li>
          <a href="#">Use Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
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
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    color: #393c41;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 786px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #393c41;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CostumMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: Fixed;
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
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      color: #393c41;
      text-decoration: none;
      // text-transform: uppercase;
    }
  }
`;

const CostumClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseRaper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
