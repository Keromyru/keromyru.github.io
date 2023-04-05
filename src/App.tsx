import React from 'react';
import NavComponent from './navigation/navigation-component';
import {Route, Routes} from 'react-router-dom';
import ResumePage from './pages/resumepage';
import WelcomePage from './pages/welcomepage';
import styled, {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components';

const App: React.FC = () => {
  const theme: DefaultTheme = {
    palette: {
      darkgrey: "#32373B",
      lightgrey: "#4A5859",
      greenHighlight: "#67E0A3",
      pinkHighlight: "#CC92C2",
      purpleAccent: "#A79AB2",
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <StyledApp className="App">
        <NavComponent/>
        <div className='app-body-container'>
          <div className='table-of-contents'>Table of contents</div>
          <Routes>
            <Route path="/" element={<WelcomePage/>} />
            <Route path="/resume" element={<ResumePage/>}/>
            {/* <Route path="/projects-page" element={<ProjectPage/>} /> */}
            {/* <Route path="/features" element={<FeaturesPage/>} /> */}
          </Routes>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.palette.darkgrey};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const StyledApp = styled.div`
  text-align: center;
`

export default App;