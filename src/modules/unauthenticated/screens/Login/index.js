import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const LoginScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres.')
        .required('Senha é obrigatória.')
    }),
    onSubmit: (data) => {}
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
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            mt="24px"
            placeholder="email@email.com"
            onChange={handleChange}
            error={errors.email}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            mt="16px"
            placeholder="********"
            onChange={handleChange}
            error={errors.password}
          />
          <Flex
            w="100%"
            mt="8px"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Link onClick={() => navigate('/forgot-password')}>
              Esqueceu sua senha?
            </Link>
          </Flex>
          <Button onClick={handleSubmit} mt="24px">
            Login
          </Button>
          <Link.Action
            mt={['8px', '12px']}
            text="Não possui uma conta?"
            actionText="Cadastre-se aqui."
            onClick={() => navigate('/signup')}
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
