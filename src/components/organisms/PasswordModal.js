import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useToast
} from '@chakra-ui/react'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Text, Button } from 'components/atoms'
import { useMutation } from 'react-query'
import { userUpdateCall } from 'services/api/requests'

export const PasswordModal = ({ onClose }) => {
  const toast = useToast()

  const mutation = useMutation((data) => userUpdateCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar senha.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Senha atualizada com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
    }
  })

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatório.'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
        .required('Confirmar a senha é obrigatório.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Alterar Senha</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            error={errors.password}
            mt="16px"
            placeholder="Senha"
            onChange={handleChange}
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            error={errors.confirmPassword}
            mt="16px"
            placeholder="Repita a senha"
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            isLoading={mutation.isLoading}
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
