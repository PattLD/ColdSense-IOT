import { Link, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
