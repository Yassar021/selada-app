import { Flex, ListItem, OrderedList, Text } from "@chakra-ui/react"
import Image from "next/image"

const BusukAkar = () => {
    return (
        <Flex direction="column" gap='10px' textAlign={'justify'}>
            <Text fontWeight={'600'} fontSize={"24px"}>Busuk Akar</Text>
            <Image width="250" height="250" src={'/busukakar.jpg'} alt="content" />
            <Text fontWeight={'600'} fontSize={"16px"}>Mengapa Busuk Akar Hidroponik bisa Terjadi?</Text>
            <Text textAlign={'justify'} fontSize={"16px"}>
                Fenomena akar busuk bisa terjadi dalam beberapa cara yang berbeda. Hal ini juga bergantung pada jenis tanaman yang terdampak: apakah tumbuhan yang berbunga atau sejenis selada/tanaman rempah. Beberapa gejala umum yang sering dijumpai adalah daun menggulung keatas atau kebawah, pertumbuhan tanaman menjadi lambat, dan bisa saja warna daun menguning.
            </Text>
            <Text fontWeight={'600'} fontSize={"16px"}>Mengatasi Busuk Akar Hidroponik</Text>
            <Text textAlign={'justify'} fontSize={"16px"}>
                Jika kamu segera menyadari bahwa ada tanaman yang terdampak penyakit pembusukan akar, lakukan cara-cara berikut untuk membantu mengatasi permasalahan:
            </Text>
            <OrderedList textAlign={'justify'}>
                <ListItem>Cara terbaik mencegah penyebaran busuk akar hidroponik adalah dengan memisahkan tanaman yang sudah terdampak (khususnya jika sebagian besar akarnya dan daunnya sudah menunjukkan gejala yang jelas). Kamu dapat melakukannya dengan mengangkat tanaman dari media tanam dan merendamkannya dalam air atau menggunting akar yang sudah mati.</ListItem>
                <ListItem>Jika penyakit sudah mulai mempengaruhi akar tanaman yang lain di kebun, rendamlah akar dengan air bersih dan guntinglah akar yang sudah mati dengan gunting yang steril. Tanamkan kembali tanaman di media yang baru dan sebaiknya gantilah komposisi aliran nutrisi cair.</ListItem>
                <ListItem>Selain air, kamu bisa menggunakan bahan kimia, seperti fungisida, chloropicrin, metil bromida, Physan 20, dan atau Hidrogen Peroksida (H2O2) untuk membersihkan akar dari lapisan lendir dan bakteri. Produk kimia tersebut tidak dapat membedakan bakteri yang patogen dan yang menguntungkan akar. Karena itu, jika sudah selesai membersihkan akar, kamu bisa menambahkan kembali bakteri yang menguntungkan (misal dengan menggunakan produk hydroguard) untuk mengembalikan fungsi akar seperti semula. Selain itu, penting sekali untuk mengidentifikasi jamur mana yang menyebabkan akar membusuk agar kita tahu menggunakan bahan kimia yang tepat.</ListItem>
            </OrderedList>

        </Flex>
    )
}

export default BusukAkar