import Informasi from "@/components/Informasi"
import Navbar from "@/components/Navbar"
import { Box } from "@chakra-ui/react"

const Homepage = () => {
    return (
        <>
            <Box>
                <Navbar />
                <Informasi />
            </Box>
        </>
    )
}

export default Homepage