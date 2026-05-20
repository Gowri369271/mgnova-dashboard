import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  client: string;
  budget: string;
  timeline: string;
  skills: string[];
  matchScore: number;
  description: string;
  index?: number;
  onGenerateProposal?: () => void;
}

export function ProjectCard({
  title,
  client,
  budget,
  timeline,
  skills,
  matchScore,
  description,
  index = 0,
  onGenerateProposal,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all h-full flex flex-col"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-foreground text-lg line-clamp-2">{title}</h3>
        </div>
        <p className="text-primary text-sm font-medium mb-1">{client}</p>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </div>

      {/* Match Score */}
      <div className="mb-4 flex items-center gap-2">
        <div className="relative w-12 h-12">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-border"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - matchScore / 100)}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - matchScore / 100) }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
            {matchScore}%
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">AI Match</p>
          <p className="text-sm font-semibold text-foreground">Very High</p>
        </div>
      </div>

      {/* Budget & Timeline */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Budget</p>
          <p className="font-semibold text-primary text-sm">{budget}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Timeline</p>
          <p className="font-semibold text-foreground text-sm">{timeline}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2">Required Skills</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={onGenerateProposal}
        type="button"
        className="mt-auto w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Zap size={16} />
        Generate Proposal
        <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
}
