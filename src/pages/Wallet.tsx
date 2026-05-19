import { motion } from 'framer-motion';
import { WalletPreview } from '@/components/wallet/WalletPreview';
import { Wallet, TrendingUp } from 'lucide-react';

export default function WalletPage() {
  const earnings = [
    { month: 'Jan', amount: 2400 },
    { month: 'Feb', amount: 3200 },
    { month: 'Mar', amount: 2800 },
    { month: 'Apr', amount: 3600 },
    { month: 'May', amount: 4200 },
    { month: 'Jun', amount: 3900 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Wallet className="text-primary" size={32} />
          Wallet & Earnings
        </h1>
        <p className="text-muted-foreground mt-1">Track your income and manage payouts</p>
      </div>

      {/* Earnings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Earned', value: '$24,100', change: '+12.5%' },
          { label: 'Pending Payouts', value: '$3,400', change: '+2.3%' },
          { label: 'This Month', value: '$3,900', change: '+15.2%' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <p className="text-muted-foreground text-sm font-medium mb-2">{stat.label}</p>
            <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
            <p className="text-green-500 text-sm flex items-center gap-1">
              <TrendingUp size={16} />
              {stat.change}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Wallet Preview */}
      <WalletPreview />
    </motion.div>
  );
}
