import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./global.css";
import "./style.css";
import "./tailwind.config";
import Index from "./pages/Index";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
