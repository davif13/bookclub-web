import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
  <ChakraButton
    fontSize="1rem"
    fontWeight="bold"
    borderRadius="16px"
    h="56px"
    bg={secondary ? 'brand.greyDark' : 'brand.primary'}
    {...props}
    _hover={{
      bg: secondary ? 'brand.greyDark' : 'brand.primary'
    }}
    textColor={secondary ? 'brand.white' : 'brand.black'}
  >
    {children}
  </ChakraButton>
)
