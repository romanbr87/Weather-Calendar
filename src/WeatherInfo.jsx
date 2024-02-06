import { Image, ListGroup, Card } from "react-bootstrap";
import { fullDate } from "./Func";

const Cel = () => <span dangerouslySetInnerHTML={{ __html: "&deg;C" }}></span>;

const WeatherInfo = ({ weather, icon, style, className }) => {
  return (
    <Card className={className} style={style}>
      <Card.Header>
        Weather in {`${weather.name} ${fullDate()}`}
      </Card.Header>
      <ListGroup>
        <ListGroup.Item className="bg-dark text-white pt-0 pb-0">
          {`Weather: ${weather?.weather[0].description}`}
          <Image src={icon} className="pt-0 pb-0" />
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark text-white">
          {`Temp: ${weather.main.temp}`}
          <Cel />
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark text-white">
          {`Min/Max Temp ${weather.main.temp_min}`}
          <Cel /> {`/ ${weather.main.temp_max}`} <Cel />
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark text-white">
          {`${weather.main.humidity}% humidity, feels like: ${weather.main.feels_like}`}
          <Cel />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default WeatherInfo;
