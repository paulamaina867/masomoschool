import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeComponent from './components/HomeComponent';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import NotFound from './components/NotFound';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import TeacherLayout from './components/teacher/TeacherLayout';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import ParentLayout from './components/parent/parentLayout';
import ParentDashboard from './components/parent/ParentDashboard';
import NotAuthorized from './components/NotAuthorized';
import Teachers from './components/admin/Teachers';
import Parent from './components/admin/Parent';
import Students from './components/admin/Students';
import Classes from './components/admin/Classes';
import ClassAdd from './components/admin/forms/ClassAdd';
import ClassEdit from './components/admin/forms/ClassEdit';
import TeacherAdd from './components/admin/forms/TeacherAdd';
import TeacherEdit from './components/admin/forms/TeacherEdit';
import StudentAdd from './components/admin/forms/StudentAdd';
import StudentEdit from './components/admin/forms/StudentEdit';
import ParentEdit from './components/admin/forms/ParentEdit';
import ParentAdd from './components/admin/forms/ParentAdd';
import ClassesforParents from './components/parent/ClassesforParents';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />

        {/* Below are the admin routes */}
        <Route path='/admin-dashboard' 
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout/>
          </ProtectedRoute>
        }
        >
          <Route path='' element={<AdminDashboard/>} />
          <Route path='teachers' element={<Teachers />} />
          <Route path='teachers/add' element={<TeacherAdd />} />
          <Route path='teachers/edit' element={<TeacherEdit />} />
          <Route path='parents' element={<Parent />} />          
        <Route path='parents/edit' element={<ParentEdit/>} />
        <Route path='parents/add' element={<ParentAdd/>} />
          <Route path='students' element={<Students />} />
          <Route path='students/add' element={<StudentAdd/>} />
          <Route path='students/edit' element={<StudentEdit/>} />
          <Route path='classes' element={<Classes />} />
          <Route path='classes/add' element={<ClassAdd/>} />
          <Route path='classes/edit' element={<ClassEdit/>} />
        </Route>

        {/* Below are the teacher routes */}
        <Route path='/teacher-dashboard' 
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherLayout/>
          </ProtectedRoute>
        }
        >
          <Route path='' element={<TeacherDashboard/>} />
        </Route>

        {/* Below are the parent routes */}
        <Route path='/parent-dashboard' 
        element={
          <ProtectedRoute allowedRoles={["parent"]}>
            <ParentLayout/>
          </ProtectedRoute>
        }
        >
          <Route path='' element={<ParentDashboard/>} />
          <Route path='classes' element={<ClassesforParents />} />
        </Route>


        <Route path="/register" element={<RegisterComponent/>} />
        <Route path="/login"  element={<LoginComponent/>} />

        {/* Defaults */}
        <Route path='/not-authorized' element={<NotAuthorized/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;