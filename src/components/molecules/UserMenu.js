import { Avatar, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Text, MenuItem } from 'components/atoms'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmarkHeart } from 'react-icons/bs'
import { BiUser, BiCheckShield } from 'react-icons/bi'
import {
  HiOutlineDocumentText,
  HiOutlineClipboard,
  HiOutlineLogout
} from 'react-icons/hi'

export const UserMenu = ({ setShowModal }) => {
  const userStore = useSelector((state) => state.user)
  const navigate = useNavigate()

  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkHeart,
      text: 'Favoritos',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 1,
      icon: BiUser,
      text: 'Dados Pessoais',
      divider: false,
      onClick: () => setShowModal('user')
    },
    {
      id: 2,
      icon: BiCheckShield,
      text: 'Alterar Senha',
      divider: true,
      onClick: () => setShowModal('password')
    },
    {
      id: 3,
      icon: HiOutlineDocumentText,
      text: 'Termos de Uso',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 4,
      icon: HiOutlineClipboard,
      text: 'Política de Privacidade',
      divider: true,
      onClick: () => setShowModal('privacy-policy')
    },
    {
      id: 5,
      icon: HiOutlineLogout,
      text: 'Logout',
      divider: false,
      onClick: () => navigate('/favorites')
    }
  ]

  return (
    <Menu>
      <MenuButton>
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Avatar
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            h={['36px', '48px']}
            w={['36px', '48px']}
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLight"
            mr={['6px', '12px']}
          />
          <Flex display={['none', 'flex']}>
            <Text fontWeight="bold" maxLength="40px">
              {userStore?.user?.name}
            </Text>
          </Flex>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOptions.map((item) => (
          <MenuItem
            key={`menu_item_${item.id}`}
            id={item.id}
            text={item.text}
            icon={item.icon}
            h="48px"
            divider={item.divider}
            onClick={() => item.onClick()}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
