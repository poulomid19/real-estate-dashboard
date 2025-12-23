import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-row font-semibold text-lg bg-gray-100 max-w-fit h-full px-4 pt-4  min-h-screen">
      <nav className="flex flex-col py-2">
        <Link to="/admin/projects" className="p-2 hover:bg-gray-400">Projects</Link>
        <Link to="/admin/add-project" className="p-2 hover:bg-gray-400">Add Projects</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
