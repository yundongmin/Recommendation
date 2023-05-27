import React, { Fragment, createContext, useReducer , useState} from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
import SimpleFormm from './SimpleForm.js';
// import { SubSlider } from "./ImageSlider";

export const HomeContext = createContext();

const HomeComponent = () => {
  

  return (
    <Fragment>
      <Slider />
     
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />

      </section>
      
      
        {/* <SubSlider/> */}
      
      
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);

  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
        <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleFormm></SimpleFormm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div className="h-30">
          {!showChat 
            ? <button className="btn22" onClick={() => startChat()}>ㅤ</button> 
            : <button className="btn22" onClick={() => hideChat()}>ㅤ</button>}
        </div>
      </div>      
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
