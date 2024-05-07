import { Box, Flex, Heading, Text, VStack, Link, Spacer } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Box as="header" bg="brand.800" p={4}>
        <Flex align="center" maxW="container.xl" m="0 auto">
          <Heading as="h1" size="lg" color="white">John Doe</Heading>
          <Spacer />
          <Link href="#about" p={2} color="white">About</Link>
          <Link href="#projects" p={2} color="white">Projects</Link>
          <Link href="#contact" p={2} color="white">Contact</Link>
        </Flex>
      </Box>
      <VStack spacing={8} align="stretch" maxW="container.xl" m="0 auto" p={4}>
        <Box as="section" id="about" p={4}>
          <Heading as="h2" size="xl">About Me</Heading>
          <Text fontSize="lg" mt={3}>
            Passionate software developer with a knack for building elegant and efficient applications.
          </Text>
        </Box>
        <Box as="section" id="projects" p={4}>
          <Heading as="h2" size="xl">Projects</Heading>
          <Text fontSize="lg" mt={3}>
            Explore my projects ranging from web applications to data analysis.
          </Text>
        </Box>
        <Box as="section" id="contact" p={4}>
          <Heading as="h2" size="xl">Contact</Heading>
          <Flex align="center" mt={3}>
            <Link href="https://github.com" isExternal><FaGithub size="24px" /></Link>
            <Spacer />
            <Link href="https://linkedin.com" isExternal><FaLinkedin size="24px" /></Link>
            <Spacer />
            <Link href="mailto:john.doe@example.com"><FaEnvelope size="24px" /></Link>
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;