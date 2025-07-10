import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

// react query
// 1. Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    // 2. Provide the client to your app
    <QueryClientProvider client={queryClient}>
      {/* using router */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
