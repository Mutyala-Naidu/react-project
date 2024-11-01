
import AboutUs from "./AboutUs";
import Addition from "./Addition";
import AllOpe from "./AllOpe";
import Apples from "./Apples";
import Assignment1 from "./Assignment1";
import Blog from "./Blog";
import BrightText from "./BrightText";
import ContactUs from "./ContactUs";
import CricScore from "./CricScore";
import CurrentDate from "./CurrentDate";
import DateTime from "./DateTime";
import Discount from "./Discount";
import Emp from "./Emp";
import Greeting from "./Greeting";
import IncDec from "./IncDec";
import Increment from "./Increment";
import Login from "./Login";
import MovieGrid from "./MovieGrid";

function App(){
  const empObj = {id:1, name:"naidu", salary:1000};
  return(
    <>
      {/* <h1>welcome to classes</h1> */}
      <AboutUs />
      <ContactUs />

      <Increment />
      <IncDec />
      <CricScore />
      <Apples />
      <Discount />
      <Greeting name = "naidu"/>
      <Greeting />
      <Emp empObj = {empObj} />

      <Assignment1 title="Learn react" description="In-depth"/>
      <Assignment1 title="About ratan sir" description="Ratan sir nice"/>

      <Blog />
      <MovieGrid />
      <BrightText color="red"/>
      <BrightText color="green"/>
      <BrightText color="blue"/>

      <CurrentDate />
      <DateTime />

      <Addition />
      <AllOpe />
      <Login />
      
    </>
  )
}
export default App;