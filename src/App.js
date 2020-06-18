import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}

export default App;
