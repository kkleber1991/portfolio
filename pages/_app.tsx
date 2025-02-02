import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/core"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
      
    </ChakraProvider>
  )
}

export default MyApp
