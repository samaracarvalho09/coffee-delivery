import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App
