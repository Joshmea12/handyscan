
import React from 'react';
import { Hammer } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: any) => void;
  isLanding?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isLanding = false }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div 
          className="flex items-center gap-2 text-2xl font-bold text-orange-600 cursor-pointer"
          onClick={() => onNavigate('landing')}
        >
          <Hammer className="w-8 h-8" />
          <span>HandyScan</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <button onClick={() => onNavigate('dashboard')} className="hover:text-orange-500 transition-colors">Projects</button>
          <button onClick={() => onNavigate('ai-chat')} className="hover:text-orange-500 transition-colors">AI Help</button>
          <a href="#features" className="hover:text-orange-500 transition-colors">Features</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-gray-500 hover:text-gray-900">Log In</button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition-all active:scale-95"
          >
            Start Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
