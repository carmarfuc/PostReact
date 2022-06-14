import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
          style={{ height: "500px", width: "500px" }}
          zoom={12}
          center={{
            lat: -40.4127355,
            lng: -63.695428
          }}
          markers={[
            { lat: -40.409711, lng: -63.692569 },
            { lat: -40.412072, lng: -63.676463 },
            { lat: -40.451824, lng: -63.690759 }
          ]}
        />
      </div>
    );
  }
}
