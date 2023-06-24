import React from 'react';
import NavComponent from './navigation/navigation-component';
import {Route, Routes} from 'react-router-dom';
import ResumePage from './pages/resumepage';
import WelcomePage from './pages/welcomepage';
import styled, {createGlobalStyle, DefaultTheme, keyframes, ThemeProvider} from 'styled-components';

const App: React.FC = () => {
  const theme: DefaultTheme = {
    palette: {
      darkgrey: "#32373B",
      lightgrey: "#4A5859",
      greenHighlight: "#67E0A3",
      pinkHighlight: "#CC92C2",
      purpleAccent: "#A79AB2",
      backgroundGradient: "linear-gradient(65deg, #67e0a3 0%, #cc92c2 50.48%, #90809D 82%, #4F928B 100% )",
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <StyledApp className="App">
        <NavComponent/>
        <div className='app-body-container'>
          <Sidebar >
            <div className='table-of-contents'>Table of contents</div>
          </Sidebar>
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

const gradient = keyframes`
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}
`;

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    animation: ${gradient} 10s ease-in-out infinite;
    background: ${({theme}) => theme.palette.backgroundGradient};
    background-attachment: fixed;
    background-size: 200%;
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
const Sidebar = styled.div`
  float: left;
  width: 10vw;
`

export default App;