import moment from 'moment';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


// {
// 	"0": {
// 		"id": "0x0077e1c19a2244d37a132897b0041f5e100036282da506ae79408d64e2dc61df",
// 		"buyerSendsAmountFull": "1716500000000000000",
// 		"order": {
// 			"quantity": "15000000000000000000000",
// 			"sellAsset": {
// 				"assetId": "2",
// 				"assetAddress": "0x1b30a3b5744e733d8d2f19f0812e3f79152a8777"
// 			},
// 			"buyAsset": {
// 				"assetId": "0",
// 				"assetAddress": "0x0000000000000000000000000000000000000000"
// 			},
// 			"askPerUnitNominator": "3433000000000000",
// 			"askPerUnitDenominator": "1000000000000000000"
// 		},
// 		"createdAt": "1656623100"
// 	}
// }

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'buyerSendsAmountFull',
    headerName: 'buyerSendsAmountFull',
    width: 100,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.buyerSendsAmountFull / 10**18}`,
  },
  {
    field: 'qty',
    headerName: 'Quantity',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.order.quantity / 10**18}`,
  },
  {
    field: 'sellAsset',
    headerName: 'sellAsset',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 110,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.order.sellAsset.assetAddress}-${params.row.order.sellAsset.assetId}`,
  },
  {
    field: 'buyAsset',
    headerName: 'buyAsset',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 110,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.order.buyAsset.assetAddress}-${params.row.order.buyAsset.assetId}`,
  },
  {
    field: 'askPerUnitNominator',
    headerName: 'askPerUnitNominator',
    width: 100,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.order.askPerUnitNominator}`
  },
  {
    field: 'askPerUnitDenominator',
    headerName: 'askPerUnitDenominator',
    width: 100,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.order.askPerUnitDenominator}`
  },
  {
    field: 'pricePerUnit',
    headerName: 'Price Per Unit',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.buyerSendsAmountFull / params.row.order.askPerUnitNominator} @ ${params.row.order.askPerUnitNominator / params.row.order.askPerUnitDenominator}`,
  },
  {
    field: 'spricePerUnit',
    headerName: 'SPrice Per Unit',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.buyerSendsAmountFull / params.row.order.askPerUnitNominator} @ ${params.row.order.askPerUnitDenominator / params.row.order.askPerUnitNominator}`,
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
];

export default function OrderFillTable({fills}) {
  if(fills){
    return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={fills}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    );
  } else{
    return (
      <Box sx={{ height: 400, width: '100%' }}>
        No data
      </Box>
    )
  }
}