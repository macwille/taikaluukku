import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './util/theme';
import CastProvider from 'react-chromecast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CastProvider>
        <App />
        <CssBaseline />
      </CastProvider>
    </ThemeProvider>
  </React.StrictMode >
);

