import React from "react";
import { Link } from "react-router-dom";
import { 
  Button, 
  Col, 
  Card,
  CardBody,
  UncontrolledTooltip

} from "reactstrap";

export default function GuildCard({guild}) {
 
  return (
        <Col sm="3" key={`col-${guild.slug}`}>
            <Link to={`profile-page/${guild.slug}`}>
            <Card className="card-plain">                         
                {/*<CardHeader>
                <img
                    alt={guild.title}
                    className="img-center img-fluid rounded-circle"
                    src={guild.logo}
                /> 
                </CardHeader>*/}
                <CardBody>
                
                <div className="btn-wrapper profile pt-3">
                <img
                    alt={guild.title}
                    className="img-center img-fluid"
                    src={guild.logo}
                />  
                    <h4 className="title">{guild.title}</h4>
                    <p>{`${guild.subscribers} subscribers`}</p>
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
                <Button
                    className="btn-round"
                    color="primary"
                    to="profile-page"
                    tag={Link}
                >
                <i 
                    className="tim-icons icon-tap-02" 
                />
                &nbsp;JOIN US
                </Button>
                </CardBody>
            </Card>
            </Link>                  
        </Col>
    );
}
