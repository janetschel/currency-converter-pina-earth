// Modular heading for Currency Converter
// If you want to convert anything else, just type it in here
// Company Name
export const heading: string = "🌳 Pina Earth 🌳";


const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";

// Need to add own API key here 
// I just left my API key from my account etschelj@gmail.com here for demo purposes
const API_KEY: string = "b1b7860e240beb88014ceb16";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;
