import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import {  MyIcon, Pets  } from './ui-components';
import {  NavBar } from './ui-components';
import {  Footer } from './ui-components';
import {  AddPet } from './ui-components';
import {  PetDetails } from './ui-components';
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();

  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const formOverride = {
    TextField29766922: {
      placeholder: name,
    },
    TextField29766923: {
      placeholder: age,
    },
    TextField29766924: {
      placeholder: breed,
    },
    TextField38594674: {
      placeholder: about,
    },
    TextField38594681: {
      placeholder: color,
    },
    TextField38594688: {
      placeholder: image,
    },
    image: {
      src:
        updatePet == null
          ? "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          : updatePet.image,
    },
    Button38594696: {
      isDisabled: !updatePet ? true : false,
    },
    Button29766926: {
      isDisabled: updatePet ? true : false,
    },

    MyIcon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false);
      },
    },
  };

  const navbarOverrides = {
    image: {
      src: "https://img.icons8.com/color/50/000000/cat",
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        // saveFile();
        setShowForm(!showForm);
      },
    },
  };

  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides} />
        <header className="App-header">

        {showDetails && (
          <PetDetails
            pet={pet}
            style={{
              textAlign: "left",
              margin: "2rem",
            }}
            overrides={{
              Close: {
                onClick: () => {
                  setShowDetails(false);
                },
                style: {
                  cursor: "pointer",
                },
              },
            }}
          />
        )}

        {showForm && (
          <AddPet
            overrides={formOverride}
            style={{
              textAlign: "left",
              margin: "1rem",
            }}
          />
        )}

        <Pets
          overrideItems={({ item, index }) => ({
            overrides: {
              // Breed: { color: "blue" },

              Button38564537: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                },
              },
              Button38563868: {
                onClick: () => {
                  if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  setName(item.name);
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

export default App;
