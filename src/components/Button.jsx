// src/components/Button.jsx
export default function Button({ label, variant = "primary", onClick }) {
  const baseStyle =
    "px-4 py-2 rounded font-semibold transition duration-200 focus:outline-none";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
