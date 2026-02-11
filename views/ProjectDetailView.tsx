
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, Clock, Banknote, Hammer, List, CheckCircle, Lightbulb, Sparkles, Info, ShoppingCart } from 'lucide-react';
import { generateProjectSummary, generateShoppingList } from '../services/geminiService';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [aiSummary, setAiSummary] = useState('');
  const [shoppingList, setShoppingList] = useState('');
  const [isLoadingSummary, setIsLoadingSummary] = useState(true);
  const [showShoppingList, setShowShoppingList] = useState(false);

  useEffect(() => {
    const fetchAIContent = async () => {
      setIsLoadingSummary(true);
      const summary = await generateProjectSummary(project.title, project.description);
      setAiSummary(summary || '');
      setIsLoadingSummary(false);
    };
    fetchAIContent();
    window.scrollTo(0, 0);
  }, [project]);

  const handleGenerateShoppingList = async () => {
    setShowShoppingList(true);
    if (!shoppingList) {
        const list = await generateShoppingList(project.tools, project.materials);
        setShoppingList(list || '');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-orange-600 font-semibold mb-8 group transition-colors"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Details & Steps */}
        <div className="lg:col-span-2 space-y-12">
          <div className="relative h-96 rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{project.category}</span>
                <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{project.difficulty}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">{project.title}</h1>
              <div className="flex items-center gap-6 text-white/80 font-semibold">
                <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> {project.timeEstimate}</div>
                <div className="flex items-center gap-2"><Banknote className="w-5 h-5" /> {project.costEstimate}</div>
              </div>
            </div>
          </div>

          <section>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <List className="w-6 h-6 text-orange-600" />
                    Project Steps
                </h2>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    {activeStep} of {project.steps.length}
                </div>
            </div>
            <div className="space-y-6">
              {project.steps.map((step) => (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group p-8 rounded-[2rem] border-2 transition-all cursor-pointer ${
                    activeStep === step.id 
                      ? 'border-orange-500 bg-orange-50/30' 
                      : 'border-gray-100 hover:border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-bold transition-all ${
                        activeStep === step.id ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                    }`}>
                      {step.id}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-3 ${activeStep === step.id ? 'text-orange-900' : 'text-gray-700'}`}>
                        {step.title}
                      </h3>
                      <p className={`leading-relaxed ${activeStep === step.id ? 'text-orange-800/80' : 'text-gray-500'}`}>
                        {step.content}
                      </p>
                      {activeStep === step.id && step.tips && (
                        <div className="mt-6 flex gap-3 p-4 bg-white/50 border border-orange-200 rounded-xl text-orange-700 text-sm italic">
                            <Lightbulb className="w-5 h-5 shrink-0" />
                            <span><strong>Pro Tip:</strong> {step.tips}</span>
                        </div>
                      )}
                    </div>
                    {activeStep > step.id && (
                        <CheckCircle className="w-6 h-6 text-green-500 ml-auto shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: AI & Materials */}
        <div className="space-y-8">
          <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/30 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-6 h-6 text-orange-400" />
                    <h3 className="font-bold text-lg">AI Project Insights</h3>
                </div>
                {isLoadingSummary ? (
                    <div className="space-y-3 animate-pulse">
                        <div className="h-3 bg-white/10 rounded-full w-full"></div>
                        <div className="h-3 bg-white/10 rounded-full w-4/5"></div>
                        <div className="h-3 bg-white/10 rounded-full w-full pt-4"></div>
                    </div>
                ) : (
                    <div className="text-gray-300 leading-relaxed italic text-sm">
                        "{aiSummary}"
                    </div>
                )}
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Hammer className="w-5 h-5 text-orange-600" />
                Tools & Materials
            </h3>
            <div className="space-y-6">
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tools Needed</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                            <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-xl text-sm font-semibold">{tool}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Materials</h4>
                    <ul className="space-y-2">
                        {project.materials.map(mat => (
                            <li key={mat} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                                {mat}
                            </li>
                        ))}
                    </ul>
                </div>
                <button 
                    onClick={handleGenerateShoppingList}
                    className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-orange-100 group"
                >
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Generate Smart Shopping List
                </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-6 flex gap-4">
              <div className="bg-white p-2 rounded-xl h-fit text-blue-600 shadow-sm border border-blue-100"><Info className="w-5 h-5" /></div>
              <div>
                  <h4 className="font-bold text-blue-900 mb-1">Need help?</h4>
                  <p className="text-sm text-blue-800/70">Click the AI chat bubble anytime for real-time guidance while you work.</p>
              </div>
          </div>
        </div>
      </div>

      {/* Shopping List Modal */}
      {showShoppingList && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-white p-10 rounded-[2.5rem] max-w-2xl w-full relative shadow-2xl animate-in zoom-in-95 duration-300 max-h-[80vh] flex flex-col">
            <button onClick={() => setShowShoppingList(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
                <XIcon className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                    <ShoppingCart className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Smart Shopping List</h3>
                    <p className="text-gray-500">Organized by store section for maximum efficiency.</p>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                {!shoppingList ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-4">
                        <Loader2Icon className="w-8 h-8 text-orange-600 animate-spin" />
                        <p className="text-gray-500 font-medium">Generating your list with AI...</p>
                    </div>
                ) : (
                    <div className="prose prose-orange max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {shoppingList}
                    </div>
                )}
            </div>

            <div className="mt-8 flex gap-4">
                <button 
                    onClick={() => window.print()}
                    className="flex-1 bg-white border-2 border-gray-100 hover:border-gray-200 py-4 rounded-2xl font-bold text-gray-700 transition-all"
                >
                    Print List
                </button>
                <button 
                    onClick={() => setShowShoppingList(false)}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg transition-all"
                >
                    Done
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const XIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const Loader2Icon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
);

export default ProjectDetailView;
