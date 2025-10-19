// src/hooks/useAuth.js
import { useState } from "react";

export const useAuth = () => {
  // ✅ in real app you get auth from context or storage
  const [isAuthenticated] = useState(true); 
  return { isAuthenticated };
};
