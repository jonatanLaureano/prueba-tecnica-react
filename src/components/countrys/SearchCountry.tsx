import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { useState } from "react";

import { FiltersModal } from "./FiltersModal";
import { Input } from "../ui/input";
import { countryStore } from "../../store/country.store";



export const SearchCountry = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { setSearchTerm } = countryStore();

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const { register, handleSubmit,reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setSearchTerm(data.search);
    reset();
  };

  return (
    <div className="relative w-full mt-10 sm:mt-0">
      <form className="md:max-w-lg relative " onSubmit={handleSubmit(onSubmit)}>
        <Input
          onFocus={handleOpenModal}
          placeholder="Escribe el país que deseas ver..."
          className="border-2 py-3 h-14 rounded-full shadow-md bg-white"
          {...register("search")}
          onBlur={handleOpenModal}
        />

        <button className="absolute top-2.5 right-5 bg-sky-400 
          rounded-full hover:bg-sky-500 text-white 
          hover:text-slate-100 flex items-center gap-4 px-4 py-1 "
        >
        <div className="flex items-center">
          <Search className="size-6" />
        <span className="ml-2 text-lg font-medium">Buscar</span>
        </div>

        </button>
      </form>

      <FiltersModal isOpenModal={isOpenModal} />
    </div>
  );
};
