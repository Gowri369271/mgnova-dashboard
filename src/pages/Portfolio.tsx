import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: '2',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization',
      tags: ['React', 'TypeScript', 'Recharts'],
      link: '#',
    },
    {
      id: '3',
      title: 'Mobile App',
      description: 'React Native mobile application for iOS and Android',
      tags: ['React Native', 'Firebase'],
      link: '#',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <FolderOpen className="text-primary" size={32} />
          My Portfolio
        </h1>
        <p className="text-muted-foreground mt-1">Showcase of my best work and achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-colors"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <FolderOpen className="text-primary/50" size={64} />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={item.link}
                className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-70 transition-opacity"
                whileHover={{ x: 4 }}
              >
                View Project
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
