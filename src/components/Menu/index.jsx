import FontAwesome from "react-fontawesome";
import { MenuContainerOpen, MenuContainerClose, LinkContainer } from "./style";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const token = localStorage.getItem("authToken");

  return (
    <>
      {isOpen ? (
        <MenuContainerOpen>
          <FontAwesome
            className="fas fa-arrow-left"
            size="2x"
            style={{ color: "white" }}
            onClick={() => setIsOpen(!isOpen)}
            name="closeMenu"
          />
          <LinkContainer onClick={() => history.push("/devs")}>
            <FontAwesome
              className="fas fa-home"
              size="2x"
              style={{ color: "white" }}
              name="home"
            />
            <span>Home</span>
          </LinkContainer>
          {token && (
            <LinkContainer onClick={() => history.push("/profile/")}>
              <FontAwesome
                className="fas fa-user"
                size="2x"
                style={{ color: "white" }}
                name="profile"
              />
              <span>Perfil</span>
            </LinkContainer>
          )}
          {token && (
            <LinkContainer onClick={() => history.push("/favorites")}>
              <FontAwesome
                className="fas fa-heart"
                size="2x"
                style={{ color: "white" }}
              />
              <span>Favoritos</span>
            </LinkContainer>
          )}
          {token ? (
            <>
              <LinkContainer
                onClick={() => {
                  localStorage.removeItem("authToken");
                  setIsOpen(!isOpen);
                  history.push("/devs");
                }}
              >
                <FontAwesome
                  className="far fa-times-circle"
                  size="2x"
                  style={{ color: "white" }}
                  name="logout"
                />
                <span>Logout</span>
              </LinkContainer>
            </>
          ) : (
            <>
              <LinkContainer onClick={() => history.push("/login")}>
                <FontAwesome
                  className="far fa-check-circle"
                  size="2x"
                  style={{ color: "white" }}
                  name="login"
                />
                <span>Login</span>
              </LinkContainer>
            </>
          )}
          {token ? null : (
            <LinkContainer onClick={() => history.push("/register")}>
              <FontAwesome
                className="fas fa-user-plus"
                size="2x"
                style={{ color: "white" }}
                name="register"
              />
              <span>Register</span>
            </LinkContainer>
          )}
        </MenuContainerOpen>
      ) : (
        <MenuContainerClose onClick={() => setIsOpen(!isOpen)}>
          <FontAwesome
            className="fas fa-bars"
            size="2x"
            style={{ color: "white" }}
            name="menu"
          />
        </MenuContainerClose>
      )}
    </>
  );
};

export default Menu;
