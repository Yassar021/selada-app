import { Flex, Text, Progress } from "@chakra-ui/react"
import Image from "next/image"

const Content = ({ img, title, firstTitle, firstSubtitle, confidents = [] }) => {
    const confidentsSort = confidents.sort((a, b) => {
        if (a.confident < b.confident) {
            return 1
        } else if (a.confident > b.confident) {
            return -1
        } else {
            return 0
        }
    })
    return (
        <Flex direction="column" gap='10px'>
            <Text fontWeight={'600'} fontSize={"16px"}>{title}</Text>
            <Image width="250" height="250" src={img} alt="content" />
            <Text fontWeight={'600'} fontSize={"16px"}>{firstTitle}</Text>
            <Text fontSize={"12px"}>{firstSubtitle}</Text>
            <Text fontSize={"14px"}>Confident:</Text>
            <div>
                {
                    confidentsSort.map(item => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div>
                                <Text fontSize={"14px"}>{`${item.lable} - ${item.confident}%`}</Text>
                                <Progress value={item.confident} />
                            </div>
                        )
                    })
                }
            </div>
        </Flex>

    )
}

export default Content