import React, { useEffect } from "react";
import { AppRouter } from "./routers";
import ReactGA from "react-ga";

import "./styles/index.scss";

function App(): React.ReactElement {
  useEffect(() => {
    // Use Google Analytics (tested separately)
    /* istanbul ignore next */
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS as string);
      ReactGA.pageview("/");
    }
  }, []);

  return <AppRouter />;
}

export default App;
