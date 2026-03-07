import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/login_signup";
import StudentInfo from "./pages/student_info";
import Dashboard from "./pages/Dashboard";
import LearningTrack from "./pages/learning_track";
import UnifiedLearning from "./pages/UnifiedLearning";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute, PublicRoute } from "./components/RouteGuards";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />

          {/* Auth pages — redirect to /dashboard if already signed in */}
          <Route path="/login" element={<PublicRoute><Auth initialPage="login" /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Auth initialPage="signup" /></PublicRoute>} />

          {/* Onboarding — open after signup */}
          <Route path="/studentinfo" element={<StudentInfo />} />

          {/* Protected pages — redirect to /login if not signed in */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/track/:id" element={<ProtectedRoute><LearningTrack /></ProtectedRoute>} />
          <Route path="/solve/:trackId/:topicId" element={<ProtectedRoute><UnifiedLearning /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}