// import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import PrivateRoute from "./utils/PrivateRoute";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";
import AdminSummary from "./Components/dashboard/AdminSummary";
import DepartmentList from "./Components/department/DepartmentList";
import AddDepartment from "./Components/department/AddDepartment";
import EditDepartment from "./Components/department/EditDepartment";
import List from "./Components/employee/List";
import Add from "./Components/employee/Add";
import View from "./Components/employee/View";
import Edit from "./Components/employee/Edit";
import AddSalary from "./Components/salary/Add";
import ViewSalary from "./Components/salary/View";
import Summary from "./Components/EmployeeDashboard/Summary";
import LeaveList from "./Components/leave/List"
import AddLeave from "./Components/leave/Add"
import Setting from "./Components/EmployeeDashboard/Setting";
import Table from "./Components/leave/Table";
import Detail from "./Components/leave/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect "/" to admin dashboard */}
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Admin Dashboard with Nested Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <RoleBaseRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoute>
          }
        >
          {/* Default Admin Dashboard View */}
          <Route index element={<AdminSummary />} />
          
          {/* Admin Departments Pages */}
          <Route path="/admin-dashboard/departments" element={<DepartmentList />} />
          <Route path="/admin-dashboard/add-department" element={<AddDepartment />} />
          <Route path="/admin-dashboard/department/:id" element={<EditDepartment />} />
          
          {/* Admin Employees Pages */}
          <Route path="/admin-dashboard/employees" element={<List />} />
          <Route path="/admin-dashboard/add-employee" element={<Add />} />
          <Route path="/admin-dashboard/employees/:id" element={<View />} />
          <Route path="/admin-dashboard/employees/edit/:id" element={<Edit />} />
          <Route path="/admin-dashboard/employees/salary/:id" element={<ViewSalary />} />
          
          {/* Admin Salary and Leave Pages */}
          <Route path="/admin-dashboard/salary/add" element={<AddSalary />} />
          <Route path="/admin-dashboard/leaves" element={<Table />} />
          <Route path="/admin-dashboard/leaves/:id" element={<Detail />} />
          <Route path="/admin-dashboard/employees/leaves/:id" element={<LeaveList />} />
          <Route path="/admin-dashboard/setting" element={<Setting />} />
        </Route>

        {/* Employee Dashboard Route */}
        <Route
          path="/employee-dashboard"
          element={
            <PrivateRoute>
              <RoleBaseRoutes requiredRole={["admin", "employee"]}>
                <EmployeeDashboard />
              </RoleBaseRoutes>
            </PrivateRoute>
          }
        >
          <Route index element={<Summary />} />
          <Route path="/employee-dashboard/profile/:id" element={<View />} />
          <Route path="/employee-dashboard/leaves/:id" element={<LeaveList />} />
          <Route path="/employee-dashboard/add-leave" element={<AddLeave />} />
          <Route path="/employee-dashboard/salary/:id" element={<ViewSalary />} />
          <Route path="/employee-dashboard/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
