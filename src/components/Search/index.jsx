import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchUserThunk } from "../../store/modules/search/thunk";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input name="name" value={input} onChange={() => handleInput} />
      <button onClick={dispatch(searchUserThunk(input))}>Pesquisar</button>
    </div>
  );
};

export default Search;
