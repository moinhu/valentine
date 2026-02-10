import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Message from "./pages/Message";
import Gift from "./pages/Gift";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/message" element={<Message />} />
      <Route path="/gift" element={<Gift />} />
    </Routes>
  );
}
