import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import statesData from "./data";

const center = [-9.96104, -58.29643];

function App() {
  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=HgLIyNGvSxiQIXEOJnFM"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {/* {statesData.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map(
          (item) => [item[1], item[0]],
          []
        );
        return (
          <Polygon
            pathOptions={{
              fillColor: "red",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white",
            }}
            positions={coordinates}
          />
        );
      })} */}
    </MapContainer>
  );
}

export default App;
