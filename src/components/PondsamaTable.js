import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 380,
    editable: false
  }
];

export default function PondsamaTable({fishes}) {
  if(fishes){
    return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={fishes}
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