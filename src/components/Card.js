import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      bg={"white"}
      color={"black"}
      borderRadius={"xl"}
      cursor={"pointer"}
      // borderWidth={"0"}
      // overflow={"hidden"}
      // maxW={'100%'}
    >
      <Heading />
      <VStack>
        <Image borderRadius={"xl"} w={"100%"} src={imageSrc} alt={title} />
        <Box p={"1rem"}>
          <Heading as="h5" size="md" mb={"1rem"}>
            {title}
          </Heading>
          {/* <Heading >React Space</Heading> */}
          <Text
            mb={"1rem"}
            color={"#65758B"}
            fontWeight={"480"}
            fontSize={"lg"}
          >
            {description}
          </Text>
          <HStack>
            <p>See more</p> <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
