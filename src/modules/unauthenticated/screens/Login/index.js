import { Flex, Image, Text, Input, Link, Button } from "@chakra-ui/react";

export const LoginScreen = () => {
  return (
    <Flex flexDir="row" w="100vw" h='100vh'>
      <Flex paddingLeft="112px" 
       alignItems="flex-start"
       justifyContent="center"
       flexDir="column" 
       w="40%" 
       h="100%">
        <Flex w="416px" flexDir="column" >
          <Image src="img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Text mt="48px">Login</Text>
          <Input mt="24px" placeholder="email@email.com" />
          <Input mt="16px" placeholder="********" />
          <Link mt="8px">Esqueceu sua senha?</Link>
          <Button mt="24px">Login</Button>
          <Link mt="48px">Não possui conta? Cadastre-se aqui.</Link>
        </Flex>
      </Flex>
      <Flex w="60%" h="100%"
      backgroundImage="url('img/auth_background.svg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderTopLeftRadius="32px"
      borderBottomLeftRadius="32px" />
    </Flex>
  )
}