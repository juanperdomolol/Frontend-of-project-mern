import { React } from "react";
import { useParams } from "react-router-dom";
import "./PlaceForm.css";

import Input from "./../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "./../../util/validators";
import Button from './../../shared/components/FormElements/Button/Button';
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Allianz Arena",
    description: "The Allianz Arena is a place where play Bayern Munchen",
    imageUrl:
      "https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_1366,h_768,c_fill/cms/public/images/allianz-arena/spieltagsbilder/bundesliag/innenraum_spieltag-4.jpg",
    address: "Werner-Heisenberg-Allee 25, 80939 München, Alemania",
    location: {
      lat: 48.218764,
      lng: 11.6225668,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Allianz Arena",
    description: "The Allianz Arena is a place where play Bayern Munchen",
    imageUrl:
      "https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_1366,h_768,c_fill/cms/public/images/allianz-arena/spieltagsbilder/bundesliag/innenraum_spieltag-4.jpg",
    address: "Werner-Heisenberg-Allee 25, 80939 München, Alemania",
    location: {
      lat: 48.218764,
      lng: 11.6225668,
    },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={()=>{}}
        value={identifiedPlace.title}
        valid={true}
      />
       <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 characters)"
        onInput={()=>{}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
