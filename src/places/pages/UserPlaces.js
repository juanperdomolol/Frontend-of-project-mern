import React from "react";
import { useParams } from "react-router-dom";
import PlacesList from "./../components/PlacesList";

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
export const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter( place => place.creator === userId);
  return <PlacesList items={loadedPlaces} />;
};
