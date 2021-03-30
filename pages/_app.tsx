import { ChakraProvider } from "@chakra-ui/react"

function Inventorio({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default Inventorio