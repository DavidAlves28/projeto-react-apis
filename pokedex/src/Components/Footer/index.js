import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub,  FaLinkedin } from 'react-icons/fa';  
  
  const SocialButton = ({
    children,
    label,
    href,
    
  }) => {
    return (
        // Configurações dos buttons
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={9}
        h={9 }
        cursor={'pointer'}
        as={'a'}
        href={href}
        target={"_blank"}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function FooterSimple() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
          >            
          <Text>© 2023 David Alves Costa . </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Linkedin'}   href={'https://www.linkedin.com/in/david-dev-full/'}  >
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/DavidAlves28'}>
              <FaGithub />
            </SocialButton>           
          </Stack>
        </Container>
      </Box>
    );
  }
