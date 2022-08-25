// react
import { Link } from "react-router-dom";
// react leaflet
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Button } from "@material-tailwind/react";

export default function BorderMap({ borders, location }) {
  const [borderData, setBorderData] = useState([]);

  useEffect(() => {
    // if [borders] prop is NOT undefined (meaning there is some data in it)
    if (borders != undefined) {
      // for each of the neighbor fetch name and cca2
      borders.forEach((element) => {
        fetch(
          `https://restcountries.com/v3.1/alpha/${element}?fields=name,cca2`
        )
          .then((response) => response.json())
          .then((data) => {
            setBorderData((oldData) => [...oldData, data]);
          });
      });
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* border section */}
      <div className=" md:w-1/4 ">
        <ul class="border rounded-t-lg rounded-b-none md:rounded-l-lg md:rounded-r-none border-gray-200 rounded overflow-y-auto max-h-96">
          <h3 className="px-4 py-2 sticky top-0 bg-gray-200 font-bold ">
            borders
          </h3>
          {/* check if the country has border with couther countries */}
          {borders == undefined
            ? "no border with other countries"
            : /* if [borderData]'s length is 0 (data has not fetched)
          then render "loading" else map through [borderData] and return [li] element */
            borderData.length < borders.length
            ? "loading"
            : borderData.map((value) => {
                return (
                  <li class=" bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    <Button
                      fullWidth
                      variant="text"
                      className="block text-black text-left rounded-none px-4 py-2"
                      // force page to reload when clicked
                      onClick={() => {
                        window.open(`/country/${value.cca2}`, "_self").focus();
                      }}
                    >
                      {value.name.common}
                    </Button>
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
