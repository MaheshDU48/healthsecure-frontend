// API Configuration
// Base API URL for backend calls
// In production on Vercel, we map this to the Render backend URL.
// In development, it falls back to the local backend.
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8001";

// For production (Render), use your Render URL:
// export const API_URL = "https://healthcare-backend-q3t8.onrender.com";
