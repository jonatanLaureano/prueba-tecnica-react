import { useContinents } from "../../hooks/continent";
import { countryStore } from "../../store/country.store";




export const FiltersModal = ({ isOpenModal }: { isOpenModal: boolean }) => {
  const { data, loading } = useContinents();
  const { setSelectedFilter, selectedFilter, clearFilters } = countryStore();

  return (
    <div
      className={`absolute z-20 top-14 bg-slate-100 md:max-w-lg
			w-full p-4 rounded-lg space-y-3 transition-all duration-500 ${
        isOpenModal
          ? "-translate-y-0 visible opacity-100"
          : "-translate-y-10 invisible opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg flex items-center gap-3 text-gray-400 font-bold">

          Filtrar por continentes
        </h2>

        <button className="p-2 flex items-center gap-2 bg-white text-sky-500  border-sky-500 rounded hover:text-white hover:bg-red-500" onClick={clearFilters}>
          <span className="hidden sm:inline font-bold">Limpiar</span>{" "}
          
        </button>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-between">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data?.continents.map(({ code, name }) => (
            <button
              key={code}
              onClick={() => setSelectedFilter(name)}
              className={`${
                selectedFilter.includes(name)
                  ? "bg-sky-200 hover:bg-sky-300 text-white rounded-lg w-32 h-10 font-bold"
                  : "bg-sky-400 border-gray-300 text-white rounded-lg w-32 h-10 font-bold"
              }`}
            >
              <div /> {name}
            </button>
          ))
        )}
      </div>
    </div>
  );
};
