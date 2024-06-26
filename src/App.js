// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
// import {  MyIcon  } from './ui-components';
import {  Pets  } from './ui-components';
import {  NavBar } from './ui-components';
import {  Footer } from './ui-components';
import {  AddPet } from './ui-components';
import {  PetDetails } from './ui-components';
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ user, signOut }) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();
  const [Name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const addPetFormOverride = {
    MyIcon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false);
      },
    },
    image: {
      src:
        updatePet == null
          ? "https://img.icons8.com/color/50/000000/dog"
          : updatePet.image,
    },
    TextField29766922: { // AddPet Name TextField
      placeholder: Name,
    },
    TextField29766923: { // AddPet Age TextField
      placeholder: age,
    },
    TextField29766924: { // AddPet Breed TextField
      placeholder: breed,
    },
    TextField38594674: { // AddPet About TextField
      placeholder: about,
    },
    TextField38594681: { // AddPet Color TextField
      placeholder: color,
    },
    TextField38594688: { // AddPet Image TextField
      placeholder: image,
    },
    Button29766926: { // AddPet Save button
      isDisabled: updatePet ? true : false,
    },
    Button38594696: { // AddPet Update button
      isDisabled: !updatePet ? true : false,
    },
  };

  const navbarOverrides = {
    "Add Pet": { // "Add Pet" is part of NavBar hierarchy
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        // saveFile();
        setName("");
        setColor("");
        setAge("");
        setBreed("");
        setAbout("");
        setImage("");
        setUpdatePet(null);
        setShowForm(!showForm);
      },
    },
    Button: {
      onClick: signOut,
    },
    image: {
      src: user?.attributes?.profile,
      //src: "https://img.icons8.com/color/50/000000/cat",
    },
  };

  const petDetailsOverrides = {
    Close: {
      onClick: () => {
        setShowDetails(false);
      },
      style: {
        cursor: "pointer",
      },
    },
  };

  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides} />
        <header className="App-header">

        {showDetails && (
          <PetDetails // PetDetails component
            pet={pet}
            style={{
              textAlign: "left",
              margin: "2rem",
            }}
            overrides={petDetailsOverrides}
          />
        )}

        {showForm && (
          <AddPet // AddPet component
            pet={updatePet}
            overrides={addPetFormOverride}
            style={{
              textAlign: "left",
              margin: "1rem",
            }}
          />
        )}

        <Pets // PetProfile component
          overrideItems={({ item, index }) => ({
            overrides: {
              // Breed: { color: "blue" },
              Button38564537: { // PetProfile Profile button
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                },
              },
              Button38563868: { // PetProfile Update button.
                onClick: () => {
                  if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  // setUpdatePet(true);
                  setName(item.Name);
                  setColor(item.color);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setImage(item.image);
                },
              },
            },
          })}
        />

      </header>
      <Footer width={"100%"} /> 
    </div>
  );
}

export default withAuthenticator(App);
