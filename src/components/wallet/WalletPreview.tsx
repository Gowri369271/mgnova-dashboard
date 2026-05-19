'use client';

import { motion } from 'framer-motion';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { transactions } from '@/data/mockData';

export function WalletPreview() {
  const balance = 12450;
  const pending = 2800;
  const recentTransactions = transactions.slice(0, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Wallet Card */}
      <motion.div
        className="lg:col-span-2 bg-gradient-to-br from-primary to-primary/70 rounded-xl p-8 text-primary-foreground shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <Wallet size={24} />
            <span className="font-semibold">MGNOVA Wallet</span>
          </div>
          <TrendingUp size={24} />
        </div>

        <div className="mb-8">
          <p className="text-sm opacity-80 mb-2">Available Balance</p>
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            ${balance.toLocaleString()}
          </motion.h2>
        </div>

        <div className="flex gap-4">
          <motion.button
            className="px-6 py-2 bg-primary-foreground text-primary font-medium rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Withdraw
          </motion.button>
          <motion.button
            className="px-6 py-2 border border-primary-foreground/50 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Deposit
          </motion.button>
        </div>
      </motion.div>

      {/* Pending Payouts Card */}
      <motion.div
        className="bg-card border border-border rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.02, y: -4 }}
      >
        <p className="text-muted-foreground text-sm mb-2">Pending Payouts</p>
        <motion.h3
          className="text-3xl font-bold text-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          ${pending.toLocaleString()}
        </motion.h3>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">From 2 contracts</span>
            <span className="text-primary font-semibold">+5%</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        className="lg:col-span-3 bg-card border border-border rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="font-bold text-foreground mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {recentTransactions.map((txn, index) => (
            <motion.div
              key={txn.id}
              className="flex items-center justify-between p-3 hover:bg-accent/10 rounded-lg transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${txn.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                  {txn.type === 'income' ? (
                    <ArrowDownLeft className={txn.type === 'income' ? 'text-green-500' : 'text-red-500'} size={16} />
                  ) : (
                    <ArrowUpRight className={txn.type === 'income' ? 'text-green-500' : 'text-red-500'} size={16} />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{txn.description}</p>
                  <p className="text-muted-foreground text-xs">{txn.date}</p>
                </div>
              </div>
              <span className={`font-bold ${txn.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                {txn.amount}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
