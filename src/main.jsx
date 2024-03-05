import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router";
import { MantineProvider } from '@mantine/core';
import { ShopProvider } from './ShopProvider';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './input.css'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <ShopProvider>
    <Router />
    </ShopProvider>
    </MantineProvider>
  </React.StrictMode>,
)
