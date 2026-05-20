export const mockUser = {
  id: '1',
  name: 'Zera',
  email: 'zera@mgnova.dev',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zera',
  reputation: 4.8,
  badges: ['Top Rated', 'Fast Delivery'],
  profileCompletion: 92,
};

export const analyticsCards = [
  { id: '1', label: 'Total Earnings', value: '$12,450', trend: '+12%', icon: 'TrendingUp' },
  { id: '2', label: 'Pending Payouts', value: '$2,800', trend: '+5%', icon: 'Clock' },
  { id: '3', label: 'Active Projects', value: '4', trend: '+1', icon: 'Briefcase' },
  { id: '4', label: 'Completed Projects', value: '28', trend: '+3', icon: 'CheckCircle' },
  { id: '5', label: 'Proposals Sent', value: '45', trend: '+8', icon: 'Send' },
  { id: '6', label: 'Shortlisted', value: '12', trend: '+2', icon: 'Star' },
];

export const projects = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    client: 'TechCorp Inc.',
    budget: '$5,000 - $8,000',
    timeline: '3-4 months',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
    matchScore: 92,
    description: 'Complete redesign of our e-commerce platform',
  },
  {
    id: '2',
    title: 'Mobile App Development',
    client: 'StartupXYZ',
    budget: '$3,000 - $5,000',
    timeline: '2-3 months',
    skills: ['React Native', 'Firebase', 'TypeScript'],
    matchScore: 85,
    description: 'Building a cross-platform mobile application',
  },
  {
    id: '3',
    title: 'API Integration & Optimization',
    client: 'CloudServices Ltd.',
    budget: '$2,000 - $3,500',
    timeline: '4-6 weeks',
    skills: ['Node.js', 'PostgreSQL', 'REST APIs'],
    matchScore: 88,
    description: 'Integrate third-party APIs and optimize existing services',
  },
  {
    id: '4',
    title: 'Data Analytics Dashboard',
    client: 'DataViz Corp',
    budget: '$4,000 - $6,000',
    timeline: '6-8 weeks',
    skills: ['React', 'D3.js', 'Python', 'SQL'],
    matchScore: 79,
    description: 'Build comprehensive analytics dashboard',
  },
  {
    id: '5',
    title: 'Brand Website Development',
    client: 'Creative Agency Co.',
    budget: '$3,500 - $5,500',
    timeline: '6-8 weeks',
    skills: ['Next.js', 'Tailwind CSS', 'Figma'],
    matchScore: 86,
    description: 'Create stunning brand website with modern design',
  },
  {
    id: '6',
    title: 'Performance Optimization',
    client: 'HighSpeed Media',
    budget: '$1,500 - $2,500',
    timeline: '2-3 weeks',
    skills: ['Web Performance', 'SEO', 'DevTools'],
    matchScore: 91,
    description: 'Optimize website speed and SEO',
  },
];

export const proposals = [
  {
    id: 'P001',
    projectName: 'E-commerce Platform Redesign',
    budget: '$6,500',
    timeline: '3.5 months',
    date: '2024-05-15',
    status: 'accepted',
  },
  {
    id: 'P002',
    projectName: 'Mobile App Development',
    budget: '$4,200',
    timeline: '2.5 months',
    date: '2024-05-12',
    status: 'shortlisted',
  },
  {
    id: 'P003',
    projectName: 'Data Analytics Dashboard',
    budget: '$5,000',
    timeline: '7 weeks',
    date: '2024-05-08',
    status: 'applied',
  },
  {
    id: 'P004',
    projectName: 'Brand Website Development',
    budget: '$4,500',
    timeline: '7 weeks',
    date: '2024-05-01',
    status: 'rejected',
  },
];

export const contracts = [
  {
    id: 'C001',
    projectName: 'E-commerce Platform Redesign',
    client: 'TechCorp Inc.',
    startDate: '2024-05-20',
    endDate: '2024-08-20',
    totalAmount: '$6,500',
    paidAmount: '$2,600',
    status: 'active',
    milestones: [
      { id: 'M1', title: 'Design & Wireframes', amount: '$1,300', status: 'completed', dueDate: '2024-06-03' },
      { id: 'M2', title: 'Frontend Development', amount: '$2,600', status: 'in-progress', dueDate: '2024-07-05' },
      { id: 'M3', title: 'Backend Integration', amount: '$1,950', status: 'pending', dueDate: '2024-08-10' },
      { id: 'M4', title: 'Testing & Deployment', amount: '$650', status: 'pending', dueDate: '2024-08-20' },
    ],
  },
  {
    id: 'C002',
    projectName: 'API Integration Services',
    client: 'StartupXYZ',
    startDate: '2024-04-15',
    endDate: '2024-06-15',
    totalAmount: '$3,200',
    paidAmount: '$3,200',
    status: 'completed',
    milestones: [
      { id: 'M5', title: 'API Documentation', amount: '$800', status: 'completed', dueDate: '2024-04-30' },
      { id: 'M6', title: 'Integration Development', amount: '$1,600', status: 'completed', dueDate: '2024-06-01' },
      { id: 'M7', title: 'Testing & Deployment', amount: '$800', status: 'completed', dueDate: '2024-06-15' },
    ],
  },
];

export const transactions = [
  { id: '1', description: 'Payment from TechCorp Inc.', amount: '+$2,600', date: '2024-05-18', status: 'completed', type: 'income' },
  { id: '2', description: 'Withdrawal to Bank Account', amount: '-$1,000', date: '2024-05-16', status: 'completed', type: 'withdrawal' },
  { id: '3', description: 'Platform Fee', amount: '-$130', date: '2024-05-15', status: 'completed', type: 'fee' },
  { id: '4', description: 'Payment from StartupXYZ', amount: '+$1,600', date: '2024-05-10', status: 'completed', type: 'income' },
  { id: '5', description: 'Withdrawal to Bank Account', amount: '-$2,000', date: '2024-05-05', status: 'completed', type: 'withdrawal' },
];

export const notifications = [
  { id: '1', title: 'New Project Match', message: 'You have 3 new project matches', timestamp: 'now', type: 'info', read: false },
  { id: '2', title: 'Proposal Accepted', message: 'Your proposal for E-commerce redesign was accepted', timestamp: '2h ago', type: 'success', read: false },
  { id: '3', title: 'Payment Received', message: '$2,600 has been added to your wallet', timestamp: '4h ago', type: 'success', read: true },
  { id: '4', title: 'Milestone Completed', message: 'Design & Wireframes milestone completed', timestamp: '1d ago', type: 'info', read: true },
  { id: '5', title: 'Review Request', message: 'Client has left a review on your profile', timestamp: '2d ago', type: 'info', read: true },
];
