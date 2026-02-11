
import React, { useState } from 'react';
import { Search, Filter, Clock, Banknote, Star, ChevronRight, LayoutGrid, List as ListIcon } from 'lucide-react';
import { MOCK_PROJECTS } from '../constants';
import { Project } from '../types';

interface DashboardViewProps {
  onSelectProject: (project: Project) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onSelectProject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Woodworking', 'Plumbing', 'Outdoor', 'Electrical', 'Painting'];

  const filteredProjects = MOCK_PROJECTS.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Good morning, DIYer!</h1>
        <p className="text-gray-500">What do you want to build or fix today?</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search projects (e.g. 'faucet', 'shelf', 'garden')"
            className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-100' 
                  : 'bg-white text-gray-600 border border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm uppercase tracking-wide">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest ${
                        project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        project.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                        {project.difficulty}
                    </span>
                    <div className="flex items-center text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-bold ml-1 text-gray-400">4.9</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold">{project.timeEstimate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <Banknote className="w-4 h-4" />
                        <span className="text-xs font-bold">{project.costEstimate}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 group-hover:bg-orange-600 rounded-full flex items-center justify-center transition-all group-hover:translate-x-1">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-500">Try searching for something else or browse categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardView;
