import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
const { useRef } = require("react")

const DrawerNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Button my='auto' ref={btnRef} bgColor={'transparent'} onClick={onOpen}>
                <Stack>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7H19" stroke="#2C5E46" stroke-width="2" stroke-linecap="round" />
                        <path d="M5 12H19" stroke="#2C5E46" stroke-width="2" stroke-linecap="round" />
                        <path d="M5 17H19" stroke="#2C5E46" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </Stack>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Navigasi</DrawerHeader>

                    <DrawerBody>
                        <Stack direction="column" spacing="20px">
                            <Link href="/">
                                <Text fontSize="16px">Informasi Umum</Text>
                            </Link>
                            <Link href="/Diagnosa">
                                <Text fontSize="16px">Diagnosa Selada</Text>
                            </Link>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button bgColor='#2C5E46' color='white' variant='outline' mr={3} onClick={onClose}>
                            Tutup
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerNav