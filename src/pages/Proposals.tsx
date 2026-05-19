import { motion } from 'framer-motion';
import { ProposalTable } from '@/components/proposals/ProposalTable';
import { useState, useCallback } from 'react';
import { Plus, Sparkles, X } from 'lucide-react';
import { AIProposalGenerator } from '@/components/proposals/AIProposalGenerator';

export default function Proposals() {
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  
  const handleOpenGenerator = useCallback(() => {
    setIsGeneratorOpen(true);
  }, []);

  const statuses = ['all', 'pending', 'accepted', 'rejected'];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Proposals</h1>
            <p className="text-muted-foreground mt-1">Manage your submitted proposals</p>
          </div>
          <button
            onClick={handleOpenGenerator}
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Sparkles size={18} />
            Generate with AI
          </button>
        </div>

        {/* Status Filters */}
        <div className="flex gap-2 flex-wrap">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                statusFilter === status
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:bg-accent'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Proposals Table */}
      <ProposalTable />

      {/* AI Proposal Generator Modal */}
      {isGeneratorOpen && (
        <AIProposalGenerator onClose={() => setIsGeneratorOpen(false)} />
      )}
    </motion.div>
  );
}
