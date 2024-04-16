import { useDispatch, useSelector } from "react-redux";
import Blog from "../../components/blog/Blog";
import Collection from "../../components/collection/Collection";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import NewArrival from "../../components/new arrival/NewArrival";
import Statistics from "../../components/statistics/Statistics";
import { addUser } from "../../RTK/Slices/userSlice";
import { useEffect, useState } from "react";
import baseUrl from "../../variables/variables";
import axios from "axios";

const Home = () => {
  const [count, setCount] = useState(0);
  const user = JSON.parse(window.localStorage.getItem("user"))?.data; // Added ?.data to handle potential null
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(addUser(user));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      fetch(`${baseUrl}/Cart/count`, {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + user.token
        }
      })
      .then(res => res.json())
      .then(data => setCount(data))
      .catch(error => console.error('Error fetching cart count:', error));
    }
  }, [user]);

  console.log(user);
  
  return (
    <>
      <header className="header">
        <Navbar/>
        <Hero />
      </header>
      <Collection />
      <NewArrival />
      <Statistics />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
