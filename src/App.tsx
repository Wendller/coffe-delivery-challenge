import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "./hooks/useCart";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/themes/light";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <Router />
          <ToastContainer autoClose={3000} />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}
