import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="641386597689-kc2i9rcq6as8lgugdlk3seouv5qpqvqv.apps.googleusercontent.com">
  <App />
</GoogleOAuthProvider>
)
