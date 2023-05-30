import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Política de Privacidade</Text.ScreenTitle>
        </DrawerHeader>
        <DrawerBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            volutpat convallis tincidunt. Duis ac leo in ipsum maximus auctor
            eget ut odio. Phasellus ut mollis sapien, sed porta odio. Cras
            blandit sapien in sapien tincidunt rutrum. Nam egestas sapien quis
            dolor tempus, nec auctor dui fringilla. Vivamus iaculis ac libero
            vel blandit. Integer semper pharetra dictum. Maecenas eget velit
            eget enim consectetur fringilla. Nam suscipit metus eros, ac
            malesuada est rutrum sit amet. Sed vulputate, ante ac luctus
            rhoncus, turpis leo commodo arcu, quis tincidunt quam ex suscipit
            velit. Cras imperdiet dui id arcu pulvinar cursus. Nullam neque
            lacus, interdum vitae risus id, rutrum lacinia odio. Sed pretium
            semper lorem vel blandit. Vestibulum eu nunc tempor, aliquam mauris
            et, facilisis risus.
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
