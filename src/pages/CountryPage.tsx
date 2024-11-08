import {  useParams } from 'react-router-dom';

import { Skeleton } from '../components/ui/Skeleton'; 

import { useCountry } from '../hooks/country/useCountry'; 
import { useImage } from '../hooks/images/useImages'; 
import { Loader } from '../components/shared/loader'; 

const CountryPage = () => {
	const params = useParams();

	const { data, loading } = useCountry(params.code || '');
	const { image, isLoading } = useImage(data?.country.name || '');

	return (
		<section className='max-w-4xl w-full flex flex-col gap-4 py-16 px-8 relative mt-4 sm:mt-0'>
			{loading ? (
				<Loader />
			) : (
				<>
					<header className='w-full space-y-4'>
						{isLoading ? (
							<Skeleton className='w-full h-40 rounded-sm' />
						) : (
							<img
								className='w-full h-40 object-cover object-center rounded-sm '
								src={image}
								alt={data?.country.name}
							/>
						)}

						<div className='space-y-2'>
							<div className='flex flex-col sm:flex-row sm:items-center justify-between'>
								<h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-sky-400'>
									 {data?.country.name}
								</h1>

								<h3 className='text-lg sm:text-xl scroll-m-20 text-2xl font-semibold tracking-tight'>
									{data?.country.capital}
								</h3>
							</div>

							<p className='font-medium leading-7'>
								{data?.country.continent.name} - {data?.country.continent.code}
							</p>
						</div>
					</header>

					<hr className='border-2 border-slate-200 w-[98%] mx-auto' />

					

					<div className='space-y-4'>
						<div className='flex flex-col gap-2'>
							<h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-sky-400'>Idiomas:</h4>

							<ul className='px-5'>
								{data?.country.languages.map((language) => (
									<li
										key={language.name}
										className='list-disc'>
										{language.name}
									</li>
								))}
							</ul>
						</div>

						<div className='flex items-center gap-2'>
							<h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-sky-400'>Teléfono: </h4>
							<p className='leading-7 '>+ {data?.country.phone}</p>
						</div>

						<div className='flex items-center gap-2'>
							<h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-sky-400'>Moneda: </h4>
							<p className='leading-7'>{data?.country.currency}</p>
						</div>

						<div className='flex items-center gap-2'>
							<h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-sky-400'>Región: </h4>
							<p className='leading-7'>{data?.country.awsRegion}</p>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default CountryPage;