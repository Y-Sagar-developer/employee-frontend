import { useNavigate } from "react-router-dom";
import axios from "axios";

export const columns = [
  {
    name: "S no",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
    sortable:true
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];
export const DepartmentButtons = ({ DepId, onDepartmentDelete }) => {
  const navigate = useNavigate();
  // alert(DepId)
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this department?"
    );

    if (!confirmDelete) return; // Stop function if user cancels

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/department/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        alert("Department deleted successfully!");

        if (onDepartmentDelete) {
          onDepartmentDelete(); // Call the parent function to update the UI
        }
      }
    } catch (error) {
      console.error("Error deleting department:", error);

      if (error.response && error.response.data) {
        alert(error.response.data.error || "Failed to delete department");
      }
    }
  };

  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 bg-teal-600 text-white"
        onClick={() => navigate(`/admin-dashboard/department/${DepId}`)}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-red-600 text-white "
        onClick={() => handleDelete(DepId)}
      >
        Delete
      </button>
    </div>
  );
};
