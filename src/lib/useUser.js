import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {


 /*  let address = `https://msmes.io//api.php?regid=get_menus&_id=adeniyijamesa@gmail.com`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
   
  
 
 
  const { data } = useSWR( address, fetcher)
  console.log("i am data", data)
   */
  
  const { data: user, mutate: mutateUser } = useSWR("/api/user/user");
  console.log("God mode: ",{user})

  // let address = `https://msmes.io//api.php?regid=get_menus&_id=${user.email}`;
  // const fetcher = async (url) => await axios.get(url).then((res) => res.data);
   
  
 
 
  // const { data } = useSWR( address, fetcher)
  // console.log("i am data", data)
    
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;
  
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  
  return { user, mutateUser };
}