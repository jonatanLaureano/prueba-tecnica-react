import { Country } from "../../interface/country.response"; 
import { CardItem } from "./CardItem";

const CountriesItems = ({ countries }: { countries: Country[] }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(390px,_2fr))] gap-5">
      {countries.slice(0, 9).map((country) => (
        <CardItem {...country} key={country.code} />
      ))}
    </div>
  );
};

export default CountriesItems