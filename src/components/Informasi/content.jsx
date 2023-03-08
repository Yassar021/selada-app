import { Flex, Text, Progress } from "@chakra-ui/react"
import Image from "next/image"

const Content = ({ img, title, subtitle, confidents = [] }) => {
    const confidentsSort = confidents.sort((a,b) => {
        if(a.confident < b.confident){
            return 1
        }else if (a.confident > b.confident) {
            return -1
        }else{
            return 0
        }
    })
    return (
        <Flex direction="column" gap='10px'>
            <Image width="250" height="250" src={img} alt="content" />
            <Text fontSize={"16px"}>{title}</Text>
            <Text fontSize={"14px"}>Confident:</Text>
            <div>
                {
                    confidentsSort.map(item => {
                        return (
                            <div>
                                <Text fontSize={"14px"}>{`${item.lable} - ${item.confident}%`}</Text>
                                <Progress value={item.confident} />
                            </div>
                        )
                    })
                }
            </div>
            <Text fontSize={"12px"}>{subtitle}</Text>
        </Flex>

    )
}

export default Content