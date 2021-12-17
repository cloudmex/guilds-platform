import React from "react";
import { Link } from "react-router-dom";
import { 
  Button, 
  Col, 
  Card,
  CardBody,
  UncontrolledTooltip

} from "reactstrap";

import JoinButton from './JoinButton'

export default function GuildCard({guild}) {
    
    React.useEffect(() => {
        //getInfoSlug(localStorage.getItem('GUILDS'), guild.slug);
    }, []);
    
    return (
        <Col sm="3" key={`col-${guild.slug}`}>
            
            <Card className="card-plain">     
                <CardBody>
                
                <div className="btn-wrapper profile pt-3">
                <Link to={`profile-page/${guild.slug}`}>
                    <img
                        alt={guild.title}
                        className="img-center img-fluid"
                        width="128"
                        height="128"
                        src={`https://github.com/near/ecosystem/blob/main${guild.logo}?raw=true`}
                    />  
                </Link> 
                    <h4 className="title">{guild.title}</h4>
                    {/*<p>{`${0} subscribers`}</p>*/}
                    <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href={guild.twitter}
                        id="tooltip639225725"
                        target="_blank"
                    >
                        <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                        Follow us
                    </UncontrolledTooltip>
                
                    <Button
                        className="btn-icon btn-round"
                        color="warning"
                        href={guild.youtube}
                        id="tooltip982846143"
                        target="_blank"
                    >
                        <i className="fab fa-youtube" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                        Like us
                    </UncontrolledTooltip>                  
                    <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href={guild.website}
                        id="tooltip951161185"
                        target="_blank"
                    >
                        <i className="fab fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                        Follow us
                    </UncontrolledTooltip>
                </div>
                <br/>
                <JoinButton guild={guild}/>
                </CardBody>
            </Card>
                             
        </Col>
    );
}
