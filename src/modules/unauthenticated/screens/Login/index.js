import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
  const navigate = useNavigate()
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
          <Input mt="24px" placeholder="email@email.com" />
          <Input.Password mt="16px" placeholder="********" />
          <Flex
            w="100%"
            mt="8px"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Link>Esqueceu sua senha?</Link>
          </Flex>
          <Button mt="24px">Login</Button>
          <Link.Action
            mt="48px"
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
