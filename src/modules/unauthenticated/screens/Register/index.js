import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { registerCall } from 'services/api/requests'

export const RegisterScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const mutation = useMutation((newUser) => registerCall(newUser), {
    onError: (error) => {
      toast({
        title: 'Falha ao criar conta',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Conta criada com sucesso',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      navigate('/')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve conter ao menos 3 caracteres')
        .required('Nome é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.'),
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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
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
            isLoading={mutation.isLoading}
            mt="24px"
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>
          <Link.Action
            onClick={() => navigate('/')}
            mt={['8px', '12px']}
            text="Já possui uma conta?"
            actionText="Entre aqui."
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
