'use client';

import { motion } from 'framer-motion';
import { Sidebar } from '@/components/dashboard/sidebar';
import { NavbarWrapper } from '@/components/dashboard/navbar-wrapper';
import { AnalyticsCard } from '@/components/analytics/AnalyticsCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProposalTable } from '@/components/proposals/ProposalTable';
import { WalletPreview } from '@/components/wallet/WalletPreview';
import { mockUser, analyticsCards, projects } from '@/data/mockData';
import { Zap, Trophy, CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-80">
        {/* Navbar */}
        <NavbarWrapper />

        {/* Page Content */}
        <motion.div
          className="p-6 lg:p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome Section */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Welcome back, {mockUser.name.split(' ')[0]}
                </h1>
                <p className="text-muted-foreground text-lg">Here&apos;s your activity overview</p>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Trophy className="text-yellow-500" size={20} />
                  <span className="text-sm font-semibold text-foreground">Reputation: {mockUser.reputation}</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {mockUser.badges.map((badge) => (
                    <motion.span
                      key={badge}
                      className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="mt-6 bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Profile Completion</p>
                <p className="text-sm font-bold text-primary">{mockUser.profileCompletion}%</p>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${mockUser.profileCompletion}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Analytics Cards Grid */}
          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {analyticsCards.map((card) => (
                <AnalyticsCard
                  key={card.id}
                  label={card.label}
                  value={card.value}
                  trend={card.trend}
                  icon={card.icon}
                />
              ))}
            </div>
          </motion.section>

          {/* Discover Projects Section */}
          <motion.section className="mb-12" variants={itemVariants}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Zap className="text-primary" size={28} />
                  Discover Projects
                </h2>
                <p className="text-muted-foreground mt-1">Based on your skills and experience</p>
              </div>
              <motion.button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hidden sm:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All
              </motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} {...project} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Proposal History Section */}
          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Proposal History</h2>
            <ProposalTable />
          </motion.section>

          {/* Wallet Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="text-green-500" size={28} />
              Your Wallet
            </h2>
            <WalletPreview />
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}
