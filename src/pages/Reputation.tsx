import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

export default function Reputation() {
  const badges = [
    { id: '1', name: 'Rising Star', description: 'Completed 10 projects', icon: '⭐' },
    { id: '2', name: 'Quality Master', description: '5.0 rating average', icon: '✨' },
    { id: '3', name: 'On-Time Pro', description: '100% on-time delivery', icon: '⏱️' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Trophy className="text-yellow-500" size={32} />
          Your Reputation
        </h1>
        <p className="text-muted-foreground mt-1">Build trust with clients through your achievements</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Overall Rating', value: '4.9', max: '/5.0' },
          { label: 'Completed Projects', value: '32', max: '' },
          { label: 'Success Rate', value: '98%', max: '' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg p-6 text-center"
          >
            <p className="text-muted-foreground text-sm font-medium mb-2">{stat.label}</p>
            <h3 className="text-3xl font-bold text-primary">
              {stat.value}<span className="text-lg text-foreground">{stat.max}</span>
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Badges */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Your Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <h3 className="font-bold text-foreground mb-1">{badge.name}</h3>
              <p className="text-muted-foreground text-sm">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Reviews</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-foreground">Project Client</h3>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Great work! Very professional and delivered on time.</p>
              <p className="text-xs text-muted-foreground mt-2">2 weeks ago</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
