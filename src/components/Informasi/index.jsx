import { Container, Flex, Text } from "@chakra-ui/react"
import Content from "./content"

const Informasi = () => {
    return (
        <Container bgColor='#fff' maxW='lg' pt='20px'>
            <Flex direction="column" gap='20px' pb='50px'>
                <Text fontWeight={"600"}>Informasi Umum</Text>
                <Content img="/selada.jpeg" subtitle="Hidroponik merupakan budidaya menanam dengan memanfaatkan air tanpa menggunakan tanah, cara ini menekankan pada pemenuhan kebutuhan nutrisi tanaman." />

                <Text mt='40px' fontWeight={"600"}>Penyakit Hidroponik Selada</Text>
                <Content img="/1.jpg" title="Mata Kodok" subtitle="Penyakit mata kodok pada tanaman selada ini disebabkan oleh jamur cercospora sp. Banyak sumber yang menyebutkan bahwa penyakit mata kodok ini biasanya berkembang akibat kondisi kelembapan disekitar tanaman selada yang terlalu tinggi, khususnya setelah hujan turun. Jadi, dalam hal ini selada terlalu kebanyakan kadar air. Dan apabila terdapat air yang menempel pada daun selada lebih dari 7-8 jam, maka daun selada ini akan ditumbuhi oleh jamur cercospora sp, sehingga daun selada akan terkena penyakit mata kodok." />

                <Content img="/2.jpg" title="Jangel / Tangek" subtitle="Jangel (Bradybaena similaris ferussac) ini memiliki bentuk seperti siput yang berukuran sekitar 2 cm ini bersembunyi pada pangkal daun bagian dalam dan menyerang daun pada segala umur." />

                <Content img="/3.jpg" title="Kutu Daun" subtitle="Kutu Daun yang menyerang akan menyebabkan daun menjadi mengerut. Lalu mengering akibat kurang cairan. Bahaya jika tanaman selada yang masih berusia muda yang terserang maka akan mengganggu pertumbuhannya, tumbuh kerdil atau tidak sempurn. Dan untuk mengendalikan pada hama ini ialah dengan menggunakan insektisida sesuai dengan dosis yang dianjurkan." />

                <Content img="/4.jpg" title="Thrips" subtitle="Thrips dapat menyebabkan daun pada selada menjadi kuning lalu kering dan ujungnya tanaman selada pun akan mati. Dan jika tanaman selada sudah terserang dengan jenis hama ini maka dapat dikendalikan dengan menggunakan insektisida yang sesuai dengan dosis yang dianjurkan." />

                <Content img="/5.jpg" title="Busuk Lunak" subtitle="Penyakit Busuk Lunak (Soft Rot) ini disebabkan oleh Bakteri Erwinia carotovora. Penyerangan bakteri ini di mulai dari tepi daun lalu warna daun akan berubah warna menjadi cokelat dan akhirnya layu. Tidak hanya menyerang tanaman yang masih ditanam, bakteri ini juga dapat menyerang tanaman selada yang sudah dipanen dan siap untuk di kirim ke konsumen." />

                <Content img="/6.jpg" title="Busuk Batang" subtitle="Tanaman selada yang terserang penyakit buduk lunak akan memiliki batang yang lunak dan mengandung lendir. Penyakit ini disebabkan oleh Cendawan Rhizoctonia Solani. Apabila kondisi lahan lembab, cendawan ini juga dapat menyerang tanaman penyemaian yang akan berujung tanaman selada akan terserang busuk akar juga. Untuk mencegah penyakit ini dapat dilakukan dengan menjaga kebersihan lahan dan menjaga kelembapan lahan, jangan terlalu lembab. Jika tanaman banyak yang terserang dan sudah parah, lakukan pengendalian dengan menggunakan fungisida sesuai dengan dosis yang dianjurkan." />

                <Content img="/7.jpg" title="Busuk Pangkal Daun" subtitle="Penyakit busuk pangakal daun ini disebabkan oleh Felicularia filamentosa yang menyerang bagian pangkal daun saat musim panen telah tiba. Untuk mengendalikan penyakit ini maka dapat dilakukan dengan cara melakukan penyemprotan pestisida alami ataupun pestisida kimia. Jika menggunakan pestisida kimia maka anda harus memperhatikan secara khusus lingkungan sekitar kebun anda. Selain dengan hal tersebut, lakukan pengendalian agar tanaman selada tidak terserang yaitu dengan menjaga kebersihan lahan, irigasi yang baik, melakukan rotasi tanaman demi memutus perkembangbiakan Felicularia filamentosa tersebut." />
            </Flex>
        </Container>
    )
}

export default Informasi