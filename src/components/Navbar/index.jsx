import Link from "next/link"
import DrawerNav from "./DrawerNav"
import { Text, Container, Flex } from "@chakra-ui/react"
import Head from "next/head"

const Navbar = () => {
    return (
        <>
            <Head>
                <title>Selada App</title>
            </Head>

            <Container bgColor='#fff' shadow="lg" maxW='lg' py='20px'>
                <Flex justifyContent={"space-between"} >
                    <Link href="/" color='red'>
                        <Text mt='10px' fontSize={'16px'} fontWeight={"600"}>Selada App</Text>
                    </Link>
                    <DrawerNav />
                </Flex >
            </Container >
        </>
    )
}

export default Navbar