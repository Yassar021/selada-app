import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRef, useState, MutableRefObject } from "react"
import Navbar from "../Navbar"
import Content from "../Informasi/content"
import { uploadImage } from "@/services/api"

const Diagnosa = () => {
    const inputFileRef = useRef();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isLoading, setLoading] = useState(false)

    const [imageUrl, setImageUrl] = useState("");
    const [result, setResult] = useState()

    const [page, setPage] = useState("form")

    const submitHandler = async () => {

        if (inputFileRef.current.files) {
            setLoading(true)
            let file = inputFileRef.current.files[0]
            let imageUrl = URL.createObjectURL(file)
            let response = await uploadImage(name, email, phone, file);

            setResult(response);
            setImageUrl(imageUrl);
            setLoading(false)
            setPage("result");
        }
    }

    return (
        <Box bgColor={"#f5f5f5"} width='100%'>
            <Navbar />
            {
                page === "form" ?
                    <Container bgColor='#fff' maxW='lg' height={"90vh"} pt='20px'>
                        <Flex direction="column" gap='20px' pb='50px'>
                            <Text>Lengkapi data dibawah ini :</Text>
                            {/* <Box>
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
                            </Box> */}

                            <Box>
                                <Text mb='4px'>Foto Selada</Text>
                                <Input
                                    ref={inputFileRef}
                                    p='4px'
                                    type='file'
                                    bgColor="#fff"
                                    required
                                    placeholder="Add Image"
                                />

                            </Box>
                            <Button
                                onClick={submitHandler}
                                mt='40px'
                                disabled={isLoading}
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
                                {isLoading ? "Loading..." : "Mulai Diagnosa"}
                            </Button>
                        </Flex>
                    </Container>
                    :
                    <Container bgColor='#fff' maxW='lg' height={"90vh"} pt='20px'>
                        <Flex direction='column' gap='20px'>
                            <Text>Hasil Diagnosa</Text>

                            <Content confidents={result?.prediction.confidents} img={imageUrl} title={result?.prediction.lable} subtitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                        </Flex>
                    </Container>
            }
        </Box>
    )
}

export default Diagnosa