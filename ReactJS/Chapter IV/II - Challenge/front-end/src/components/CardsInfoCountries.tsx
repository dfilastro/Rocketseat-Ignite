import { Flex, Stack } from '@chakra-ui/react';

interface CardsCountriesProps {
  num: number;
  desc: string;
}

export default function CardsInfoCountries({ num, desc }: CardsCountriesProps) {
  return (
    <Stack alignItems='center'>
      <Flex fontSize={['20px', '30px', '48px']} fontWeight='600' color='highlight'>
        {num}
      </Flex>
      <Flex fontSize={['10px', '15px', '24px']} color='gray.800' fontWeight='600'>
        {desc}
      </Flex>
    </Stack>
  );
}
