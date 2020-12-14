import List from "../../components/List";
import { Container } from "./style";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getNextPageThunk } from "../../store/modules/pageList/thunk";
import { useDispatch } from "react-redux";
import { getUsersThunk } from "../../store/modules/users/thunk";

const Users = () => {
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(window.pageYOffset);
  const [scrollControl, setScrollControl] = useState(window.screenY);

  window.addEventListener("scroll", () => {
    setScroll(window.pageYOffset);
  });

  const loadMoreContent = () => {
    if (scrollControl - scroll <= 10) {
      setScrollControl(scrollControl + 1000);
      dispatch(getNextPageThunk());
      dispatch(getUsersThunk());
    }
  };

  useEffect(() => {
    loadMoreContent();
  }, [scroll]);

  return (
    <Container>
      <Menu />
      <Header />
      <List />
    </Container>
  );
};

export default Users;
