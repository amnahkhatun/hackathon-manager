import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'desc', headerName: 'Description', width: 230 },
  {
    field: 'tags',
    headerName: 'Tags',
    width: 90,
  },
  {
    field: 'votes',
    headerName: 'Votes',
    type: 'number',
    width: 90,
  },
  // {
  //   field: 'votes',
  //   headerName: 'Votes',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, title: 'Hackathon 1', desc: 'This is Hackathon 1', tags: 'tech', votes: '2' },
  { id: 2, title: 'Hackathon 2', desc: 'This is Hackathon 1', tags: 'tech', votes: '5' },
  { id: 3, title: 'Hackathon 3', desc: 'This is Hackathon 1', tags: 'tech', votes: '9' },
  { id: 4, title: 'Hackathon 4', desc: 'This is Hackathon 1', tags: 'tech', votes: '2' },
  { id: 5, title: 'Hackathon 5', desc: 'This is Hackathon 1', tags: null, votes: '4' },
  { id: 6, title: 'Hackathon 6', desc: null, tags: 150 },
  { id: 7, title: 'Hackathon 7', desc: 'This is Hackathon 1', tags: 'tech', votes: '1' },
  { id: 8, title: 'Hackathon 8', desc: 'This is Hackathon 1', tags: 'tech', votes: '3' },
  { id: 9, title: 'Hackathon 9', desc: 'This is Hackathon 1', tags: 'tech', votes: '4' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '80vw' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
