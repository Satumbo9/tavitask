import Image from "next/image";
import LogIn from "./Ath/LogIn/page";
import SignUp from "./Ath/SignUp/page";
import TaviTask from "./TaskMain/taskMain";


//MainPage 
export default function Home() {
  return (
    <main className=" bg-gray-950 ">
      {/* <LogIn />
      <SignUp /> */}

      <TaviTask />
    </main>
  );
}
