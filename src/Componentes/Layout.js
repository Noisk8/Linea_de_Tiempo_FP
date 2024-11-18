import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col pt-4 items-center pb-8">
      <nav className="pb-8">
        <ul className="flex space-x-4 items-center text-center">
          <li className="text-4xl font-bold hover:text-blue-500">
            <Link to="./Notas">Acerca de</Link>
          </li>
          <li className="text-4xl font-bold hover:text-blue-500">
            <Link to="./Timeline">Timeline</Link>
          </li>
          <li className="text-4xl font-bold hover:text-blue-500">
            <Link to="./Referencias">Referencias</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
