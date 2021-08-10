import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              <span>{car}</span>
            </a>
          ))}
        {/* <a href="#">
          <span>Model S</span>
        </a>

        <a href="#">
          <span>Model 3</span>
        </a>

        <a href="#">
          <span>Model X</span>
        </a>

        <a href="#">
          <span>Model Y</span>
        </a> */}
      </Menu>

      <RightMenu>
        <a href="/#">
          <span>Shop</span>
        </a>
        <a href="/#">
          <span>Tesla Account</span>
        </a>
        <IconButton>
          <CustomeMenu onClick={() => setBurgerStatus(true)} />
        </IconButton>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <IconButton>
            <CustomeClose onClick={() => setBurgerStatus(false)} />
          </IconButton>
        </CloseWrapper>

        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/#">{car}</a>
            </li>
          ))}

        <li>
          <a href="/#">Used Inventory</a>
        </li>
        <li>
          <a href="/#">Trade-in</a>
        </li>
        <li>
          <a href="/#">Cybertruck</a>
        </li>
        <li>
          <a href="/#">Roadaster</a>
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
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    justify-content: center;
    flex-wrap: nowrap;

    span {
      text-transform: uppercase;
      font-weight: 600;
      position: relative;
      align-items: center;
      justify-content: center;

      &:after {
        content: "";
        height: 2px;
        background: #393c41;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 776px) {
    display: none;
  }
`;
const RightMenu = styled(Menu)`
  span {
    display: flex;
  }
  flex: 0;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const CustomeMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "TranslateX(0)" : "TranslateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomeClose = styled(CloseIcon)`
  cursor: pointer;
  /* <FontAwesomeIcon icon={faTimes} /> */
`;
