
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingView from './views/LandingView';
import DashboardView from './views/DashboardView';
import ProjectDetailView from './views/ProjectDetailView';
import AIChatWindow from './components/AIChatWindow';
import { AppView, Project } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.LANDING);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (newView: AppView) => {
    setView(newView);
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setView(AppView.PROJECT_DETAIL);
  };

  const renderContent = () => {
    switch (view) {
      case AppView.LANDING:
        return <LandingView onStart={() => setView(AppView.DASHBOARD)} />;
      case AppView.DASHBOARD:
        return <DashboardView onSelectProject={handleSelectProject} />;
      case AppView.PROJECT_DETAIL:
        return selectedProject ? (
          <ProjectDetailView 
            project={selectedProject} 
            onBack={() => setView(AppView.DASHBOARD)} 
          />
        ) : <DashboardView onSelectProject={handleSelectProject} />;
      case AppView.AI_CHAT:
        // Already handled by floating window, but could have a dedicated page
        return <DashboardView onSelectProject={handleSelectProject} />;
      default:
        return <LandingView onStart={() => setView(AppView.DASHBOARD)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onNavigate={handleNavigate} isLanding={view === AppView.LANDING} />
      
      <main className="flex-1">
        {renderContent()}
      </main>

      <AIChatWindow />
      
      {/* Global Scroll to top button or other shared elements can go here */}
    </div>
  );
};

export default App;
