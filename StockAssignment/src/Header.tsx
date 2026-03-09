import home from "./assets/home.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const goToDashboard = () => {
        navigate("/home");
    };
return (
  <div>
    <div style={styles.header}>
        <img src={home} alt="Home" style={styles.icon} onClick={goToDashboard} />
        <h1>Stock Assignment</h1>    
    </div>
    <Link to="/gridView">GridView</Link>
  </div>
);
};
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#282c34",
    color: "white",
  },
  icon: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
    cursor: "pointer",
  },
};

export default Header;

