import Informasi from "@/components/Informasi";
import { Box, Container, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Splash from "@/components/Splash";

const Home = () => {
  return(
    <>
        
      <Container bgImage={'/bg-splash.png'} bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'}  maxW={'lg'}>
        <Splash />  
      </Container>
    </>
  ) 
}

export default Home