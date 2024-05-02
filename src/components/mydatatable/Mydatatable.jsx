import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, firstName: "Primer"},
  { id: 2, firstName: "Foundation"},
  { id: 3, firstName: "Concealer"},
  { id: 4, firstName: "Bedak"},
  { id: 5, firstName: "Chusion"},
  { id: 6, firstName: "Lipblam"},
  { id: 7, firstName: "Maskara"},
  { id: 8, firstName: "Eyeliner"},
  { id: 9, firstName: "Pensil Alis"},
  { id: 10, firstName: "Eyeshadow"},
];

const actionColumn = [
  {
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            </Link>
        </div>
      );
    },
  },
];

const Mydatatable = () => {
  return (
    
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;