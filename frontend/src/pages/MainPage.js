/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import GuildCard from "components/GuildCard";
import React from "react";
import { 
  Button, 
  Container, 
  Row
} from "reactstrap";

import { CONTRACT_NAME } from "variables/Constants";

// TODO: Remove after add connection to NEAR
import { Guilds } from "variables/Predata";
import { get_guild_info, wallet } from "../services/NearRCP";

export default function MainPage() {

  if(!wallet.isSignedIn()){
    try {
      wallet.requestSignIn(CONTRACT_NAME);
    } catch (error) {
      console.log("LOGIN ", error);
    }
  }
  
  
  const [guildResponse, setGuildResponse] = React.useState({});
 
  const handleLogin = async() => {
    try {
      const resp = await get_guild_info("near-music-guild");
      setGuildResponse(resp );
      console.log(resp, ' **** ', guildResponse);
    } catch (error) {
      console.log(error, ' >><<<<<<<ERROR');
    }
    
  }
  
  return (
    
    <div className="section section-examples" data-background-color="black">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <div className="space-50" />
      <Container className="text-center">
        <h2 className="title">Find a Guild</h2>
        <Button color="warning" onClick={handleLogin}>Sign In</Button>
       
        <Row>
          {
            Guilds.map(guild => {
              return (
                <GuildCard key={`card-${guild.slug}`} guild={guild}/>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}
