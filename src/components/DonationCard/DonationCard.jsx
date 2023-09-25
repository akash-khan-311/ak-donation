import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const DonationCard = ({ donation }) => {
  const {
    id,
    image,
    title,
    textColor,
    backgroundColor,
    categoryColor,
    donate,
    description,
    category,
  } = donation || {};
  return (
    <Card
      style={{ background: `${backgroundColor}` }}
      className="w-full  flex-row"
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 my-auto rounded-r-none h-full"
      >
        <img src={image} alt="card-image" className="w-full h-full" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          style={{ background: `${categoryColor}`, color: `${textColor}` }}
          className="mb-4 capitalize inline-block px-3"
        >
          {category}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography
          style={{ color: `${textColor}` }}
          className="mb-8 font-semibold"
        >
          ${donate}
        </Typography>
        <Link to={`/campaign/${id}`} className="inline-block">
          <Button
            variant="text"
            style={{ background: `${textColor}` }}
            className="flex text-white items-center gap-2"
          >
            View Details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default DonationCard;
