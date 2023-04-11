import React from 'react'
import { 
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Link,
  Button } from '@chakra-ui/react'

export const Highlight = ({imgsrc, title, descrip, linker, linkdescrip}) => {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '500px' }}
    src={imgsrc}
    // alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
        {descrip}
      </Text>

      <Link href={linker} isExternal color="blue">
        Checkout {linkdescrip}
      </Link>
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
