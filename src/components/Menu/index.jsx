import { useHistory } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

const Menu = () => {
  const history = useHistory();

  return (
    <>
      <div>
        <button>Perfil</button>
        <button>List de Devs</button>
        <button>LogOut</button>
      </div>
    </>
  );
};

export default Menu;
