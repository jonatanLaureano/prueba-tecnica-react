import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css'
import { router } from "./router";


const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});






createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}> 
      <RouterProvider router={router}/>
    </ApolloProvider>
    
  </StrictMode>,
);
