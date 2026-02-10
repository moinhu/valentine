import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      <div className="text-7xl animate-bounce mb-6">💌</div>

      <h1 className="text-2xl font-semibold text-pink-700">
        Hey Alisha 💖
      </h1>
      <p className="text-gray-700 mt-2">
        Moin sent you something
      </p>

      <button
        onClick={() => navigate("/message")}
        className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
      >
        Open
      </button>
    </div>
  );
}
