'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, User, LogOut, Settings, MoreVertical, Moon, Sun } from 'lucide-react';
import { mockUser, notifications } from '@/data/mockData';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

export function Navbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav className="bg-card/50 backdrop-blur-md border-b border-border sticky top-0 z-30 ml-[80px]">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search Bar */}
        <motion.div
          className="flex-1 max-w-md"
          animate={{ width: isSearchFocused ? '100%' : 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search projects, proposals..."
              className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </motion.div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 ml-6">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </motion.button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 hover:bg-accent/20 rounded-lg transition-colors text-foreground"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <motion.span
                  className="absolute top-1 right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {unreadCount}
                </motion.span>
              )}
            </button>

            {/* Notification Dropdown */}
            <AnimatePresence>
              {isNotificationOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.slice(0, 5).map((notif) => (
                      <motion.div
                        key={notif.id}
                        className="p-4 border-b border-border/50 hover:bg-accent/10 cursor-pointer transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex gap-3">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                            notif.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground text-sm">{notif.title}</p>
                            <p className="text-muted-foreground text-xs mt-1">{notif.message}</p>
                            <p className="text-muted-foreground text-xs mt-2">{notif.timestamp}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 hover:bg-accent/20 rounded-lg transition-colors"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border">
                <Image
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-foreground hidden sm:block">{mockUser.name.split(' ')[0]}</span>
            </button>

            {/* Profile Dropdown Menu */}
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 border-b border-border bg-accent/10">
                    <p className="font-semibold text-foreground">{mockUser.name}</p>
                    <p className="text-muted-foreground text-sm">{mockUser.email}</p>
                  </div>
                  <div className="p-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-accent/20 rounded-lg transition-colors text-foreground text-sm">
                      <User size={16} /> Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-accent/20 rounded-lg transition-colors text-foreground text-sm">
                      <Settings size={16} /> Settings
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-destructive/20 rounded-lg transition-colors text-destructive text-sm">
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
