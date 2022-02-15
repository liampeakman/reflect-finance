import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'
import Router from 'next/router'
import { useState } from 'react'
import PageLoader from '../components/PageLoader'
import NextNProgress from 'nextjs-progressbar';




const App = ({ Component, pageProps }) => {

    // const [loading, setLoading] = useState(false)

    // Router.events.on('routeChangeStart', (url) => {
    //     setLoading(true)
    // })
    // Router.events.on('routeChangeComplete', (url) => {
    //     setLoading(false)
    // })

    return (
       
        <ChakraProvider resetCSS theme={theme}>
            <NextNProgress 
            color="rgb(54 162 235)"
            />
            <Component {...pageProps} />
        </ChakraProvider>
      
    )
} 

export default App