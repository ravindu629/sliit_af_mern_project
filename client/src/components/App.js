import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Home from "./Home";

import AddStaffMember from "./users/AddStaffMember";
import AddStudent from "./users/AddStudent";

import AdminLogin from "./users/AdminLogin";
import StaffLogin from "./users/StaffLogin";
import StudentLogin from "./users/StudentLogin";

import AllUsers from "./users/AllUsers";
import UpdateUser from "./users/UpdateUser";

import ContinueStudent from "./students/ContinueStudent";
import ContinueStaff from "./staff/ContinueStaff";

import SupervisorMenu from "./supervisor/SupervisorMenu";
import PanelMemberMenu from "./panelMember/PanelMemberMenu"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/addStaffMember" element={<AddStaffMember />} />
          <Route path="/addStudent" element={<AddStudent />} />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/staffLogin" element={<StaffLogin />} />
          <Route path="/studentLogin" element={<StudentLogin />} />

          <Route path="/users" element={<AllUsers />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />

          <Route path="/students" element={<SideBar />} />

          <Route path="/continueStudent" element={<ContinueStudent />} />

          <Route path="/continueStaff" element={<ContinueStaff />} />
          <Route path="/supMenu" element={<SupervisorMenu />} />
          <Route path="/panelMenu" element={<PanelMemberMenu />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
