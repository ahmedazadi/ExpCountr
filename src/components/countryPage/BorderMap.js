// react
import { Link } from "react-router-dom";
// react leaflet
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function BorderMap({ borders, location }) {
  const [borderData, setBorderData] = useState([]);

  useEffect(() => {
    // for each of the neighbor fetch name and cca2
    borders.forEach((element) => {
      fetch(`https://restcountries.com/v3.1/alpha/${element}?fields=name,cca2`)
        .then((response) => response.json())
        .then((data) => {
          setBorderData((oldData) => [...oldData, data]);
        });
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* border section */}
      <div className=" md:w-1/4 ">
        <ul class="border rounded-t-lg rounded-b-none md:rounded-l-lg md:rounded-r-none border-gray-200 rounded overflow-hidden">
          <h3 className="px-4 py-2 bg-gray-200 font-bold ">borders</h3>
          {/* if [borderData]'s length is 0 (data has not fetched)
          then render "loading" else map through [borderData] and return [li] element */}
          {borderData.length == 0
            ? "loading"
            : borderData.map((value) => {
                return (
                  <li class=" bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    <Link
                      to={`/country/${value.cca2}`}
                      className="flex justify-start px-4 py-2"
                      // force page to reload when clicked
                      onClick={() => {
                        window.location.reload(false);
                      }}
                    >
                      {value.name.common}
                    </Link>
                  </li>
                );
              })}
        </ul>
      </div>
      {/* leaflet map */}
      <div className=" flex-grow h-96 bg-blue-gray-600 z-0">
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
