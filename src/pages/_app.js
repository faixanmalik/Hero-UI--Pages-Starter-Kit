import "@/styles/globals.css";
import '@/styles/scrollbar.css';
import '@/styles/homepage.css';
import localFont from "next/font/local";
import ThemeProvider from 'components/theme/theme-provider'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)


  
  //  Use Effect for routerChange
  useEffect(() => {

    router.events.on('routeChangeStart', ()=>{
      setProgress(75);
    });
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100);
    }, []);
  }, [router])



  return <>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
      
      <LoadingBar color='var(--primary)' height={3} progress={progress} waitingTime={300} onLoaderFinished={() => setProgress(0)}/>  
      <Toaster position="top-right" />
      {
        isLoading === true ?
          <Loader />
        :
        <div
          className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
        >
          <Component {...pageProps} setIsLoading={setIsLoading} />
        </div> 
      }

    </ThemeProvider>
  
  </>
}
