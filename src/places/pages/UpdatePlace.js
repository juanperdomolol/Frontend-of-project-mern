import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "./../../shared/components/FormElements/Button/Button";
import Input from "./../../shared/components/FormElements/Input";
import Card from "./../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "./../../util/validators";
import { useForm } from "./../../shared/hooks/form-hook";
import "./PlaceForm.css";
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
    title: "All. Arena",
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
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
    },
    true
  );

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place</h2>
        </Card>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <Card>
          <h2>Loading...</h2>
        </Card>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 characters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
