export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-600">This is my portfolio page.</p>
      <div className="container">
        <div className="grid grid-cols-4"></div>
      </div>
    </div>
  );
}
