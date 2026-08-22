import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
