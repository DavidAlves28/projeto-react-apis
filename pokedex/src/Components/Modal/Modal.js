import { Heading, Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext/GlobalContext"
import { ContainerHome } from "../../Pages/HomePage/style"
import { useLocation, useParams } from 'react-router-dom';
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../Constants/BASE_URL";

export default function ModalSimple() {
  const location = useLocation()
  const context = useContext(GlobalContext);
  const { id } = useParams()
  const { isOpen, onClose, pokedex } = context;
  const [data] = useRequestData(`${BASE_URL}/pokemon/${id}`, {})
  // Função para retornar Modal correto para cada Page.
  const ShowModal = () => {
    // Retorna Modal de add pokemon caso a page for a home!
    if (location.pathname === '/') {
      return (<> <Heading fontSize={'48px'} fontWeight={'700'} textAlign={'center'} >Gotcha!</Heading>
        <Heading fontSize={'16px'} textAlign={'center'} >
          O Pokémon foi adiocionado a sua Pokédex
        </Heading> </>)
    }
    // verifica se  o pokemon está ou não na pokedex e rotorna o Modal correto  . essa condicional enfluencia na Page Details.
    if (pokedex) {
      const verificaPokemon = pokedex.find((pokemon) =>
        pokemon.name === data.name
      )
      if (verificaPokemon) {
        return (<> <Heading fontSize={'48px'} fontWeight={'700'} textAlign={'center'} >Gotcha!</Heading>
          <Heading fontSize={'16px'} textAlign={'center'} >
            O Pokémon foi adiocionado a sua Pokédex
          </Heading> </>)
      } else {

        return (<>
          <Heading fontSize={'48px'} fontWeight={'700'} textAlign={'center'} >Oh,no!</Heading>
          <Heading fontSize={'16px'} textAlign={'center'} >
            O Pokémon foi removido da sua Pokedéx
          </Heading></>)
      }
    }
  }

  return (
    <ContainerHome  >
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent w={'451px'} h={'222'}>
          <ModalBody display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} >
            {ShowModal()}            
          </ModalBody>
        </ModalContent>
      </Modal>
    </ContainerHome>
  )
}