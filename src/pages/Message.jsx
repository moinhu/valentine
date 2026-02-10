import { useNavigate } from "react-router-dom";

const traits = ["Cute 🥰", "Short 😄", "Angry Bird 😡🐦"];

export default function Message() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-red-600 mb-8">
        I know you are...
      </h2>

      <div className="flex gap-4 mb-10">
        {traits.map((item) => (
          <button
            key={item}
            className="px-4 py-2 bg-white border border-red-300 rounded-full shadow hover:scale-110 transition"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/gift")}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Click to reveal your gift 🎁
      </button>
    </div>
  );
}
