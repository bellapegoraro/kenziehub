import FontAwesome from "react-fontawesome";
import { MenuContainerOpen, MenuContainerClose } from "./style";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <MenuContainerOpen onClick={() => setIsOpen(!isOpen)}>
          <FontAwesome className="fas fa-arrow-left" size="2x" />
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
