import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/dashboard/sidebar';
import { NavbarWrapper } from '@/components/dashboard/navbar-wrapper';

export function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-80">
        <NavbarWrapper />
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
