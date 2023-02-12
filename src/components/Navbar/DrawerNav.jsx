import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
const { useRef } = require("react")

const DrawerNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <Stack>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="reorder_24px">
                            <path id="icon/action/reorder_24px" fill-rule="evenodd" clip-rule="evenodd" d="M4 7C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7H4ZM4 11H20C20.55 11 21 10.55 21 10C21 9.45 20.55 9 20 9H4C3.45 9 3 9.45 3 10C3 10.55 3.45 11 4 11ZM20 15H4C3.45 15 3 14.55 3 14C3 13.45 3.45 13 4 13H20C20.55 13 21 13.45 21 14C21 14.55 20.55 15 20 15ZM20 19H4C3.45 19 3 18.55 3 18C3 17.45 3.45 17 4 17H20C20.55 17 21 17.45 21 18C21 18.55 20.55 19 20 19Z" fill="#F2F2F2" />
                        </g>
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
                            <Link href="/">
                                <Text fontSize="16px">Diagnosa Selada</Text>
                            </Link>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button bgColor='red' color='white' variant='outline' mr={3} onClick={onClose}>
                            Tutup
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerNav