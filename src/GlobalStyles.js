import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Catamaran&display=swap');
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Catamaran', sans-serif;
          font-size: 16px;
        }
      `}
    />
  );
}
export default GlobalStyles;
