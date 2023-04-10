import React from 'react'
import { 
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
    Button } from '@chakra-ui/react'

export const Highlight = ({imgsrc, title, descrip}) => {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    // maxW={{ base: '100%', sm: '200px' }}
    src={imgsrc}
    // alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
        {descrip}
      </Text>
    </CardBody>

    {/* <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter> */}
  </Stack>
</Card>
  )
}
