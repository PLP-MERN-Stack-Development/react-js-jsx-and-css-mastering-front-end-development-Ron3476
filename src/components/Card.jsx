// src/components/Card.jsx
export default function Card({ title, content }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
}
