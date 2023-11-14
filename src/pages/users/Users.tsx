import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef} from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field:"img", headerName:"Avatar", width:100,
        renderCell: (params)=>{
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
        field: 'firstName',
        type: "string",
        headerName: 'First name',
        width: 150,
      },
      {
        field: 'lastName',
        type: "string",
        headerName: 'Last name',
        width: 200,
      },
      {
        field: 'email',
        type: "string",
        headerName: 'email',
        width: 200,
      },
      {
        field: 'phone',
        type: "string",
        headerName: 'phone',
        width: 200,
      },
      {
        field: 'CreatedAt',
        type: 'date',
        headerName: 'Created At',
        width: 200,
        valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
      },
      
      {
        field: 'Verified',
        headerName: 'Verified',
        width: 150,
        type: "boolean",
      },
];
    
   

const Users = () => {
  const [open,setOpen] = useState(false)
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=>setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows}/>
            {open && <Add setOpen={setOpen} slug="user" columns={columns}/>}
        </div>
    );
};

export default Users;