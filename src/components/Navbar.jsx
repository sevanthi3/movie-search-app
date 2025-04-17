import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-violet-600 to-violet-800 text-white px-4 py-3 shadow text-lg">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2 text-lg ">Movie Search🎥</Link>
        <Link to="/favorites" className="hover:underline font-bold">Favorites⭐</Link>
      </div>
    </nav>
  );
};

export default Navbar;