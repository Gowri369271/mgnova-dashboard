'use client';

import { motion } from 'framer-motion';
import { Check, X, Clock, AlertCircle } from 'lucide-react';
import { proposals } from '@/data/mockData';

export function ProposalTable() {
  const statusConfig = {
    accepted: { bg: 'bg-green-500/20', text: 'text-green-500', icon: Check, label: 'Accepted' },
    shortlisted: { bg: 'bg-yellow-500/20', text: 'text-yellow-500', icon: AlertCircle, label: 'Shortlisted' },
    applied: { bg: 'bg-blue-500/20', text: 'text-blue-500', icon: Clock, label: 'Applied' },
    rejected: { bg: 'bg-red-500/20', text: 'text-red-500', icon: X, label: 'Rejected' },
  };

  return (
    <motion.div
      className="bg-card border border-border rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-accent/10">
              <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">ID</th>
              <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Project Name</th>
              <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Budget</th>
              <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Timeline</th>
              <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Date</th>
              <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => {
              const config = statusConfig[proposal.status as keyof typeof statusConfig];
              const StatusIcon = config.icon;
              return (
                <motion.tr
                  key={proposal.id}
                  className="border-b border-border hover:bg-accent/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <td className="px-6 py-4 text-sm text-muted-foreground font-mono">{proposal.id}</td>
                  <td className="px-6 py-4 text-sm text-foreground font-medium max-w-xs truncate">{proposal.projectName}</td>
                  <td className="px-6 py-4 text-sm text-primary font-semibold">{proposal.budget}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{proposal.timeline}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{proposal.date}</td>
                  <td className="px-6 py-4">
                    <motion.div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-md font-medium text-xs ${config.bg} ${config.text}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <StatusIcon size={14} />
                      {config.label}
                    </motion.div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
