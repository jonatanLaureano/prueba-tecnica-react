import { lazy, Suspense, useEffect } from 'react'

import { SearchCountry } from '../components/countrys/SearchCountry';
import { Loader } from "../components/shared/loader";

import { useCountries } from '../hooks/country/useCountries';
import { countryStore } from '../store/country.store';

const CountriesItems = lazy(() => import("../components/countrys/CountriesItems"))

const CountriesPage = () => {
    const{
        setFilteredCountries,
        filteredCountries,
        selectedFilter,
        searchTerm,
    } = countryStore();
    const {data, loading}= useCountries(searchTerm);

    useEffect(() => {
        setFilteredCountries(data?.countries || []);
      }, [data?.countries, selectedFilter, setFilteredCountries]);

    return(
        <section className='p-5 space-y-8 bg-sky-100'>

			<SearchCountry />

			{searchTerm !== '' && (
				<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{`Resultados para : ${searchTerm}`}</h3>
			)}

			{loading ? (
				<Loader />
			) : (
				<Suspense fallback={<Loader />}>
					{filteredCountries.length !== 0 ? (
						<CountriesItems countries={filteredCountries} />
					) : (
						<div className='text-center p-4 text-lg'>
							<p className='leading-7'>No hay resultados...</p>
						</div>
					)}
				</Suspense>
			)}
		</section>
    )
}


export default CountriesPage;