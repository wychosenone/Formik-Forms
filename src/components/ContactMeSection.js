import React, {useEffect} from "react";
import { useFormik, yupToFormErrors } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
    
    
    
      if (response.type === 'success') {
        formik.resetForm();}
    }
  }, [response]);
 

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: ''
    },
 
    onSubmit: (values) => {
      
    submit('http://example.com/contactme', values)
  
    
  },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      type: Yup.string(),
      comment: Yup.string().min(25,"Must be at least 25 characters").required('Comment is required'),
    })
  })
  



  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                  }}> 
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}

                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" 
                 isDisabled={isLoading}>
                {isLoading? "Loading..." : "Submit"}
              </Button>
    
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;


