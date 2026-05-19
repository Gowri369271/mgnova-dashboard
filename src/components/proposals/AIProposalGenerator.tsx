import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Sparkles, Send, RefreshCw, Edit2, Check } from 'lucide-react';

interface AIProposalGeneratorProps {
  onClose: () => void;
}

export function AIProposalGenerator({ onClose }: AIProposalGeneratorProps) {
  const [step, setStep] = useState<'input' | 'generating' | 'result'>('input');
  const [projectTitle, setProjectTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [generatedProposal, setGeneratedProposal] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleGenerate = async () => {
    if (!projectTitle.trim()) return;
    
    setStep('generating');
    
    // Simulate AI generation
    setTimeout(() => {
      const proposal = `Subject: Experienced Developer Ready to Deliver Excellence

Dear Client,

I am very interested in your project: "${projectTitle}". With my extensive experience in web development and proven track record of delivering high-quality solutions, I am confident I can exceed your expectations.

What I Offer:
• Clean, maintainable, and scalable code
• On-time delivery with regular progress updates
• Thorough testing and quality assurance
• Post-launch support and maintenance

Budget: $${budget || 'Negotiable'}

I look forward to discussing your project requirements in detail. I'm ready to start immediately and am committed to making this project a success.

Best regards,
Your Name`;
      
      setGeneratedProposal(proposal);
      setStep('result');
    }, 2000);
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  const handleSubmit = () => {
    // Handle submission
    alert('Proposal submitted successfully!');
    onClose();
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">AI Proposal Generator</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'input' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="Enter the project title"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Suggested Budget (Optional)
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g., 5000"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <motion.button
                onClick={handleGenerate}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={18} />
                Generate Proposal
              </motion.button>
            </motion.div>
          )}

          {step === 'generating' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-12 gap-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="text-primary" size={48} />
              </motion.div>
              <p className="text-foreground font-medium">Generating your proposal...</p>
              <p className="text-muted-foreground text-sm">Using AI to craft the perfect pitch</p>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {isEditing ? (
                <textarea
                  value={generatedProposal}
                  onChange={(e) => setGeneratedProposal(e.target.value)}
                  className="w-full h-72 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              ) : (
                <div className="bg-background border border-border rounded-lg p-4 h-72 overflow-y-auto whitespace-pre-wrap text-foreground text-sm leading-relaxed">
                  {generatedProposal}
                </div>
              )}

              <div className="flex gap-3">
                <motion.button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isEditing ? (
                    <>
                      <Check size={18} />
                      Done Editing
                    </>
                  ) : (
                    <>
                      <Edit2 size={18} />
                      Edit
                    </>
                  )}
                </motion.button>
                <motion.button
                  onClick={handleRegenerate}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RefreshCw size={18} />
                  Regenerate
                </motion.button>
              </div>

              <motion.button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Submit Proposal
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
