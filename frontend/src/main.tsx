import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0providerNavigate } from "./auth/Auth0providerNavigate";
import { AppRoutes } from "./AppRoutes.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus:false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Auth0providerNavigate>
          <AppRoutes />
        </Auth0providerNavigate>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
