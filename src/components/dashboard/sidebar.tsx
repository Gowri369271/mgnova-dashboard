import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Menu, LayoutDashboard, Briefcase, FileText, FileCheck, Wallet, Trophy, FolderOpen, Settings } from 'lucide-react';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: FolderOpen, label: 'Discover Projects', href: '/projects' },
  { icon: Briefcase, label: 'Proposals', href: '/proposals' },
  { icon: FileCheck, label: 'Contracts', href: '/contracts' },
  { icon: Wallet, label: 'Wallet', href: '/wallet' },
  { icon: Trophy, label: 'Reputation', href: '/reputation' },
  { icon: FolderOpen, label: 'Portfolio', href: '/portfolio' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.aside
      className="bg-sidebar border-r border-sidebar-border h-screen overflow-y-auto flex flex-col fixed left-0 top-0 z-40"
      animate={{ width: isOpen ? 280 : 80 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-sidebar-border">
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <h1 className="text-xl font-bold text-sidebar-foreground">MGNOVA</h1>
        </motion.div>
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors text-sidebar-foreground"
        >
          {isOpen ? <ChevronRight size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.label} to={item.href}>
              {({ isActive }) => (
                <motion.div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  <motion.span
                    animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-sidebar-foreground/60 text-center"
        >
          {isOpen && <p>© 2024 MGNOVA</p>}
        </motion.div>
      </div>
    </motion.aside>
  );
}
