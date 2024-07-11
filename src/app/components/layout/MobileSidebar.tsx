import { FaChartLine, FaPen, FaRobot } from 'react-icons/fa';

const MobileSidebar = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 shadow-md flex justify-around md:hidden p-2">
    <SidebarButton
      icon={<FaChartLine size="24" />}
      active={activeTab === 'stats'}
      onClick={() => setActiveTab('stats')}
    />
    <SidebarButton
      icon={<FaPen size="24" />}
      active={activeTab === 'performance'}
      onClick={() => setActiveTab('performance')}
    />
    <SidebarButton
      icon={<FaRobot size="24" />}
      active={activeTab === 'chatbot'}
      onClick={() => setActiveTab('chatbot')}
    />
  </div>
);

const SidebarButton = ({ icon, active, onClick }: { icon: React.ReactNode; active: boolean; onClick: () => void }) => (
  <button
    className={`flex items-center justify-center p-4 rounded-full transition-colors duration-300 ${
      active ? 'bg-primary-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`}
    onClick={onClick}
  >
    {icon}
  </button>
);

export default MobileSidebar;
