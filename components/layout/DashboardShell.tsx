import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopNav />
      <Sidebar />
      <section>{children}</section>
    </div>
  );
}
