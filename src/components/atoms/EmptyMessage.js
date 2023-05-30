import { Flex } from '@chakra-ui/react'
import { Text } from './Text'

export const EmptyMessage = ({ children }) => {
  return (
    <Flex mt={['24px', '48px']} alignItems="center" justifyContent="center">
      <Text>{children}</Text>
    </Flex>
  )
}
