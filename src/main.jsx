import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProSidebarProvider } from 'react-pro-sidebar';
import App from './App'
import GlobalStyles from './components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>;
    </GlobalStyles>
  </React.StrictMode>
)
