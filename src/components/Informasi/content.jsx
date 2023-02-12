import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image"

const Content = ({ img, title, subtitle }) => {
    return (
        <Flex direction="column" gap='20px'>
            <Image width="250" height="250" src={img} alt="content" />
            <Text fontSize={"16px"}>{title}</Text>
            <Text fontSize={"12px"}>{subtitle}</Text>
        </Flex>

    )
}

export default Content