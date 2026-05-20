'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface MilestoneCardProps {
  title: string;
  amount: string;
  status: 'completed' | 'in-progress' | 'pending';
  dueDate: string;
  index?: number;
}

export function MilestoneCard({
  title,
  amount,
  status,
  dueDate,
  index = 0,
}: MilestoneCardProps) {
  const statusConfig = {
    completed: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/20', label: 'Completed' },
    'in-progress': { icon: AlertCircle, color: 'text-yellow-500', bg: 'bg-yellow-500/20', label: 'In Progress' },
    pending: { icon: Clock, color: 'text-blue-500', bg: 'bg-blue-500/20', label: 'Pending' },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-foreground text-sm">{title}</h4>
        <motion.div
          className={`p-2 rounded-lg ${config.bg}`}
          whileHover={{ scale: 1.1 }}
        >
          <StatusIcon className={`w-4 h-4 ${config.color}`} />
        </motion.div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-bold text-primary">{amount}</p>
        <span className={`text-xs font-medium px-2 py-1 rounded-md ${config.bg} ${config.color}`}>
          {config.label}
        </span>
      </div>

      <p className="text-xs text-muted-foreground">Due: {dueDate}</p>
    </motion.div>
  );
}
