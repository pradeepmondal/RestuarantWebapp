import '@/styles/globals.css'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function App({ Component, pageProps }) {
  return (
    
    <ParallaxProvider>
      <Component {...pageProps} />


    </ParallaxProvider>
    
    

  )
  
  
}
