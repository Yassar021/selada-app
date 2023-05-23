import { Container, Flex, Text } from "@chakra-ui/react"
import BusukAkar from "./busukAkar"
import Content from "./content"
import MataKodok from "./mataKodok"
import Thrips from "./thrips"

const Informasi = () => {
    return (
        <Container bgColor='#fff' maxW='lg'>
            <Flex direction="column" gap='20px' pb='50px'>
                <Text mt='40px' fontSize={'28px'} fontWeight={"600"}>Penyakit Hidroponik Selada</Text>
                <MataKodok />
                <BusukAkar />
                <Thrips />
            </Flex>
        </Container>
    )
}

export default Informasi