import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Nav from "../components/Navbar";
import HeroSection from "../components/Dashboard/HeroSection";
import Forum from "../components/Forum";
import Docs from "../components/Dashboard/Docs";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       navigate("/login");
  //     }
  //     const { data } = await axios.post(
  //       "http://localhost:8000",
  //       {},
  //       { withCredentials: true }
  //     );
  //     const { status, user } = data;
  //     setUsername(user);

  //     if (!status) {
  //       removeCookie("token");
  //       navigate("/login");
  //     }
  //   };
  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);

  return (
    <>
      <Nav />
      <Docs  />
    </>
  );
};

export default Dashboard;
