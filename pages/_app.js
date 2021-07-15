import "../styles/global.css";
import GoogleTagManager from "../components/GoogleTagManager";

function App({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Component {...pageProps} />
    </GoogleTagManager>
  );
}

export default App;
