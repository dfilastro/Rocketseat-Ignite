import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Image
        position='absolute'
        zIndex='-99'
        w='100%'
        // h='30vh'
        bgSize='cover'
        src='https://user-images.githubusercontent.com/90292951/169844153-5d37ee5c-5014-4ef7-b4e9-db4581ee68f2.svg'
      />

      <Stack w='80vw' mx='auto'>
        <Flex justifyContent='space-between'>
          <Stack
            display='flex'
            color='white'
            mt={['20px', '40px', '48px', '100px']}
            gap={['1', '2', '4', '5']}
          >
            <Flex
              w={['160px', '320px', '368px', '426px']}
              fontSize={['13', '26', '30', '36']}
              fontWeight='500'
              lineHeight={['13px', '22px', '36px', '54px']}
            >
              5 Continentes, infinitas possibilidades.
            </Flex>
            <Flex
              w={['160px', '320px', '360px', '524px']}
              fontWeight='400'
              fontSize={['8', '12', '16', '20']}
              lineHeight={['12px', '18px', '22px', '30px']}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
            </Flex>
          </Stack>
          <Image
            src='https://user-images.githubusercontent.com/90292951/169850798-2458cddf-f47c-403e-8e1b-2458981a8bb6.svg'
            alt='airplane image'
            mt={['35px', '70px', '96px', '176px']}
            w='29%'
            // ml={['800px', '1260px']}
            // position='absolute'
          />
        </Flex>

        <Flex
          justifyContent='space-between'
          pt={['16px', '32px', '48px', '80px']}
          // w={['20%', '100%']}
        >
          <Image
            w={['12%']}
            src='https://user-images.githubusercontent.com/90292951/169871879-2f02f359-b8bd-4c79-9a85-03c287d970bc.svg'
            alt=''
          />
          <Image
            w={['6.4%']}
            src='https://user-images.githubusercontent.com/90292951/169872257-c18cbca9-34e8-44cf-a700-6acdaa8c51c7.svg'
            alt=''
          />
          <Image
            w={['8.4%']}
            src='https://user-images.githubusercontent.com/90292951/169872280-dee6b439-0226-424c-aa4d-d8f4e569210f.svg'
            alt=''
          />
          <Image
            w={['7.2%']}
            src='https://user-images.githubusercontent.com/90292951/169872301-3fe57188-c969-49e5-add1-ff6c7a56a24a.svg'
            alt=''
          />
          <Image
            w={['7.2%']}
            src='https://user-images.githubusercontent.com/90292951/169872321-9b9c53e4-e95b-49db-af94-7940bbf0157c.svg'
            alt=''
          />
        </Flex>

        <Flex justifyContent='center'>
          <Flex
            borderBottom='2px'
            borderColor='gray.800'
            w={['18px', '36px', '54px', '90px']}
            mt={['16px', '32px', '48px', '80px']}
            fontWeight='500'
          />
        </Flex>

        <Flex
          flexDir='column'
          alignItems='center'
          fontSize={['12px', '16px', '20px', '36px']}
          pt={['22px', '33px', '56px']}
        >
          <Box>Vamos nessa?</Box>
          <Box>Então escolha seu continente</Box>
        </Flex>
      </Stack>
      <Carousel />
    </>
  );
}
