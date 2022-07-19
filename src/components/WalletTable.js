import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ResourceIcons} from '../helpers/ResourceIcons';
import Avatar from '@mui/material/Avatar';


function createData(
    name: string,
    qty: number,
    ea: number,
    movr: number,
    loc: number,
  ) {
    return { name, qty, ea, movr, loc };
  }
  
  const rows = [
    createData('aStone', 237, 9.0, 37, 4.3),
    createData('aWood', 159, 6.0, 24, 4.0),
    createData('aIron', 262, 16.0, 24, 6.0),
    createData('aGold', 305, 3.7, 67, 4.3),
    createData('aExp', 356, 16.0, 49, 3.9),
    createData('aGrain', 356, 16.0, 49, 3.9),
    createData('aString', 356, 16.0, 49, 3.9),
    createData('aFish', 356, 16.0, 49, 3.9),
    createData('aBait', 356, 16.0, 49, 3.9),
    createData('aMoonstone', 356, 16.0, 49, 3.9),
  ];

  export default function WalletTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">qty</TableCell>
              <TableCell align="right">ea</TableCell>
              <TableCell align="right">MOVR</TableCell>
              <TableCell align="right">Loc</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Avatar alt={row.name} src={ResourceIcons.alpha[row.name]} />
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.ea}</TableCell>
                <TableCell align="right">{row.movr}</TableCell>
                <TableCell align="right">{row.loc}</TableCell>
              </TableRow>
            ))}
            <TableRow
                key='Total'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                Total
                </TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }