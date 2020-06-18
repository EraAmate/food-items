import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Home from './pages/Home';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
