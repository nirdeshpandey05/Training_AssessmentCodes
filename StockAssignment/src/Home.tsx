import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
    const tiles = [
        { title: "Dashboard", route:"/dashboard"},
        { title: "Stock1", route:"/stock1"},
        { title: "Stock2", route:"/stock2"},       
    ];
    const handleTileClick = (route: string) => {
       if(route)
       {
        navigate(route);
       }
        console.log(`Navigating to ${route}`);
    }
  return (
    <div>
        <h1>Home Screen</h1>
        <div style={styles.container}>
            {tiles.map((tile, index) => (
                <div key={index} style={styles.tile} onClick={() => handleTileClick(tile.route)}>
                    <h2>{tile.title}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
    },
    tile: {
        width: "150px",
        height: "100px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};
export default Home