
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const GridView = () => {
    //const { stock1Data, stock2Data } = useStock();
    return (
        <div>       
            <h1>GridView of Stocks</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead> 
                        <TableRow>
                            <TableCell>Stock Name</TableCell>
                            <TableCell>Current Value</TableCell>
                            <TableCell>Min Value</TableCell>
                            <TableCell>Max Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}       
export default GridView;