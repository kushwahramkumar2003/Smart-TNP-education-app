<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from "./Components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
>>>>>>> b62d4d74b875fe8b911146dfc4221587cb46c218
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <App />
<<<<<<< HEAD
    <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
)
=======
  </React.StrictMode>
);
>>>>>>> b62d4d74b875fe8b911146dfc4221587cb46c218
