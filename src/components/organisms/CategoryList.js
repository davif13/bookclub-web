import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/requests'

export const CategoryList = ({ title, categoryId }) => {
  const [selected, setSelected] = useState(categoryId)
  const { data } = useQuery('categories', getCategories)
  const bookQuery = useQuery(
    ['booksById', selected],
    () => getBooksByCategory(selected),
    {
      enable: !!selected
    }
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  return (
    <Flex
      flexDir="column"
      mt="48px"
      paddingX={['24px', '24px', '48px', '100px']}
      h="400px"
    >
      <Text.ScreenTitle>{title || 'Categorias'}</Text.ScreenTitle>
      {!categoryId && (
        <Flex
          overflowX={['scroll', 'auto']}
          mt="12px"
          flexDir="row"
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {data?.data &&
            data?.data.map((item) => (
              <CategoryCard
                key={`book_${item.id}`}
                selected={selected === item.id}
                onClick={() => setSelected(item.id)}
                {...item}
              />
            ))}
        </Flex>
      )}
      <Flex
        overflowX={['scroll', 'auto']}
        mt="12px"
        flexDir="row"
        pb="48px"
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {bookQuery?.data &&
          bookQuery?.data?.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
