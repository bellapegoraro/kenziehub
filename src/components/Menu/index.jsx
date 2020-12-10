import FontAwesome from "react-fontawesome";
import { MenuContainerOpen, MenuContainerClose, LinkContainer } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <MenuContainerOpen>
          <FontAwesome
            className="fas fa-arrow-left"
            size="2x"
            style={{ color: "white" }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <LinkContainer>
            <FontAwesome
              className="fas fa-home"
              size="2x"
              style={{ color: "white" }}
            />
            <span>home</span>
          </LinkContainer>
          <LinkContainer>
            <FontAwesome
              className="fas fa-laptop"
              size="2x"
              style={{ color: "white" }}
            />
            <span>Devs</span>
          </LinkContainer>
          <LinkContainer>
            <FontAwesome
              className="far fa-times-circle"
              size="2x"
              style={{ color: "white" }}
            />
            <span>LogOut</span>
          </LinkContainer>
        </MenuContainerOpen>
      ) : (
        <MenuContainerClose onClick={() => setIsOpen(!isOpen)}>
          <FontAwesome
            className="fas fa-bars"
            size="2x"
            style={{ color: "white" }}
          />
        </MenuContainerClose>
      )}
    </>
  );
};

export default Menu;
