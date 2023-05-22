import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(4, 'Token deve conter 4 caracteres.')
        .required('Token é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatório.'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
        .required('Confirmar a senha é obrigatório.')
    }),
    onSubmit: (data) => {
      console.log({ data })
      navigate('/')
    }
  })

  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        padding={['24px', '24px', '48px', '0px']}
        paddingLeft={['24px', '24px', '48px', '95px']}
        alignItems={['center', 'center', 'center', 'flex-start']}
        justifyContent={['center', 'center', 'center', 'center']}
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h={['100%', '100vh', '100vh', '100%']}
      >
        <Flex w={['100%', '100%', '100%', '390px']} flexDir="column">
          <Image src="img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Nova senha</Text.ScreenTitle>
          <Text mt="20px">Digite o código recebido e uma nova senha:</Text>
          <Input
            id="token"
            name="token"
            type="text  "
            value={values.token}
            error={errors.token}
            mt="24px"
            placeholder="Ex: 0000"
            onChange={handleChange}
            maxLength={4}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            error={errors.password}
            mt="24px"
            placeholder="Nova senha"
            onChange={handleChange}
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            error={errors.confirmPassword}
            mt="24px"
            placeholder="Confirme a nova senha"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} mt="12px">
            Salvar
          </Button>
          <Link.Action
            mt={['8px', '12px']}
            text="Não recebeu o código?"
            actionText="Clique aqui para reenviar."
          />
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '0%', '60%']}
        h="100%"
        backgroundImage="url('img/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}

Input.Password.displayName = 'InputPassword'
