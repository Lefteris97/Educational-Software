// import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'fname',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lname',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 150,
    },
    {
      field: 'password',
      headerName: 'Password',
      width: 150,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 100
    },
];

export const lessonColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Lesson Title',
    width: 150,
  },
  {
    field: 'content',
    headerName: 'Content',
    width: 150,
  },
]

export const exerciseColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'ex_name',
    headerName: 'Exercise',
    width: 150
  },
  {
    field: 'file_path',
    headerName: 'File',
    width: 200
  },
  {
    headerName: 'Answers',
    width: 150,
    renderCell: (params) => (
      <Link to={`/dash/answers/for_ex/${params.id}`}>
        <button
          variant="contained"
          color="primary"
        >
          View Answers
        </button>
      </Link>
    )
  }
]