export function getHeaders() {
  const token = localStorage.getItem("token");

  return {
    "x-auth-token": token,
  };
}
