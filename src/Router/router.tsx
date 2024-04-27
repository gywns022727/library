import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "@/Pages/Main";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
