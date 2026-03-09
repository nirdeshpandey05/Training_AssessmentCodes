import React, { createContext, useContext, useState } from 'react';

type StockContextType = {
    stock1Data: number[];
    stock2Data: number[];
    setStock1Data: React.Dispatch<React.SetStateAction<number[]>>;
    setStock2Data: React.Dispatch<React.SetStateAction<number[]>>;
};

const StockContext = createContext<StockContextType | null>(null);
export const useStock = () => {
    const context = useContext(StockContext);
    if (!context) {
        throw new Error("useStock error");
    }
    return context;
};
export const StockProvider = ({ children }: any) => {
    const [stock1Data, setStock1Data] = useState<number[]>([]);
    const [stock2Data, setStock2Data] = useState<number[]>([]);
    return (
        <StockContext.Provider value={{ stock1Data, stock2Data, setStock1Data, setStock2Data }}>
            {children}
        </StockContext.Provider>
    );
}