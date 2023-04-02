import { Flex, ListItem, OrderedList, Text } from "@chakra-ui/react"
import Image from "next/image"

const MataKodok = () => {
    return (
        <Flex direction="column" gap='10px' textAlign={'justify'}>
            <Text fontWeight={'600'} fontSize={"24px"}>Mata Kodok</Text>
            <Image width="250" height="250" src={'/matakodok.jpg'} alt="content" />
            <Text fontWeight={'600'} fontSize={"16px"}>Apa itu penyakit mata kodok pada selada hidroponik?</Text>
            <Text textAlign={'justify'} fontSize={"16px"}>Penyakit mata kodok adalah penyakit yang biasanya disebabkan karena instalisasi green house yang tidak memadai. Sehingga munculah jamur cercospora sp.
                Cuan,Hidroponik, Selada

                Penyakit ini ditandai dengan adanya bercak hitam pada daun selada. Bercak tersebut bentuknya bulat dengan lingkaran yang agak konsentris.
            </Text>
            <Text fontWeight={'600'} fontSize={"16px"}>Cara mengatasi mata kodok pada selada hidroponik</Text>
            <Text textAlign={'justify'} fontSize={"16px"}>
                Di bawah ini adalah proses dalam mengatasi penyakit mata kodok. Berikut di antaranya:
            </Text>
            <OrderedList textAlign={'justify'}>
                <ListItem>Kuras tandon penampungan minimal sebulan sekali</ListItem>
                <ListItem>Bersihkan dan keringkan peralon minimal selama 24 jam setelah Anda panen</ListItem>
                <ListItem>Lakukan penyemprotan fungisida pada tanaman selada hidroponik Anda. Utamakan penyemprotan ditujukan pada bibit selada yang masih kecil</ListItem>
                <ListItem>Penyemprotan harus menyeluruh sampai ke bagian atas instalasi</ListItem>
                <ListItem>Penyemprotan awal mesti dilakukan setiap dua hari sekali dan lakukan lah pada pagi hari. Dengan demikian, jamur cercospora sp akan mulai berkurang</ListItem>
                <ListItem>Berikan juga Calsium Nitrat. Ini adalah jenis kalsium yang dapat membantu tanaman agar tidak tertular dan tidak terinfeksi kembali</ListItem>
                <ListItem>Berikan jamur Tricoderma untuk mengatasi mata kodok sehingga daun yang sudah terinfeksi menjadi mati dan tidak mudah tersebar</ListItem>
            </OrderedList>

        </Flex>
    )
}

export default MataKodok