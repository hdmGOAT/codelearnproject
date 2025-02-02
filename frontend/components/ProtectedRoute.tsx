"use client";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import apiClient from "@/lib/services/api/apiClient";
import { refreshToken } from "@/lib/services/api/authService";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        console.log("🔍 Checking authentication...");

        // ✅ Attempt to fetch user profile (this forces token validation)
        await apiClient.get("/auth/user/");

        console.log("✅ User authenticated.");
        setLoading(false); // ✅ Allow page rendering
      } catch (error) {
        if ((error as any).response?.status === 401) {
          console.log("🔄 Token expired, trying to refresh...");

          // ✅ Try refreshing the access token
          const newToken = await refreshToken();

          if (newToken) {
            console.log("✅ Token refreshed, retrying user fetch...");
            await apiClient.get("/auth/user/");
            setLoading(false);
          } else {
            console.error("❌ Token refresh failed. Redirecting to login.");
            router.push("/login"); // Redirect if refresh fails
          }
        } else {
          console.error("❌ Other authentication error. Redirecting to login.");
          router.push("/login");
        }
      }
    }

    checkAuth();
  }, []);

  if (loading) return <p>Loading...</p>; // Show loading screen until authentication is verified

  return <>{children}</>;
}
