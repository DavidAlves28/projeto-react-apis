import { Box, Button, Container, Flex, Grid, Heading, Image, Img, Stack, Text } from "@chakra-ui/react";
import HeaderSimple from "../../Components/Header";
import { CardDetails, CardTypes, ContainerDetails, ContainerInfoPokemon, } from "./style";
import { useParams } from 'react-router-dom';
import { useRequestData } from './../../hooks/useRequestData';
import { BASE_URL } from './../../Constants/BASE_URL';
import { getColors } from './../../utils/returnColors';
import ProgressBar from './../../Components/ProgressBar/ProgressBar';
import { getTypes } from './../../utils/returnTypes';
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { useContext } from "react";
import ModalSimple from "../../Components/Modal/Modal";


export default function DetailsPage() {
  const { id } = useParams()
  const context = useContext(GlobalContext)
    // import dos dados da GlobalState
  const { isOpen } = context
  const [data, types] = useRequestData(`${BASE_URL}/pokemon/${id}`, {})

  return (
    <Container display={'flex'}
      flexDir={'column'}
      justifyContent={'space-between'}
      minW={'96vw'}

    >
      <HeaderSimple />
      {/* Curto circuito para mostra o Modal */}
      {isOpen && <ModalSimple />}

      <ContainerDetails key={data.id} >
      
        <Heading ml={'5%'} mt={'5%'} mb={'3%'} size={'2xl'} color={'#fff'}>Detalhes</Heading>
        <Container
          display={'flex'}
          borderRadius={'38px'}
          minW={'95%'}
          maxH={'100%'}
          bg={types && getColors(types)}
          mb={'20px'}
          gap={'1%'}
        >
          <Flex ml={'1.3%'}
            justifyContent={'flex-start'}
            alignContent='center'
            padding='24px 0px'
            gap={'3%'}
            w={'60%'}
            
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='space-between'              
              h={'30%'}
              w={'30%'}
              gap={'2%'}
            >
              <Image
               
                borderRadius='8px'               
                backgroundColor='white'
                src={data.sprites?.["front_default"]} alt='Imagem Pokemon de Costas' />
              <Image
                borderRadius='8px'
                
                backgroundColor='white'
                src={data.sprites?.["back_default"]} alt='Imagem Pokemon de Frente' />
            </Box>
            <Box
              backgroundColor='white'
              minH={'10%'}
              minW={'20%'}
              borderRadius='12px'
              color='black'
            >
              <Text fontSize='28px' fontWeight='700' padding='10px 18px'>Base Stats</Text>
              <>

                {data.stats?.map((stat) => {
                  return (
                    <Container  >
                      <Flex key={stat.stat.name}>
                        <Grid
                          minWidth='45%'
                          display='grid'
                          justifyItems='left'
                          alignItems='center'
                          gridTemplateColumns='50px 50px 150px'
                          fontFamily="'Poppins', sans-serif"
                          fontWeight='400'
                          padding='0 20px'
                          columnGap='4px'
                          fontSize='14px'

                        >
                          <Text color='gray.500' justifySelf={'left'} gridColumn='1/2'>{stat.stat.name}</Text>
                          <Text justifySelf='flex-end' gridColumn='2/3' >{stat.base_stat}</Text>
                          <ProgressBar completed={stat.base_stat}></ProgressBar>
                        </Grid>
                      </Flex>
                    </Container>

                  )
                })}
              </>
              <Grid
                width='300px'
                display='grid'
                justifyItems='right'
                alignItems='center'
                gridTemplateColumns='50px 50px 150px'
                fontFamily="'Poppins', sans-serif"
                fontWeight='400'
                padding='0 20px'
                columnGap='4px'
                fontSize='14px'
              >
                <Text
                  color='gray.500'
                >Total</Text>
                <Text fontWeight='700'>{
                  data.stats?.reduce((acc, stat) => {
                    return acc + stat.base_stat
                  }, 0)
                }</Text>
              </Grid>
            </Box>
          </Flex>
          <CardDetails>
            <ContainerInfoPokemon >
              {data.id < 10 ?
                <Heading as='h3' color={'#fff'} size={'sm'}># 0{data.id}</Heading> :
                <Heading as='h3' color={'#fff'} size={'sm'}># {data.id}</Heading>
              }
              <Heading color={'#fff'} >{data.name}</Heading>
              <CardTypes>
                {data.types?.map((type) => {
                  return <Img key={type.type.name} src={getTypes(type.type.name)} />
                })}
              </CardTypes>
            </ContainerInfoPokemon>
            <Image
              position='absolute'
              minW={'30%'}
              maxH={'50%'}
              right='40px'
              top='-130px'
              src={data.sprites?.other["official-artwork"].front_default} alt='Imagem Pokémon' />
            <Flex
              backgroundColor='#FFFFFF'
              borderRadius='8px'
              minW={'15%'}
              minH={'10%'}
              color='black'
              position='absolute'
              bottom='24px'
              flexDirection='column'
              justifyContent={'left'}
              gap='20px'
              padding='18px 18px'
            >
              <Text minW={'16vw'} minH={'16%'} fontSize='24px' fontWeight='700'>Moves:</Text>
              {data.moves?.filter((move, index) => index < 4)
                .map((move) => {
                  return (
                    <Stack key={move.move.url} >
                      <Button
                        width='fit-content'
                        height='37px'
                        bg='#ECECEC'
                        border='1px dashed rgba(0, 0, 0, 0.14)'
                        borderRadius='12px'>
                        {move.move.name}
                      </Button>
                    </Stack>

                  )
                })}
            </Flex>
          </CardDetails>
        </Container>
      </ContainerDetails>
    </Container>

  )
}

