import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const BookCard = ({ cover_url, name, author }) => {
  return (
    <Flex
      wrap="wrap"
      mr="16px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Flex
        backgroundImage={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        h="220px"
        w="145px"
        borderRadius="24px"
      />
      <Text mt="8px" fontSize="12px" fontWeight="600">
        {name}
      </Text>
      <Text mt="4px" fontSize="10px">
        {author?.name}
      </Text>
    </Flex>
  )
}
