import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import Dashboard from '@/pages/Dashboard';
import Projects from '@/pages/Projects';
import Proposals from '@/pages/Proposals';
import Contracts from '@/pages/Contracts';
import Wallet from '@/pages/Wallet';
import Reputation from '@/pages/Reputation';
import Portfolio from '@/pages/Portfolio';
import Settings from '@/pages/Settings';

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="proposals" element={<Proposals />} />
        <Route path="contracts" element={<Contracts />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="reputation" element={<Reputation />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
