import { Box, Button, Flex, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, OrderedList, Text, useDisclosure } from "@chakra-ui/react"


const Thrips = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Thrips</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ThripsDesc />
                    </ModalBody>

                    <ModalFooter>
                        <Button bgColor={'#2C5E46'} color='#fff' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Flex direction="column" gap="10px" textAlign={"justify"}>
                <Box width={{ base: 'auto', lg: '345px' }} height={'345px'} bgImage={'/matakodok.jpg'} bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'} borderRadius={'12px'}>
                    <Flex height={'90%'} px='24px' direction={'column'} justifyContent={'space-between'}>
                        <Box>
                        </Box>
                        <Box>
                            <Text mb='8px' fontSize={'20px'} fontWeight={'700'} color='#fff'>Penyakit Thrips</Text>
                            <Button
                                onClick={onOpen}
                                height='38px'
                                width='97px'
                                backgroundColor={'#fff'}
                                fontFamily={'SF Pro Display'}
                                color='#2C5E46'
                                fontWeight={'600'}
                                letterSpacing={'0.5px'}
                                _hover={{ bg: '#2C5E46' }}
                                _active={{
                                    bg: '#2C5E46',
                                    transform: 'scale(0.98)',
                                }}
                            >
                                Detail
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export function ThripsDesc() {
    return (
        <>
            <Text textAlign={'justify'} fontSize={"16px"}>
                Penyakit Thrips dapat menyebabkan daun pada selada menjadi kuning lalu kering dan ujungnya tanaman selada pun akan mati. Dan jika tanaman selada sudah terserang dengan jenis penyakit ini maka dapat dikendalikan dengan menggunakan insektisida yang sesuai dengan dosis yang dianjurkan.
            </Text>
        </>
    )
}

export default Thrips