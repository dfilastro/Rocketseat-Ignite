import { Center, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <>
      {/* <Image
        pt='42'
        pl='140px'
        position='absolute'
        src='https://user-images.githubusercontent.com/90292951/174458185-3aec0928-f567-450a-9761-ece9a71aec30.png'
      /> */}
      <Center as='header' w='100%' h='100'>
        <Image
          src='https://user-images.githubusercontent.com/90292951/169840750-f6cd923f-3473-4ee4-88d7-31868f2c90f0.svg'
          alt='logo'
          w='46'
        />
      </Center>
    </>
  );
}