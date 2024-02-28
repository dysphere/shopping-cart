import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router";
import '@mantine/core/styles.css';
import './output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
