//import { useSelector } from "react-redux"; // Import to access Redux state

import TrelloBoard from "../components/TaskBoard.jsx";  // Correct import without extra spaces
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <TrelloBoard /> 
     <Footer/>
    </div>
  );
};

export default Home;
