import { Flex, Spinner } from '@chakra-ui/react'

export const Loader = () => {
  return (
    <Flex
      mt={['24px', '48px']}
      alignItems="center"
      justifyContent="center"
      paddingX={['24px', '24px', '48px', '100px']}
    >
      <Spinner />
    </Flex>
  )
}
