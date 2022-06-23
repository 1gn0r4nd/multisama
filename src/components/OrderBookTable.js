import moment from 'moment';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'orderType',
    headerName: 'Type',
    width: 50,
    editable: false,
  },
  {
    field: 'seller',
    headerName: 'Seller',
    width: 230,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.seller.id || ''}`,
      // ${params.row.buyer.id || ''}
  },
  {
    field: 'quantityLeft',
    headerName: 'Quantity Left',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.quantityLeft / 10**15}`,
  },
  {
    field: 'pricePerUnit',
    headerName: 'Price Per Unit',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pricePerUnit / 10**18}`,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'number',
    width: 150,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${moment(params.row.createdAt * 1000).format("MMM D HH:mm")}`,
  }
  //onlyTo
  //salt
  //active
];

export default function OrderBookTable({orders}) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}