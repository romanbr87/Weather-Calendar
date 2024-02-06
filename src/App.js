import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { isBrowser, isMobile } from "react-device-detect";
import { TbCurrentLocation } from "react-icons/tb";

import { fullDate, getCoordinates, getWeather, weather1 } from "./Func";
import MyMap from "./MyMap";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  const [coords, setCoords] = useState({ lat: 0, long: 0 });
  const [weather, setWeather] = useState({});
  const icon =
    weather?.weather === undefined || weather?.weather?.length === 0
      ? undefined
      : `http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`;

  const Title = (props) => (
    <Card.Title {...props}>
      {
        <span
          style={{ fontSize: (isBrowser ? props.size1 : props.size2) + "px" }}
          className={props.className}
        >
          {props.children}
        </span>
      }
    </Card.Title>
  );

  useEffect(() => {
    //if (long !== 0 && lat !== 0) getCoordinates();
    console.clear();
    // getHoliday();
  }, []);

  // if (1 == 1) return (
  //     <MyMap {...{ coords }} className="mt-2" />
  // )

  return (
    <>
      <Container fluid className="bg-light m-0 p-0" style={{ height: "100vh" }}>
        <Card
          bg="light"
          border="0"
          style={{
            height: "100vh",
            backgroundImage: "url(./background1.jpg)",
            borderRadius: "0px",
          }}
        >
          <Card.Header className={`border-0 ${isMobile ? "pt-2" : "p-0 pt-2"}`}>
            <Title
              className="text-center font-weight-bold"
              size1="25"
              size2="20"
            >
              Weather
            </Title>
          </Card.Header>
          <Card.Body className={`${isBrowser && "ps-5 pe-5"}`}>
            <div>
              <Button
                size="sm"
                variant="primary"
                onClick={() => getCoordinates(setCoords)}
              >
                <TbCurrentLocation />
              </Button>
              <Button
                size="sm"
                variant="success"
                className="ms-2"
                onClick={() => getWeather(coords, setWeather)}
              >
                Get Weather
              </Button>
            </div>
            <MyMap {...{ coords }} className="mt-2" />
            <div style={{ display: "flex" }}>
              {icon && <WeatherInfo {...{ weather, icon }} className="mt-1" />}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
