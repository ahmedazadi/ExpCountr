// react
import { Link } from "react-router-dom";
// react leaflet
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

export default function BorderMap({ borders, location }) {
  const [borderData, setBorderData] = useState([]);

  useEffect(() => {
    // for each of the neighbor fetch name and flag and cca2
    borders.forEach((element) => {
      fetch(`https://restcountries.com/v3.1/alpha/${element}?fields=name,cca2`)
        .then((response) => response.json())
        .then((data) => {
          setBorderData((oldData) => [...oldData, data]);
        });
    });
  }, []);

  if (borderData.length != 0) {
    console.log(borderData);
  }

  return (
    <div className="flex flex-col md:flex-row">
      {/* border section */}
      <div className=" md:w-1/4 ">
        <ul class="border rounded-t-lg rounded-b-none md:rounded-l-lg md:rounded-r-none border-gray-200 rounded overflow-hidden">
          <h3 className="px-4 py-2 bg-gray-200 font-bold ">borders</h3>
          {borderData.map((value) => {
            return (
              <li class=" bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                <Link to={`/country/${value.cca2}`} className="block px-4 py-2">
                  {value.name.common}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* leaflet map */}
      <div className=" flex-grow h-96 bg-blue-gray-600">
        <MapContainer
          center={location}
          zoom={4.5}
          scrollWheelZoom={false}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}
