import { Flex, ListItem, OrderedList, Text } from "@chakra-ui/react"
import Image from "next/image"

const Thrips = () => {
    return (
        <Flex direction="column" gap='10px' textAlign={'justify'}>
            <Text fontWeight={'600'} fontSize={"24px"}>Thrips</Text>
            <Image width="250" height="250" src={'/thrips.jpg'} alt="content" />
            <ThripsDesc />
        </Flex>
    )
}

export function ThripsDesc() {
    return (
        <>
            {/* <Text fontWeight={'600'} fontSize={"16px"}>Apa itu penyakit mata kodok pada selada hidroponik?</Text> */}
            <Text textAlign={'justify'} fontSize={"16px"}>
                Penyakit Thrips dapat menyebabkan daun pada selada menjadi kuning lalu kering dan ujungnya tanaman selada pun akan mati. Dan jika tanaman selada sudah terserang dengan jenis penyakit ini maka dapat dikendalikan dengan menggunakan insektisida yang sesuai dengan dosis yang dianjurkan.
            </Text>
        </>
    )
}

export default Thrips