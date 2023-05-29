import { Flex, Spinner } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components/atoms'

export const BookList = ({ title, data, isLoading }) => {
  return (
    <Flex
      flexDir="column"
      mt={['24px', '48px']}
      paddingX={['24px', '24px', '48px', '100px']}
      overflowX={['scroll', 'auto']}
      css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Text.ScreenTitle>{title}</Text.ScreenTitle>
      <Flex mt={['12px', '24px']} flexDir="row">
        {isLoading && (
          <Flex alignItems="center" justifyContent="center" h="30px">
            <Spinner />
          </Flex>
        )}
        {!data ||
          (!isLoading && data?.length === 0 && (
            <Flex alignItems="center" justifyContent="center" h="30px">
              <Text>Nenhum livro encontrado</Text>
            </Flex>
          ))}
        {data &&
          data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}
