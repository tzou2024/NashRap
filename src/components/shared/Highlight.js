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
  // backgroundColor={"#DEF3FD"}
  border="2px solid #DEF3FD"
  my="5"
>
  <Image
    objectFit='cover'
    float={"left"}
    width={"20rem"}
    // he
    height={"22rem"}
    backgroundSize={"cover"}
    src={imgsrc}
    // alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
        {descrip}
      </Text>

      <Text fontWeight={"semibold"}>
      Featured Work:
      </Text>

      <Link href={linker} isExternal color="blue">
        {linkdescrip}
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
