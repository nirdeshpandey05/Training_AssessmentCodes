import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useStock } from "./StockContext";
const Dashboard = () => {
    // const tiles = [
    //     { title: "Stock1" },
    //     { title: "Stock2" },       
    // };
    const { stock1Data, stock2Data, setStock1Data, setStock2Data } = useStock();
    useEffect(() => {
        const interval = setInterval(() => {
            const value1 = Math.floor(Math.random() * 1000);
            const value2 = Math.floor(Math.random() * 1000);
            setStock1Data((prevData) => [...prevData.slice(-10), value1]);
            setStock2Data((prevData) => [...prevData.slice(-10), value2]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const formChartData = (data: number[]) => {
        return data.map((value, index) => ({
            name: index,
            value: value,
        }));
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                <div style={tileStyle}>
                    <h3>Stock1</h3>
                    <h2>Current Value: {stock1Data[stock1Data.length - 1]}</h2>
                    <LineChart width={300} height={200} data={formChartData(stock1Data)}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                </div>
                <div style={tileStyle}>
                    <h3>Stock2</h3>
                    <h2>Current Value: {stock2Data[stock2Data.length - 1]}</h2>
                    <LineChart width={300} height={200} data={formChartData(stock2Data)}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                    </LineChart>
                </div>
                {/* {tiles.map((tile, index) => (
                    <div key={index} style={styles.tile}>
                        <h2>{tile.title}</h2>
                        <h2>Current Value: {tile.title === "Stock1" ? stock1Data[stock1Data.length - 1] : stock2Data[stock2Data.length - 1]}</h2>
                        <ul>
                            {formChartData(tile.title === "Stock1" ? stock1Data : stock2Data).map((dataPoint, dataIndex) => (
                                <li key={dataIndex}>{`Index: ${dataPoint.name}, Value: ${dataPoint.value}`}</li>
                            ))}
                        </ul>
                    </div>
                ))} */}
            </div>
        </div>
    )
}

const tileStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
};
const styles = {
    container: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
    },
    tile: {
        width: "150px",
        height: "200px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};

export default Dashboard