// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-6655ZPFY17"); 
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
