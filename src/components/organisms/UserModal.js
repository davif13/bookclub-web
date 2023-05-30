import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Avatar
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Text, Button } from 'components/atoms'

export const UserModal = ({ onClose }) => {
  const userStore = useSelector((state) => state.user)
  const { values, handleChange, errors } = useFormik({
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
    onSubmit: (data) => {}
  })
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
            <Avatar
              name={userStore?.user?.name}
              src={userStore?.user?.avatar_url}
              h={['36px', '100px']}
              w={['36px', '100px']}
              borderWidth="4px"
              borderColor="brand.primary"
              bg="brand.greyLight"
            />
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
          <Button width="100%" mt={['64px']}>
            Atualizar
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
