/* eslint-disable react/prop-types */
export default function Button({ topic }) {
  return (
    <button className="btn overflow-hidden relative w-64 bg-green-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-blue-500 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-blue-200 hover:before:animate-ping transition-all duration-300">
      <span className="relative">{topic}</span>
    </button>
  );
}
