import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const MenuItem = ({ icon, text, divider }) => {
  return (
    <ChakraMenuItem
      h="48px"
      borderBottomWidth={divider ? '1px' : '0px'}
      borderBottomStyle="solid"
      borderBottomColor="brand.greyLight"
    >
      <Icon color="brand.greyDark" boxSize="18px" mr="8px" as={icon} />
      <Text color="brand.greyDark" size="14px" fontWeight="600">
        {text}
      </Text>
    </ChakraMenuItem>
  )
}
