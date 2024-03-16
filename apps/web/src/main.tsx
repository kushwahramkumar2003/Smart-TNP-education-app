import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from "./Components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <App />
    <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
)
