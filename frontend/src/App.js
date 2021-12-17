/*!

***********************************************
* BLK Design System React - v1.2.0
***********************************************

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

***********************************************

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "components/IndexNavbar.js";
import PageHeader from "components/PageHeader.js";
import Footer from "components/Footer.js";

import MainPage from "pages/MainPage";
import { GuildsEntities } from 'services/GuildsEntities';
export default function App() {

  const handleMapGuilds = async() => {
    //Get Guilds information
    await GuildsEntities();
  }

  React.useEffect(() => {
    // Call method to load all guilds data
    handleMapGuilds();
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <MainPage />
        </div>
        <Footer />
      </div>
    </>
  );
}
