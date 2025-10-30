import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MoviesProvider } from "@/context/MoviesContext";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  const appName = "MovieCatalog";

  return (
    <AuthProvider>
      <MoviesProvider>
        <Navbar name={appName} />
        <Component {...pageProps} />
      </MoviesProvider>
    </AuthProvider>
  );
}
