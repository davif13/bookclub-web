import { Link as ChakraLink, Flex } from '@chakra-ui/react'

export const Link = ({ children, ...props }) => (
  <ChakraLink fontSize="0.875rem" color="brand.greyDark" {...props}>
    {children}
  </ChakraLink>
)

Link.Action = ({ text, actionText, ...props }) => (
  <Flex
    flexDir={['column', 'row']}
    w="100%"
    alignItems="center"
    justifyContent="center"
  >
    <ChakraLink mr="4px" fontSize="1rem" color="brand.greyDark" {...props}>
      {text}
    </ChakraLink>
    <ChakraLink
      fontWeight="bold"
      fontSize="1rem"
      color="brand.black"
      {...props}
    >
      {` ${actionText}`}
    </ChakraLink>
  </Flex>
)

Link.Action.displayName = 'LinkAction'
