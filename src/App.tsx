
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import PublicRoute from "@/components/PublicRoute";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CreateProject from "./pages/CreateProject";
import CreateProjectChat from "./pages/CreateProjectChat";
import Projects from "./pages/Projects";
import ProjectViewer from "./pages/ProjectViewer";
import Settings from "./pages/Settings";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Billing from "./pages/Billing";
import NotFound from "./pages/NotFound";
import { useAuth } from "@/contexts/AuthContext";

const queryClient = new QueryClient();

// Component to handle root route redirection
const RootRedirect = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bpspecs-off-white via-bpspecs-beige/50 to-bpspecs-taupe/30">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-bpspecs-teal"></div>
      </div>
    );
  }

  // Redirect authenticated users to dashboard, unauthenticated to landing
  return <Navigate to={user ? "/" : "/landing"} replace />;
};

const AppRoutes = () => (
  <Routes>
    {/* Root route - redirect based on auth status */}
    <Route path="/" element={<RootRedirect />} />
    
    {/* Public routes - redirect authenticated users to dashboard */}
    <Route 
      path="/landing" 
      element={
        <PublicRoute>
          <Landing />
        </PublicRoute>
      } 
    />
    <Route 
      path="/login" 
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } 
    />
    <Route 
      path="/signup" 
      element={
        <PublicRoute>
          <Signup />
        </PublicRoute>
      } 
    />
    <Route 
      path="/forgot-password" 
      element={
        <PublicRoute>
          <ForgotPassword />
        </PublicRoute>
      } 
    />
    <Route 
      path="/reset-password" 
      element={
        <PublicRoute>
          <ResetPassword />
        </PublicRoute>
      } 
    />
    
    {/* Public marketing pages - accessible to everyone */}
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/about" element={<About />} />
    
    {/* Protected routes - require authentication */}
    <Route 
      path="/dashboard" 
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/create-project" 
      element={
        <ProtectedRoute>
          <CreateProjectChat />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/create-project-wizard" 
      element={
        <ProtectedRoute>
          <CreateProject />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/projects" 
      element={
        <ProtectedRoute>
          <Projects />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/projects/:id" 
      element={
        <ProtectedRoute>
          <ProjectViewer />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/settings" 
      element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/billing" 
      element={
        <ProtectedRoute>
          <Billing />
        </ProtectedRoute>
      } 
    />
    
    {/* Catch-all route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
