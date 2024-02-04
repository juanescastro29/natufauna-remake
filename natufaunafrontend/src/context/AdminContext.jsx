import { createContext, useEffect, useMemo, useState } from "react";

export const AdminContext = createContext();

function AdminProvider({ children }) {
  const [admin, setAdmin] = useState();
  const [adminSession, setAdminSession] = useState();

  useEffect(() => {
    setAdmin(JSON.parse(window.localStorage.getItem("admin")) ?? null);
    setAdminSession(window.localStorage.getItem("adminSession") ?? false);
  }, []);

  const values = useMemo(
    () => ({
      admin,
      adminSession,
      setAdmin,
      setAdminSession,
    }),
    [admin, adminSession]
  );

  return <AdminContext.Provider value={values}>{children}</AdminContext.Provider>;
}

export default AdminProvider;
