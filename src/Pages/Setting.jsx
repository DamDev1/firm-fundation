import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

let indicatorVar = ">";

export default function Setting() {
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

      </Container>
    </Container>
  );
}
