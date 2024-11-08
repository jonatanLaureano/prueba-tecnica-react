import {createBrowserRouter} from 'react-router-dom'

import { CountriesLayout } from '../layout/CountriesLayout'
import { lazy, Suspense } from 'react'
import { Loader } from '../components/shared/loader'
import { Regulations } from '../pages'
import HelpPage from '../pages/HelpPage'

const CountryPage = lazy(() => import('../pages/CountryPage'));
const CountriesPage = lazy(() => import('../pages/CountriesPage'));


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <CountriesLayout/>,
            children:[
                {
                    path: '/',
                    index: true,
                    element:(
                        <Suspense fallback={<Loader/>}>
                            <CountriesPage/>
                        </Suspense>
                    ),
                },
                {
                    path: '/help',
                    element: <HelpPage/>,
                },
                {
                    path: '/country/:code',
                    element: (
						<Suspense fallback={<Loader />}>
							<CountryPage />
						</Suspense>
					),
                },
                {
                    path: '/regulations',
					element: <Regulations />,
                },
            ],

        },

    ],
    {
        basename: '/',
    },
);