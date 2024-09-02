import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../hooks"; // Pastikan Anda memiliki hook useAxios untuk melakukan HTTP request
import LogoCirebon from "/images/logocirebon.png"; //

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null berarti tidak ada pengguna yang terautentikasi
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  // useEffect(() => {
  //   axios
  //     .get("/auth")
  //     .then((res) => {
  //       setUser(response.data.user);
  //     })
  //     .catch((error) => {
  //       console.error("Error loading user:", error);
  //       setUser(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // const [role, setRole] = useState(false);
  // const [epdata, setEpdata] = useState();

  useEffect(() => {
    axios
      .get("/auth")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-t-8 border-b-8 border-t-color-orange flex align-middle justify-center">
              <img src={LogoCirebon} alt="-" />
            </div>
            <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-t-8 border-b-8 border-t-color-orange animate-spin"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};