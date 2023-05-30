import { useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Avatar,
  useToast,
  Icon
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Text, Button } from 'components/atoms'
import { useMutation } from 'react-query'
import { userUpdateCall, userAvatarCall } from 'services/api/requests'
import { setUser } from 'services/store/slices/user'
import { MdModeEditOutline } from 'react-icons/md'

export const UserModal = ({ onClose }) => {
  const inputFileRef = useRef()
  const userStore = useSelector((state) => state.user)
  const toast = useToast()
  const dispatch = useDispatch()

  const mutation = useMutation((data) => userUpdateCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar dados.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Dados atualizados com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      dispatch(
        setUser({
          user: data?.data?.user
        })
      )
    }
  })

  const mutationAvatar = useMutation((data) => userAvatarCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar imagem.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Imagem atualizada com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      dispatch(
        setUser({
          user: data?.data
        })
      )
    }
  })

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      name: userStore?.user?.name,
      email: userStore?.user?.email
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve conter ao menos 3 caracteres')
        .required('Nome é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  const onChangeImage = (event) => {
    const file = event?.target?.files[0]
    const type = file?.type

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64 = reader.result
      mutationAvatar.mutate({
        mime: type,
        base64
      })
    }
  }

  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Dados Pessoais</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Flex w="100%" alignItems="center" justifyContent="center">
            <input
              ref={inputFileRef}
              style={{ display: 'none' }}
              onChange={onChangeImage}
              type="file"
              accept="image/*"
            />
            <Avatar
              cursor="pointer"
              name={userStore?.user?.name}
              src={userStore?.user?.avatar_url}
              h="100px"
              w="100px"
              borderWidth="4px"
              borderColor="brand.primary"
              bg="brand.greyLight"
              onClick={() => inputFileRef?.current?.click()}
            />
            <Flex
              margin="-32px"
              w="32px"
              h="32px"
              bg="brand.primary"
              borderRadius="16px"
              position="relative"
              top="36px"
              alignItems="center"
              justifyContent="center"
              onClick={() => inputFileRef?.current?.click()}
              cursor="pointer"
            >
              <Icon color="brand.black" boxSize="18px" as={MdModeEditOutline} />
            </Flex>
          </Flex>
          <Input
            id="name"
            name="name"
            value={values.name}
            error={errors.name}
            type="text"
            mt="24px"
            placeholder="Nome Completo"
            onChange={handleChange}
          />
          <Input
            id="email"
            name="email"
            value={values.email}
            error={errors.email}
            type="email"
            mt="16px"
            placeholder="E-mail"
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            isLoading={mutation.isLoading || mutationAvatar.isLoading}
            width="100%"
            mt={['64px']}
          >
            Atualizar
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
