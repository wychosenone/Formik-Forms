import { color, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";

const Card = ({ title, description, imageSrc }) => {

  
  return (
  <HStack align="center" padding="0rem" display="inline" style={{color: "black", background:"white",borderRadius:"5%"}}>
  <VStack padding="0rem">
    <Image src={imageSrc} alt="Project" objectFit={"cover"} style={{borderRadius:"5%"}}/>
  </VStack>
  <VStack align="left" padding=".5rem">
    <Heading align="left" fontSize="1.5rem">{title}</Heading>
    <Text textAlign="justify-content">{description}</Text>
    <HStack display="inline-block" justifyContent="flex-end">
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
      <b>See More</b>
      </HStack>
    
    
  </VStack>
</HStack>);
};

export default Card;
