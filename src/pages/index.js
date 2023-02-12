import Informasi from "@/components/Informasi";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Home = () => {
  return(
    <>
      <Box bgColor={"#f5f5f5"} width='100%'>
        <Navbar />
        <Informasi />
      </Box>
    </>
  ) 
}

export default Home