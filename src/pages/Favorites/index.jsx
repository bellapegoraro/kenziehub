import { useState } from "react";
const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const [users, setUsers] = useState(favorites);

  const removeFavorite = (id) => {
    const removed = favorites.filter((user) => user.id !== id);
    localStorage.setItem("favorites", JSON.stringify(removed));
    setUsers(removed);
  };

  return (
    <div>
      {users.map(({ name, id }) => (
        <div key={id}>
          <p>{name}</p>
          <button onClick={() => removeFavorite(id)}>remover</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
