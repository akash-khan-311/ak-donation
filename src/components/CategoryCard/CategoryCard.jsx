import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CategoryCard = ({ campaign }) => {
  const {
    id,
    image,
    category,
    title,
    textColor,
    backgroundColor,
    categoryColor,
  } = campaign || {};
  return (
    <Link to={`/campaign/${id}`}>
      <Card
        style={{ backgroundColor: `${backgroundColor}` }}
        className="mt-6 cursor-pointer shadow-xl"
      >
        <CardHeader
          color="blue-gray"
          className="relative h-56 -mt-0 m-0 rounded-b-none shadow-none"
        >
          <img className="h-full " src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            className="mb-2"
            style={{ color: `${textColor}` }}
          >
            {title}
          </Typography>
          <Typography
            className="px-2 rounded"
            variant="h6"
            style={{
              backgroundColor: `${categoryColor}`,
              display: "inline-block",
            }}
          >
            <div
              style={{ color: `${textColor}` }}
              className="flex justify-start"
            >
              {category}
            </div>
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CategoryCard;
