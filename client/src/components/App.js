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

import SupervisorMenu from "./supervisor/SupervisorMenu";
import PanelMemberMenu from "./panelMember/PanelMemberMenu";
import AddMarks from "./supervisor/AddMarks";
import StudentMainPage from "./students/StudentMainPage";
import ViewMarks from "./supervisor/ViewMarks";
import UpdateMarks from "./supervisor/UpdateMarks";
import ChatMenu from "./supervisor/ChatMenu";
import Report from "./supervisor/Report";

import AdminMenu from "./admin/AdminMenu";
import ManageUsers from "./admin/ManageUsers";
import StudentUpdate from "./admin/StudentUpdate";
import StaffUpdate from "./admin/StaffUpdate";
import AdminUpdate from "./admin/AdminUpdate";
import AddAdmin from "./admin/AddAdmin";

//Student Main pages navigation
import AFpage from "./students/AFpage";

//Student Group page navigatiom
import StudentGroup from "./students/StudentGroup";
import CreateStudentGroup from "./students/CreateStudentGroup";
import UpdateStudentGroup from "./students/UpdateStudentGroup";

//Student Research Topic page navigation
import ResearchTopic from "./students/ResearchTopic";
import RegisterResearchTopic from "./students/RegisterResearchTopic";
import UpdateResearchTopic from "./students/UpdateResearchTopic";

//Student View Marks
//Student View Marks Navigation Page
import ViewMarksNavPage from "./students/ViewMarksNavPage";
import ViewDocumentMarks from "./students/ViewDocumentMarks";
import ViewDocumentMarksReport from "./students/ViewDocumentMarksReport";
import ViewStatusOfTopic from "./students/ViewStatusOfTopic";
import StdViewPanelMemberAllocatedMarks from "./students/StdViewPanelMemberAllocatedMarks"


import CreateMarking from "./admin/CreateMarking";
import FacultyNotices from "./admin/FacultyNotices";
import ITSchema from "./admin/ITScheme";
import BussnessSchema from "./admin/BussnessScheme";
import EngScheme from "./admin/EngScheme";
import Submission from "./admin/Submission";
import AllSubmissions from "./admin/AllSubmissions";
import SubmissionUpdate from "./admin/SubmissionUpdate";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/addStaffMember" element={<AddStaffMember />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/addAdmin" element={<AddAdmin />} />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/staffLogin" element={<StaffLogin />} />
          <Route path="/studentLogin" element={<StudentLogin />} />

          <Route path="/students" element={<SideBar />} />

          <Route path="/StudentMainPage" element={<StudentMainPage />} />
          <Route path="/AFpage" element={<AFpage />} />
          <Route path="/studentGroup" element={<StudentGroup />} />
          <Route path="/CreateStudentGroup" element={<CreateStudentGroup />} />
          <Route path="/updateStudentGroup/:id" element={<UpdateStudentGroup />} />
          <Route path="/researchTopic" element={<ResearchTopic />} />
          <Route path="/RegisterResearchTopic" element={<RegisterResearchTopic />} />
          <Route path="/updateResearchTopic/:id" element={<UpdateResearchTopic />} />
          <Route path="/ViewMarksNavPage" element={<ViewMarksNavPage />} />
          <Route path="/ViewDocumentMarks" element={<ViewDocumentMarks />} />
          <Route path="/ViewDocumentMarksReport" element={<ViewDocumentMarksReport />} />
          <Route path="/ViewStatusOfTopic" element={<ViewStatusOfTopic />} />
          <Route path="/StdViewPanelMemberAllocatedMarks" element={<StdViewPanelMemberAllocatedMarks />} />

         


          <Route path="/supMenu" element={<SupervisorMenu />} />
          <Route path="/panelMenu" element={<PanelMemberMenu />} />

          <Route path="/addMarks" element={<AddMarks />} />

          <Route path="/getMarks" element={<ViewMarks />} />
          <Route path="/updateMarks/:id" element={<UpdateMarks />} />
          <Route path="/ChatMenu" element={<ChatMenu />} />
          <Route path="/Report" element={<Report />} />

          <Route path="/adminMenu" element={<AdminMenu />} />
          <Route path="/manageUsers" element={<ManageUsers />} />
          <Route path="/updateStudent/:id" element={<StudentUpdate />} />
          <Route path="/updateStaffMember/:id" element={<StaffUpdate />} />
          <Route path="/updateAdmin/:id" element={<AdminUpdate />} />
          <Route path="/createMarking" element={<CreateMarking />} />
          <Route path="/facultyNotices" element={<FacultyNotices />} />
          <Route path="/itScheme" element={<ITSchema />} />
          <Route path="/bussnessScheme" element={<BussnessSchema />} />
          <Route path="/engScheme" element={<EngScheme />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/allSubmissions" element={<AllSubmissions />} />
          <Route path="/updateSubmission/:id" element={<SubmissionUpdate />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
