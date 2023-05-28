import { Flex, useToast } from '@chakra-ui/react'
import { NavBar, Text, Button, CategoryList } from 'components'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import {
  getBookDetail,
  addBookToFavorites,
  deleteBookFromFavorites
} from 'services/api/requests'

export const BookDetailScreen = () => {
  const { id } = useParams()
  const toast = useToast()
  const { data, refetch, isLoading } = useQuery(
    ['bookDetail', id],
    () => getBookDetail(id),
    {
      enable: !!id
    }
  )

  const addFavoriteMutation = useMutation((data) => addBookToFavorites(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao adicionar aos favoritos.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Livro adicionado com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      refetch()
    }
  })

  const deleteFavoriteMutation = useMutation(
    (data) => deleteBookFromFavorites(data),
    {
      onError: (error) => {
        toast({
          title: 'Falha ao remover dos favoritos.',
          description:
            error?.response?.data?.error || 'Por favor, tente novamente.',
          status: 'error',
          duration: 5000,
          isClosable: true
        })
        refetch()
      },
      onSuccess: () => {
        toast({
          title: 'Favorito removido com sucesso',
          status: 'success',
          duration: 6000,
          isClosable: true
        })
        refetch()
      }
    }
  )

  const handleButtonClick = () => {
    if (data?.data?.favorite) {
      deleteFavoriteMutation.mutate(data?.data?.favorite?.id)
      return
    }
    addFavoriteMutation.mutate({
      book_id: id
    })
  }

  return (
    <Flex flexDir="column">
      <NavBar maxW={['95vw', '100vw']} />
      <Flex
        flexDir={['column', 'row']}
        alignItems={['center', 'flex-start']}
        justifyContent={['center', 'flex-start']}
        mt={['24px', '48px']}
        w="100%"
        maxW="100vw"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Flex
          w={['170px', '280px']}
          h={['256px', '310px']}
          backgroundImage={`url(${data?.data?.book?.cover_url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius={['12px']}
        />
        <Flex
          mt={['24px', '0px']}
          w={['100%', '70%']}
          mx={['0px', '48px']}
          flexDir="column"
        >
          <Text.ScreenTitle fontSize="24px">
            {data?.data?.book?.name}
          </Text.ScreenTitle>
          <Text mt="6px" fontSize="16px" color="brand.greyDark">
            {data?.data?.book?.author?.name}
          </Text>
          <Text.ScreenTitle mt="16px">Informações</Text.ScreenTitle>
          <Flex
            mt="4px"
            w="100%"
            flexDir={['column', 'row']}
            justifyContent={['flex-start', 'space-between']}
          >
            <Text fontSize="14px" color="brand.greyDark">
              Categoria: {data?.data?.book?.category?.name}
            </Text>
            <Text fontSize="14px" color="brand.greyDark">
              Páginas: {data?.data?.book?.pages}
            </Text>
            <Text fontSize="14px" color="brand.greyDark">
              Ano de Lançamento:{' '}
              {new Date(data?.data?.book?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.ScreenTitle mt="16px">Sinopse</Text.ScreenTitle>
          <Text maxWidth="80%" mt="4px" fontSize="12px" color="brand.greyDark">
            {data?.data?.book?.synopsis}
          </Text>
        </Flex>
        <Flex
          justifyContent={['center', 'flex-start']}
          alignItems={['center', 'flex-start']}
          w={['100%', 'auto']}
          mt={['24px', '0px']}
        >
          <Button
            isLoading={
              isLoading ||
              addFavoriteMutation.isLoading ||
              deleteFavoriteMutation.isLoading
            }
            secondary={data?.data?.favorite}
            onClick={() => handleButtonClick()}
          >
            {data?.data?.favorite
              ? 'Remover dos Favoritos'
              : 'Adicionar aos Favoritos'}
          </Button>
        </Flex>
      </Flex>
      <CategoryList
        title="Livros Relacionados"
        categoryId={data?.data?.book?.category?.id}
      />
    </Flex>
  )
}
