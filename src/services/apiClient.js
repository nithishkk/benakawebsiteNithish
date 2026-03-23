// src/services/apiClient.js

import { getValidToken } from "./authService";

export const apiRequest = async (url, options = {}) => {
  try {
    const token = await getValidToken();

    const response = await fetch(url, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });

    // 🔥 If token expired during request → retry once
    if (response.status === 401) {
      const newToken = await getValidToken();

      const retryResponse = await fetch(url, {
        ...options,
        headers: {
          Accept: "application/json",
          ...(options.headers || {}),
          Authorization: `Bearer ${newToken}`,
        },
      });

      return retryResponse.json();
    }

    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};