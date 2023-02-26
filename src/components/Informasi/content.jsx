import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image"

const Content = ({ img, title, subtitle, confident }) => {
    return (
        <Flex direction="column" gap='10px'>
            <Image width="250" height="250" src={img} alt="content" />
            <Text fontSize={"16px"}>{title}</Text>
            <Text fontSize={"14px"}>{`Confident: ${confident}`}</Text>
            <Text fontSize={"12px"}>{subtitle}</Text>
        </Flex>

    )
}

export default Content