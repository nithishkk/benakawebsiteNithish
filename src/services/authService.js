// src/services/authService.js

import {jwtDecode} from "jwt-decode";

const TOKEN_URL = "https://aapi.benakajewellers.com/token";

// 🔹 Get new token
export const getToken = async () => {
  try {
    const body = new URLSearchParams();
    body.append("grant_type", "");
    body.append("username", "veeranna.ravi.kumar@benakagroups.com");
    body.append("password", "Password@456");
    body.append("scope", "");
    body.append("client_id", "");
    body.append("client_secret", "");

    const response = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: body.toString(),
    });

    const data = await response.json();

    if (data?.accessToken) {
      localStorage.setItem("token", data.accessToken);
      return data.accessToken;
    }

    throw new Error("Token not received");
  } catch (error) {
    console.error("Token API error:", error);
    return null;
  }
};

// 🔹 Check token validity
export const getValidToken = async () => {
  let token = localStorage.getItem("token");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      // 🔥 If expired → refresh
      if (decoded.exp < currentTime) {
        token = await getToken();
      }
    } catch (e) {
      token = await getToken();
    }
  } else {
    token = await getToken();
  }

  return token;
};