import { useAuthStore } from "@/stores/auth";

export const isLoggedIn = ({ to }) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    /*
     * Save the route that the user intended to follow
     * in order to redirect the user to it after successful authorization
     */
    return { path: "/login", query: { redirect: to.fullPath } };
  } else {
    return true;
  }
};
