import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchUserThunk } from "../../store/modules/search/thunk";
import { Input, Button, Container } from "./style";
import FontAwesome from "react-fontawesome";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Container>
      <Input value={input} onChange={(e) => handleInput(e)} />
      <Button onClick={dispatch(searchUserThunk(input))}>
        <FontAwesome
          className="fas fa-search"
          size="2x"
          style={{ color: "gray" }}
        />
      </Button>
    </Container>
  );
};

export default Search;
