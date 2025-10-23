export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-blue-400">MyReactApp</h1>

      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Projects</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>
    </nav>
  );
}
