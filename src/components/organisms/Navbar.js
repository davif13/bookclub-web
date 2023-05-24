import { Flex, Image } from '@chakra-ui/react'
import { SearchBar } from 'components/molecules'

export const NavBar = () => {
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '24px', '48px', '100px']}
      paddingTop={['24px']}
    >
      <Image src="img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
      <SearchBar />
    </Flex>
  )
}
