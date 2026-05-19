import { motion } from 'framer-motion';
import { MilestoneCard } from '@/components/contracts/MilestoneCard';
import { FileCheck } from 'lucide-react';

export default function Contracts() {
  const contracts = [
    {
      id: '1',
      title: 'React Dashboard Development',
      client: 'Tech Startup Inc.',
      status: 'active' as const,
      completionPercentage: 65,
      milestones: [
        { id: '1', title: 'Design Phase', status: 'completed' as const, amount: 500 },
        { id: '2', title: 'Backend Setup', status: 'in-progress' as const, amount: 1500 },
        { id: '3', title: 'Frontend Implementation', status: 'pending' as const, amount: 2000 },
      ],
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <FileCheck className="text-primary" size={32} />
          Active Contracts
        </h1>
        <p className="text-muted-foreground mt-1">Track your ongoing projects and milestones</p>
      </div>

      <div className="space-y-6">
        {contracts.map((contract) => (
          <motion.div
            key={contract.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground">{contract.title}</h2>
              <p className="text-muted-foreground text-sm">{contract.client}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Overall Progress</p>
                <p className="text-sm font-bold text-primary">{contract.completionPercentage}%</p>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${contract.completionPercentage}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>

            {/* Milestones */}
            <div className="space-y-3">
              <h3 className="font-medium text-foreground">Milestones</h3>
              {contract.milestones.map((milestone) => (
                <MilestoneCard key={milestone.id} {...milestone} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
