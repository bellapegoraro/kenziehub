import FontAwesome from "react-fontawesome";
import { MenuContainerOpen, MenuContainerClose, LinkContainer } from "./style";
import { useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserTokenReducer } from "../../store/modules/users/thunk";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.users);

  useEffect(() => {}, []);

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

          {token && (
            <LinkContainer onClick={() => history.push("/profile/")}>
              <FontAwesome
                className="fas fa-user"
                size="2x"
                style={{ color: "white" }}
              />
              <span>Perfil</span>
            </LinkContainer>
          )}
          <LinkContainer onClick={() => history.push("/devs")}>
            <FontAwesome
              className="fas fa-laptop"
              size="2x"
              style={{ color: "white" }}
            />
            <span>Devs</span>
          </LinkContainer>
          {token ? (
            <LinkContainer
              onClick={() => {
                dispatch(deleteUserTokenReducer(token));
                localStorage.removeItem("authToken");
                setIsOpen(!isOpen);
                history.push("/devs");
              }}
            >
              <FontAwesome
                className="far fa-times-circle"
                size="2x"
                style={{ color: "white" }}
              />
              <span>Logout</span>
            </LinkContainer>
          ) : (
            <>
              <LinkContainer onClick={() => history.push("/login")}>
                <FontAwesome
                  className="far fa-check-circle"
                  size="2x"
                  style={{ color: "white" }}
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
          />
        </MenuContainerClose>
      )}
    </>
  );
};

export default Menu;
