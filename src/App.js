import React from 'react';
import { ThemeProvider } from 'react-jss';
import themes from './themeData';
import Body from './Components/Body';
import { getTheme } from './state/Theme/theme.selectors';
import { connect } from 'react-redux';


function App({ currentTheme }) {
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Body />
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  currentTheme: getTheme(state),
})

export default connect(mapStateToProps)(App);
