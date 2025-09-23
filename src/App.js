import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// import the router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import NotFound from './components/NotFound';
import NotAuthorized from './components/NotAuthorized';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import AdminDashboard from './components/admin/AdminDashboard';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import ParentDashboard from './components/parent/ParentDashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path='/' element={<HomeComponent />} />

        {/* Below are admin's Protected Routes */}
        <Route path='/admin-dashboard' 
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path='' element={ <AdminDashboard/> } />
        </Route>


        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/notAuthorized' element={<NotAuthorized />} />
        <Route path='/login' element={< LoginComponent  />} />
        <Route path='/teacher-dashboard' element={< TeacherDashboard />} />
        <Route path='/parent-dashboard' element={< ParentDashboard />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;