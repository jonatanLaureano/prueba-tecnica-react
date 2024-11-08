import { CountryFullResponse } from "../../interface/api.response"; 
import { GET_COUNTRY } from "../../services/country"; 
import { useQuery } from "@apollo/client";

export const useCountry = (code: string) => {

	const countryQuery = useQuery<CountryFullResponse>(GET_COUNTRY, {
		variables: {
			code
		},
		fetchPolicy: 'cache-first',
	});

	return countryQuery;
};