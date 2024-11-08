import { GoChevronDown } from "react-icons/go";

import { buttonVariants } from "../ui/button";

import { Country } from "../../interface/country.response";
import { useImage } from "../../hooks/images/useImages";
import { Link } from "react-router-dom";
import { Skeleton } from "../ui/Skeleton"; 



export const CardItem = ({ continent, code, name }: Country) => {
    const { image, isLoading } = useImage(name);
  
    return (
        <div className="shadow shadow-inner shadow-md border-gray-200 rounded-lg">
        <div className="p-0 flex flex-col space-y-1.5 p-0.5">
          {isLoading ? (
            <Skeleton className="w-full h-60 rounded-lg border-gray-200" />
          ) : (
            <img
              className="rounded-lg h-60 object-cover"
              src={image}
              alt={name}
            />
          )}
        </div>
  
        <div className="px-3 py-4 space-y-4 p-6 pt-0">
          <div className="flex justify-between">
            <div className="space-y-1">
              <h4 className="scroll-m-20 text-xl font-bold tracking-tight">{name}</h4>
              <span>{continent.name}</span>
            </div>
  
            
          </div>
  
          <Link
            to={`/country/${code}`}
            className={buttonVariants({
              variant: "custom-button",
              className: "w-full max-w-[380px] flex gap-2 bg-gray-400 hover:bg-gray-300 sm:w-[300px] md:w-[350px] lg:w-[380px] ml-4 md:ml-8 lg:ml-16",
            })}
          >
            Ver mas <GoChevronDown className="size-4" />
          </Link>
        </div>
      </div>
    );
  };