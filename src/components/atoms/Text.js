import { Text as ChakraText } from "@chakra-ui/react"

export const Text = ({ children, ...props }) => (
<ChakraText {...props} > {children} </ChakraText>
)

Text.ScreenTitle = ({ children, ...props }) => (
  <ChakraText 
  fontSize="20px" 
  fontWeight="extrabold"
  color="brand.black"
  {...props} > {children} </ChakraText>
  )