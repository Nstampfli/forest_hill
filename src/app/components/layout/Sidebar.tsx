import { FaChartLine, FaPen, FaRobot } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => (
  <aside className="fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-gray-100 dark:bg-gray-800 p-4 shadow-md flex flex-col md:block hidden">
    <div className="flex flex-col space-y-4">
      <SidebarItem
        icon={<FaChartLine className="mr-2" />}
        label="Statistiques"
        active={activeTab === 'stats'}
        onClick={() => setActiveTab('stats')}
      />
      <SidebarItem
        icon={<FaPen className="mr-2" />}
        label="Mes Performances"
        active={activeTab === 'performance'}
        onClick={() => setActiveTab('performance')}
      />
      <SidebarItem
        icon={<FaRobot className="mr-2" />}
        label="Conseiller Sportif"
        active={activeTab === 'chatbot'}
        onClick={() => setActiveTab('chatbot')}
      />
    </div>
  </aside>
);

const SidebarItem = ({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) => (
  <div
    className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-300 ${active ? 'bg-primary-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2 font-medium">{label}</span>
  </div>
);

export default Sidebar;
