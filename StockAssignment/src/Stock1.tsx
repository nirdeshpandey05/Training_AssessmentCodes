import { useStock } from "./StockContext";

const Stock1 = () => {
    const { stock1Data } = useStock();
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const newValue = Math.floor(Math.random() * 1000);
    //         setValue((prevValue) => [...prevValue.slice(-10), newValue]);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);
    const minValue = Math.min(...stock1Data);
    const maxValue = Math.max(...stock1Data);
    return (
        <div style={{ padding: "20px" }}>
            <h1>Stock1</h1>
            <p>Min Value: {minValue}</p>
            <p>Max Value: {maxValue}</p>
        </div>
    )
}

export default Stock1;