import { Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { ContainerHome } from "../Pages/Home/style"

export default function Modal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <ContainerHome>
        <Button onClick={onOpen}>Trigger modal</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ContainerHome>
    )
  }