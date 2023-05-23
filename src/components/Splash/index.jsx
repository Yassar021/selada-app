import { Box, Button, Center, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"

const Splash = () => {
    return (
        <Container maxW='lg' height={'100vh'} pt='20px'>
            <Flex height={'96%'} direction="column" justifyContent={'space-between'} >
                <Box></Box>
                <Box>
                    <Text fontSize={'58px'} fontFamily={'Aclonica'} fontWeight={'400'} color={'#fff'}>Lettuce Healthy</Text>
                    <Text mt='15px' mb='6px' fontSize={'10px'} fontFamily={'Aclonica'} fontWeight={'500'} color={'#fff'}>Flowers always make people better, happier, and more helpful; they are sunshine, food and medicine for the soul.</Text>
                    <HStack spacing='2px'>
                        <Stack>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5.6907" cy="6.39382" r="5.54226" fill="#FF8A00" />
                            </svg>
                        </Stack>
                        <Stack>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5.80789" cy="6.39382" r="5.54226" fill="white" />
                            </svg>

                        </Stack>
                    </HStack>
                    <Link href={'/Homepage'}>
                        <Button
                            mt='40px'
                            height='43px'
                            width='117px'
                            backgroundColor={'#2C5E46'}
                            fontFamily={'Aclonica'}
                            color='#fff'
                            fontWeight={'400'}
                            letterSpacing={'0.5px'}
                            _hover={{ bg: '#2C5E46' }}
                            _active={{
                                bg: '#2C5E46',
                                transform: 'scale(0.98)',
                            }}
                        >
                            Mulai
                        </Button></Link>
                </Box>
                <Box>
                    <Center>
                        <Box textAlign={'center'}>
                            <Text fontSize={'12px'} fontFamily={'Lato'} fontWeight={'400'} color={'#6D6D6D'}>© 2023 Selada . All Rights Reserved.</Text>
                        </Box>
                    </Center>
                </Box>
            </Flex>
        </Container>
    )
}

export default Splash