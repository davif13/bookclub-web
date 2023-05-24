import { Flex } from '@chakra-ui/react'
import { NavBar, BookList } from 'components'
import { useQuery } from 'react-query'
import { getHighlightedBooks } from 'services/api/requests'

export const HomeScreen = () => {
  const { /* isLoading, isError, error, */ data } = useQuery(
    'highlighted',
    getHighlightedBooks
  )

  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        mt="48px"
        w="100%"
        h="200px"
        paddingX={['24px', '24px', '48px', '100px']}
      >
        <Flex
          w="100%"
          h="95%"
          backgroundImage="url('img/banner.svg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="24px"
        />
      </Flex>
      <BookList data={data?.data} />
    </Flex>
  )
}
