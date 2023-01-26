import React, { useState,useContext } from "react";

import "./PlacesItem.css";
import Card from "./../../shared/components/UIElements/Card";
import Button from "./../../shared/components/FormElements/Button/Button";
import Modal from "./../../shared/components/UIElements/Modal";
import Map from "./../../shared/components/UIElements/Map";
import { AuthContext } from "./../../shared/context/auth-context";
const PlacesItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const confirmDeleteHandler = () => {
    setShowModal(!ShowModal);
    console.log("Deleting...");
  };

  const openOrCloseModal = () => setShowModal(!ShowModal);
  const openOrCloseMaper = () => setShowMap(!showMap);
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={openOrCloseMaper}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={openOrCloseMaper}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={ShowModal}
        onCancel={openOrCloseModal}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={openOrCloseModal}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undonde thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openOrCloseMaper}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={confirmDeleteHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlacesItem;
