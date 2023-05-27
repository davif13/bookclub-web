import { Flex } from '@chakra-ui/react'
import { NavBar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        mt={['24px', '48px']}
        w="100%"
        h={['72px', '200px']}
        paddingX={['24px', '24px', '48px', '100px']}
      >
        <Flex
          w="100%"
          h="95%"
          backgroundImage="url('img/banner.svg')"
          backgroundSize="cover"
          backgroundPosition={['start', 'center']}
          backgroundRepeat="no-repeat"
          borderRadius={['8px', '24px']}
        />
      </Flex>
      <BookList />
      <CategoryList />
    </Flex>
  )
}
