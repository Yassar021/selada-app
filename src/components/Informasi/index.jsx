import { Container, Flex, Text } from "@chakra-ui/react"
import BusukAkar from "./busukAkar"
import Content from "./content"
import MataKodok from "./mataKodok"
import Thrips from "./thrips"

const Informasi = () => {
    return (
        <Container bgColor='#fff' maxW='lg' pt='20px'>
            <Flex direction="column" gap='20px' pb='50px'>
                {/* <Text fontWeight={"600"}>Informasi Umum</Text>
                <Content img="/selada.jpeg" subtitle="Hidroponik merupakan budidaya menanam dengan memanfaatkan air tanpa menggunakan tanah, cara ini menekankan pada pemenuhan kebutuhan nutrisi tanaman." /> */}

                <Text mt='40px' fontWeight={"600"}>Penyakit Hidroponik Selada</Text>
                <MataKodok />
                <BusukAkar />
                <Thrips />
            </Flex>
        </Container>
    )
}

export default Informasi