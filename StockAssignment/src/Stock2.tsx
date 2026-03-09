import { useStock } from "./StockContext";

const Stock2 = () => {
    const { stock2Data } = useStock();
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const newValue = Math.floor(Math.random() * 1000);
    //         setValue((prevValue) => [...prevValue.slice(-10), newValue]);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);
    const minValue = Math.min(...stock2Data);
    const maxValue = Math.max(...stock2Data);
    return (
        <div style={{ padding: "20px" }}>
            <h1>Stock2</h1>
            <p>Min Value: {minValue}</p>
            <p>Max Value: {maxValue}</p>
        </div>
    )
}

export default Stock2;