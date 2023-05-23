import { Box, Button, Flex, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, OrderedList, Stack, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";

const MataKodok = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Mata Kodok</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <MataKodokDesc />
                    </ModalBody>

                    <ModalFooter>
                        <Button bgColor={'#2C5E46'} color='#fff' mr={3} onClick={onClose}>
                            Tutup
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Flex direction="column" gap="10px" textAlign={"justify"}>
                <Box width={{ base: 'auto', lg: '345px' }} height={'345px'} bgImage={'/matakodok.png'} bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'} borderRadius={'12px'}>
                    <Flex height={'90%'} px='24px' direction={'column'} justifyContent={'space-between'}>
                        <Box>
                        </Box>
                        <Box>
                            <Text mb='8px' fontSize={'20px'} fontWeight={'700'} color='#fff'>Penyakit mata kodok</Text>
                            <Button
                                onClick={onOpen}
                                height='38px'
                                width='97px'
                                backgroundColor={'#fff'}
                                fontFamily={'SF Pro Display'}
                                color='#2C5E46'
                                fontWeight={'600'}
                                letterSpacing={'0.5px'}
                                _hover={{ bg: '#fff' }}
                                _active={{
                                    bg: '#fff',
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
    );
};

export function MataKodokDesc() {
    return (
        <>
            <Text fontWeight={"600"} fontSize={"16px"}>
                Apa itu penyakit mata kodok pada selada hidroponik?
            </Text>
            <Text textAlign={"justify"} fontSize={"16px"}>
                <br />Penyakit mata kodok adalah penyakit yang biasanya disebabkan karena
                instalisasi green house yang tidak memadai. Sehingga munculah jamur
                cercospora sp. Cuan,Hidroponik, Selada Penyakit ini ditandai dengan
                adanya bercak hitam pada daun selada. Bercak tersebut bentuknya bulat
                dengan lingkaran yang agak konsentris.
            </Text>
            <Text fontWeight={"600"} fontSize={"16px"}>
                <br />Cara mengatasi mata kodok pada selada hidroponik
            </Text>
            <Text textAlign={"justify"} fontSize={"16px"}>
                <br />Di bawah ini adalah proses dalam mengatasi penyakit mata kodok. Berikut
                di antaranya:
            </Text>
            <OrderedList textAlign={"justify"}>
                <ListItem>Kuras tandon penampungan minimal sebulan sekali</ListItem>
                <ListItem>
                    Bersihkan dan keringkan peralon minimal selama 24 jam setelah Anda
                    panen
                </ListItem>
                <ListItem>
                    Lakukan penyemprotan fungisida pada tanaman selada hidroponik Anda.
                    Utamakan penyemprotan ditujukan pada bibit selada yang masih kecil
                </ListItem>
                <ListItem>
                    Penyemprotan harus menyeluruh sampai ke bagian atas instalasi
                </ListItem>
                <ListItem>
                    Penyemprotan awal mesti dilakukan setiap dua hari sekali dan lakukan
                    lah pada pagi hari. Dengan demikian, jamur cercospora sp akan mulai
                    berkurang
                </ListItem>
                <ListItem>
                    Berikan juga Calsium Nitrat. Ini adalah jenis kalsium yang dapat
                    membantu tanaman agar tidak tertular dan tidak terinfeksi kembali
                </ListItem>
                <ListItem>
                    Berikan jamur Tricoderma untuk mengatasi mata kodok sehingga daun yang
                    sudah terinfeksi menjadi mati dan tidak mudah tersebar
                </ListItem>
            </OrderedList>
        </>
    );
}

export default MataKodok;
