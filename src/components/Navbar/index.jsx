import Link from "next/link"
import DrawerNav from "./DrawerNav"
import { Text, Container, Flex, Image, Box, HStack } from "@chakra-ui/react"
import Head from "next/head"

const Navbar = () => {
    return (
        <>
            <Head>
                <title>Lettuce Healthy</title>
            </Head>

            <Container bgColor='#fff' shadow="lg" maxW='lg' py='20px'>
                <Flex justifyContent={"space-between"} >
                    <HStack spacing='4px'>
                        <Link href="/Homepage" color='red'>
                            <Image src='/logo2.png' width={'50px'} height={'50px'} alt='lettuce healthy' />
                        </Link>
                        <Text mt='10px' fontSize={'22px'} fontWeight={"600"}>Lettuce Healthy</Text>
                    </HStack>
                    <DrawerNav />
                </Flex >
            </Container >
        </>
    )
}

export default Navbar