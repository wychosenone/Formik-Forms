import React, { useEffect, useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    hover:"Mail"
  },
  {
    icon: faGithub,
    url: "https://github.com",
    hover:"Github"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    hover:"Linkedin"
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    hover:"FaMedium"
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    hover:"StackOverFlow"
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
const boxRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [previousScrollPosition, setPreviousScrollPosition] = useState(
    window.pageYOffset
  );
  
  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition < previousScrollPosition) {
        setScrollDirection("up");
        boxRef.current.style.transform = "translateY(0)";
      } else {
        setScrollDirection("down");
        boxRef.current.style.transform = "translateY(-200px)";
      }
      setPreviousScrollPosition(currentScrollPosition);
    } window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousScrollPosition]);


  return (
    <Box
      ref={boxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav> 
            {socials.map((social,i)=>{
              return (
              <a key={i} href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" style={{margin:"4px"}}/></a>)
            })
            }
          </nav>
          <nav>
            <HStack spacing={8}>
            <a href="#projects-section" onClick={() => handleClick('projects')}>Projects</a>
            <a href="#contactme-section" onClick={() => handleClick('contactme')}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;