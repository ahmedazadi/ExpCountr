// components
import SimpleCard from "../SimpleCard";

// icons
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaDove } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";

export default function CountryDataGrid({ data }) {
  return (
    <div class=" grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {/* capitla */}
      <SimpleCard title={data.capital} text={"Capital"} Icon={FaBuilding} />
      {/* currency */}
      {/* ==================== */}
      {/* first, check if the [currencies] exists. then render the component */}
      {data.currencies[Object.keys(data.currencies)] && (
        <SimpleCard
          title={`
            ${data.currencies[Object.keys(data.currencies)].symbol}
            |
            ${data.currencies[Object.keys(data.currencies)].name}
          `}
          text={"Currency"}
          Icon={FaMoneyBillAlt}
        />
      )}
      {/* ==================== */}
      {/* is independent */}
      <SimpleCard
        title={data.independent ? "Independent" : "Not Independent"}
        text={"Dependendency"}
        Icon={data.independent ? FaDove : FaFish}
      />
      {/* populatoin */}
      <SimpleCard title={data.population} text={"Population"} Icon={FaUsers} />
      {/* car side */}
      <SimpleCard
        title={data.car.side}
        text={"Driving Side"}
        Icon={TbSteeringWheel}
      />
      {/* car sign */}
      <SimpleCard
        title={data.car.signs.map((value) => value + " |")}
        text={"Car Sign"}
        Icon={FaCar}
      />
      {/* start of week */}
      <SimpleCard
        title={data.startOfWeek}
        text={"Start of Week"}
        Icon={FaCar}
      />
      {/* region */}
      <SimpleCard title={data.region} text={"Continent"} Icon={FaMapMarked} />
    </div>
  );
}
