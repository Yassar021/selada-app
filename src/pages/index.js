import Informasi from "@/components/Informasi";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Splash from "@/components/Splash";

const Home = () => {
  return(
    <>
        
      <Box bgImage={'/bg-splash.png'} bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'}  width='100vw'>
        <Splash />  
      </Box>
    </>
  ) 
}

export default Home