import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './input.css'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
