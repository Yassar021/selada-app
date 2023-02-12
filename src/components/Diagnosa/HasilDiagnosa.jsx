import { Box, Container, Flex, Text } from "@chakra-ui/react"
import Navbar from "../Navbar"
import Content from "../Informasi/content"


const HasilDiagnosa = () => {
    return (
        <Box bgColor={"#f5f5f5"} width='100%'>
            <Navbar />
            <Container bgColor='#fff' maxW='lg' height={"90vh"} pt='20px'>
                <Flex direction='column' gap='20px'>
                    <Text>Hasil Diagnosa</Text>

                    <Content img="/2.jpg" title="Lorem" subtitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                </Flex>
            </Container>
        </Box>
    )
}

export default HasilDiagnosa