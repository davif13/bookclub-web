import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookCard } from 'components'
import { useQuery } from 'react-query'
import { getFavorites } from 'services/api/requests'

export const FavoritesScreen = () => {
  const { data } = useQuery('getFavorites', getFavorites)
  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        flexDir="column"
        w="100%"
        mt={['24px', '48px']}
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Text.ScreenTitle>Favoritos</Text.ScreenTitle>
      </Flex>
      <Flex
        mt="24px"
        flexDir="row"
        justifyContent={['center', 'flex-start']}
        alignItems={['center', 'flex-start']}
        flexWrap="wrap"
        w="100%"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        {data?.data?.map((item) => (
          <BookCard
            key={`book_list_favorites_${item.book.id}`}
            {...item.book}
          />
        ))}
      </Flex>
    </Flex>
  )
}
