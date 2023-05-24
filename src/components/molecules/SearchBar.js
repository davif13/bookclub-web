import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
// import { useState } from 'react'
// import { Text } from 'components/atoms'

export const SearchBar = () => {
  return (
    <Flex w="450px" h="50px" bg="brand.greyLight" borderRadius="12px">
      <InputGroup>
        <InputLeftElement h="100%">
          <SearchIcon color="brand.greyDark" />
        </InputLeftElement>
        <Input
          borderWidth="0px"
          w="100%"
          h="100%"
          placeholder="Digite o nome do livro ou autor"
          _placeholder={{ color: 'brand.greyDark' }}
          focusBorderColor="transparent"
        />
      </InputGroup>
    </Flex>
  )
}
