'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Briefcase, CheckCircle, Send, Star } from 'lucide-react';

interface AnalyticsCardProps {
  label: string;
  value: string;
  trend: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  CheckCircle: <CheckCircle className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
};

export function AnalyticsCard({ label, value, trend, icon }: AnalyticsCardProps) {
  const isTrendPositive = trend.startsWith('+');

  return (
    <motion.div
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          {iconMap[icon]}
        </div>
        <motion.div
          className={`text-sm font-semibold px-2 py-1 rounded-md ${
            isTrendPositive
              ? 'bg-green-500/20 text-green-500'
              : 'bg-red-500/20 text-red-500'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {trend}
        </motion.div>
      </div>
      <p className="text-muted-foreground text-sm mb-2">{label}</p>
      <motion.h3
        className="text-2xl font-bold text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {value}
      </motion.h3>
    </motion.div>
  );
}
