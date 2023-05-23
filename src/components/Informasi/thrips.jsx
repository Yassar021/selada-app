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
                            Tutup
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Flex direction="column" gap="10px" textAlign={"justify"}>
                <Box width={{ base: 'auto', lg: '345px' }} height={'345px'} bgImage={'/trips.png'} bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'} borderRadius={'12px'}>
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
            <Text fontWeight={"600"} fontSize={"16px"}>
                <br />Cara Mengendalikan Penyakit Selada
            </Text>
            <Text textAlign={"justify"} fontSize={"16px"}>
                <br />Untuk dapat menghasilkan hasil panen yang bagus, sebagai petani, memang harus rajin merawat tanamannya. Tidak boleh malas dan harus selalu waspada mengawasi perkembangan tanamannya.
            </Text>
            <Text textAlign={"justify"} fontSize={"16px"}>
                <br />Setelah berbicara mengenai beberapa penyakit selada yang umum, berikut ini adalah langkah dan trik pengendaliannya :
            </Text>
            <OrderedList textAlign={"justify"}>
                <ListItem>
                    Mengatur jarak tanam, Melakukan hal tersebut, di samping bertujuan pada pembagian nutrisi bisa menyebar secara merata ke seluruh tanaman, juga berpengaruh pada penyakit yang tiba-tiba datang menyerang. Dalam skala kecil, kita tinggal mencari sumbernya, kemudian memisahkan dengan yang lain supaya terselamatkan. <br />
                    Terkecuali datang pada waktu bersamaan dan secara besar, maka pembasmiannya lewat cara lain yakni penyemprotan pestisida. Metode itu bisa diterapkan pada penyakit kategori busuk pangkal daun.
                </ListItem>
                <ListItem>
                    Menjaga kelembaban tanah, Jamur, yang merupakan potensi penyakit selada, mudah tumbuh pada lahan yang basah, seperti jenis Rhizoctonia Solani yang menyerang batang. Oleh karena itu, penting sekali menjaga kelembabannya, jangan sampai terlalu lembab. <br />
                    Bila tanaman sudah terlanjur terinfeksi secara luas dan parah, tidak ada pilihan lain. Anda harus melakukan pengendalian dengan memakai fungisida, sesuai dosis yang telah dianjurkan. Jangan melebihi takaran.
                </ListItem>
                <ListItem>
                    Menjaga kebersihan lahan, Selain keadaan lembab, lahan yang kotor juga merupakan tempat empuk pertumbuhan bakteri. Bersihkan tanaman gulma atau rumput penganggu di sekitar area kebun selada. Rajin-rajinlah mengawasi dan membersihkan bila terlihat sudah tak enak dipandang, agar tanaman tumbuh dengan baik.
                </ListItem>
                <ListItem>
                    Melakukan Irigasi yang baik, Karena selada termasuk jenis tanaman air, tentu pertumbuhannya tak terlepas dari kondisi air. Pastinya juga memiliki takaran khusus yang perlu diberikan pada masing-masing lebar lahan tanam. Tidak mungkin sama debit air atau volume yang mesti disebarkan.
                </ListItem>
                <ListItem>
                    Melakukan rotasi tanaman, Hal yang tak boleh dianggap remeh selanjutnya, yakni rotasi tanaman. Perputaran tanaman bertujuan untuk memutus perkembangbiakan jenis bakteri yang bernama Felicularia Filamentosa yang umum menyerang pangkal daun hingga berakibat hadirnya pembusukan di sana.
                </ListItem>
                <ListItem>
                    Pencahayaan yang cukup, Tak bisa dipungkiri, sekalipun ada beberapa jenis tanaman yang tidak tahan dengan sinar matahari, namun tetap saja cahaya alam itu dibutuhkan tanaman dalam proses fotosintesisnya. Jadi, bila ditanyakan seberapa besar hal tersebut mempengaruhi perkembangan tananam, jawabannya tentu sangat berpengaruh sekali.
                </ListItem>
            </OrderedList>
        </>
    )
}

export default Thrips