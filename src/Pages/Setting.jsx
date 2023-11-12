import React from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";

export default function Setting() {
  let indicatorVar = ">";

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    // Add more options as needed
  ];

  return (
    <Container fluid id="settings">
      <Container fluid id="firstSettingHeaderDiv">
        <h1 className="display-6">Settings</h1>
      </Container>
      <Container fluid id="settingsIndicator">
        <h1 className="display-6">
          <span>Home</span> <span id="colored">{indicatorVar}</span>{" "}
          <span id="colored">Settings</span>
        </h1>
      </Container>
      <Container fluid id="settingsImageProfile">
        <Container fluid id="coverPhotoDiv">
          {/* <img
            src="https://as1.ftcdn.net/v2/jpg/02/57/83/56/1000_F_257835624_CoN9LfCetpZGV15jWuaUs3POJraYdgyg.jpg"
            alt="Cover Photo"
            id="coverPhoto"
          /> */}
        </Container>
        <Container fluid id="profilePictureDiv">
          <img
            src="https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256"
            alt=""
          />
        </Container>
      </Container>
      <Container fluid id="settingAccountName">
        <h6>Prince Rahul John - Admin</h6>
      </Container>
      <Container fluid id="settingsUserDetails">
        <Container id="settingInputFields">
          <h6>School Name *</h6>
          <input type="text" placeholder="Firm Foundation-Accra" readOnly />
        </Container>
        <Container id="settingInputFields">
          <h6>Email *</h6>
          <input type="text" placeholder="John@gmail.com" readOnly />
        </Container>
        <Container id="settingInputFields">
          <h6>Mobile NO *</h6>
          <input type="text" placeholder="091732812902" readOnly />
        </Container>
        <Container id="settingInputFields">
          <h6>City *</h6>
          <input type="text" placeholder="Accra" readOnly />
        </Container>
        <Container id="settingInputFields">
          <h6>Address *</h6>
          <input type="text" placeholder="Greater-Accra" readOnly />
        </Container>
        <Container id="settingInputFields">
          <h6>Username *</h6>
          <input type="text" placeholder="Prince Rahul John" readOnly />
        </Container>
        <Container id="settingInputFields">
          <h6>Password *</h6>
          <input type="text" placeholder="***********" readOnly />
        </Container>
        <Container id="settingInputFields">
          <label>Select a language:</label>
          <Select
            options={languageOptions}
            isSearchable={false} // Remove this line if you want a searchable dropdown
            id="settingsSelectTag"
          />
        </Container>
        <Container id="settingsSaveBtnDiv">
          <button className="btn btn-danger">Save</button>
        </Container>
      </Container>
    </Container>
  );
}
