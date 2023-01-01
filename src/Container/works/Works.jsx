import React from "react";
import data from "./workData";
import "./work.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

import Button from "../../Components/button/Button";
import { AiFillGithub } from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";

const Works = () => {
  return (
    <div className="work" id="work">
      <div className="container work-container">
        <div className="section_title u">
          <span>03.</span> <h4>Some Things I’ve Built</h4>
          <div className="hr" />
        </div>
        <Row xs={1} md={2} className="g-4">
          {data.map((item, idx) => (
            <Col key={item.id}>
              <Card key={item.id} className="card">
                <Card.Img variant="top" src={item.img} alt="img" />
                <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-text">{item.details}</Card.Text>
                  <ListGroup
                    variant="flush"
                    horizontal
                    className="card-techlist"
                  >
                    {item.technologies.map((tech, index) => {
                      return (
                        <ListGroup.Item key={index} className="list-item">
                          {tech}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                  <div className="card-links">
                    <Card.Link href="#" className="card-link">
                      <AiFillGithub /> Source Code
                    </Card.Link>
                    <Card.Link href="#" className="card-link">
                      <SiWebmoney /> View Live
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col>
            <Card className="more-works">
              <Card.Body>
                <Card.Text>
                  <h1>Other Noteworthy Works</h1>
                </Card.Text>

                <Button label={"Click To Show More"} styling={"works-btn"} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Works;
