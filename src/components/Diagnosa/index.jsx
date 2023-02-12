import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "../Navbar"

const Diagnosa = () => {
    return (
        <Box bgColor={"#f5f5f5"} width='100%'>
            <Navbar />
            <Container bgColor='#fff' maxW='lg' height={"90vh"} pt='20px'>
                <Flex direction="column" gap='20px' pb='50px'>
                    <Text>Lengkapi data dibawah ini :</Text>
                    <Box>
                        <Text mb='4px'>Nama</Text>
                        <Input
                            placeholder='Here is a sample placeholder'
                            size='md' />
                    </Box>

                    <Box>
                        <Text mb='4px'>Email</Text>
                        <Input
                            placeholder='Here is a sample placeholder'
                            size='md' />
                    </Box>

                    <Box>
                        <Text mb='4px'>No HP</Text>
                        <Input
                            placeholder='Here is a sample placeholder'
                            size='md' />
                    </Box>

                    <Box>
                        <Text mb='4px'>Foto Selada</Text>
                        <Input
                            p='4px'
                            type={'file'}
                            bgColor="#fff"
                            required
                            placeholder="Add Image"
                        />

                    </Box>

                    <Link href="/Hasil">
                        <Button
                            mt='40px'
                            height="40px"
                            width="100%"
                            bgColor={'#00BD07'}
                            color="#fff"
                            type="submit"
                            _hover={{ bg: '#00BD07' }}
                            _active={{
                                bg: '#00BD07',
                                transform: 'scale(0.98)',
                            }}
                        >
                            Mulai Diagnosa
                        </Button>
                    </Link>
                </Flex>
            </Container>
        </Box>
    )
}

export default Diagnosa