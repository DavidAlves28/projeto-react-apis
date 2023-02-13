import { Heading, Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext/GlobalContext"
import { ContainerHome } from "../../Pages/Home/style"
import { useLocation, useParams } from 'react-router-dom';

export default function ModalSimple() {
  const context = useContext(GlobalContext);
  const {id} = useParams()
  const location = useLocation()
  const { isOpen, onClose, setOpenModal } = context;
  if (onClose === true) {
    setOpenModal(false)
  }
  return (
    <ContainerHome    >


      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent w={'451px'} h={'222'}>
          <ModalBody display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} >
            {location.pathname === '/pokedex' || location.pathname === `/details/${id}` ? ( <>

              <Heading fontSize={'48px'} fontWeight={'700'} textAlign={'center'} >Oh,no!</Heading>
            <Heading fontSize={'16px'} textAlign={'center'} >
              O Pokémon foi removido da sua Pokedéx
            </Heading></> ) :
              ( <> <Heading fontSize={'48px'} fontWeight={'700'} textAlign={'center'} >Gotcha!</Heading>
            <Heading fontSize={'16px'} textAlign={'center'} >
              O Pokémon foi adiocionado a sua Pokédex
            </Heading> </>)}

          </ModalBody>

        </ModalContent>
      </Modal>
    </ContainerHome>
  )
}