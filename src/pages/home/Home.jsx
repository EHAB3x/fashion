import { useDispatch, useSelector } from "react-redux"
import Blog from "../../components/blog/Blog"
import Collection from "../../components/collection/Collection"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import NewArrival from "../../components/new arrival/NewArrival"
import Statistics from "../../components/statistics/Statistics"
import { addUser } from "../../RTK/Slices/userSlice"
import { useEffect, useState } from "react"
import baseUrl from "../../variables/variables"
import axios from "axios"

const Home = () => {
  const user = useSelector(state => state.user);
  const [count, setCount] = useState(0);
  const userToken = useSelector(state => state.user[0].token);
  const dispatch = useDispatch();
  useEffect(()=>{
    const userData = window.localStorage.getItem("user")
    userData && dispatch(addUser(JSON.parse(userData).data));

    fetch(`${baseUrl}/Cart/count`,{
      method:"get",
      headers : new Headers({
        'Authorization' : 'Bearer ' + userToken
      })
    })
    .then(res => res.json())
    .then(data => setCount(data))
  },[dispatch, userToken])
  return (
    <>
      <header className="header">
        <Navbar cartCount={count}/>
        <Hero />
      </header>
      <Collection />
      <NewArrival />
      <Statistics />
      <Blog />
      <Footer />
    </>
  )
}

export default Home