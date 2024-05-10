import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaRocket, FaBars } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = "blue.500";
  const hoverBgColor = "blue.600";

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh">
        {/* Navigation */}
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={4} bgColor={bgColor} color={textColor}>
          <IconButton icon={<FaBars />} variant="outline" aria-label="Open Menu" />
          <Stack direction="row" spacing={4} align="center">
            <Link href="#" p={2}>
              Home
            </Link>
            <Link href="#" p={2}>
              Features
            </Link>
            <Link href="#" p={2}>
              Pricing
            </Link>
            <Link href="#" p={2}>
              About
            </Link>
          </Stack>
          <Button colorScheme="blue" variant="solid">
            Get Started
          </Button>
        </Flex>

        {/* Hero Section */}
        <Flex align="center" justify="center" flexGrow={1} bg={bgColor} p={10}>
          <VStack spacing={4}>
            <Heading as="h1" size="2xl" textAlign="center" color={textColor}>
              Elevate Your Workflow with Our SaaS
            </Heading>
            <Text fontSize="lg" color="gray.600">
              The ultimate solution for managing your projects efficiently.
            </Text>
            <Button rightIcon={<FaRocket />} colorScheme="blue" size="lg">
              Start Free Trial
            </Button>
          </VStack>
        </Flex>

        {/* Features Section */}
        <Box as="section" py={10} bg={bgColor}>
          <VStack spacing={8}>
            <Heading as="h2" size="xl" textAlign="center" color={textColor}>
              Why Choose Us?
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <FeatureCard title="Fast Integration" description="Get up and running in minutes with our easy setup." />
              <FeatureCard title="Secure Data" description="We prioritize your data security with top-notch measures." />
              <FeatureCard title="24/7 Support" description="Our team is here to help you at any time of the day." />
            </Stack>
          </VStack>
        </Box>

        {/* Footer */}
        <Flex as="footer" py={4} bg="gray.200" color="gray.700" justify="center">
          <Text>&copy; {new Date().getFullYear()} Your SaaS Company. All rights reserved.</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{description}</Text>
    </Box>
  );
};

export default Index;
