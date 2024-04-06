"use client";
import { Flex, Image } from "@chakra-ui/react";
import u1 from "@Images/u1.jpg";
import u2 from "@Images/u2.jpg";
import u3 from "@Images/u3.jpg";
import body from "@Images/body1.jpg";
import { useState } from "react";

export default function Home() {
  const [userIcon, setUserIcon] = useState(0);
  const list = [
    { id: 0, src: u1.src },
    { id: 1, src: u2.src },
    { id: 2, src: u3.src },
  ];

  return (
    <Flex
      h={"100vh"}
      p={4}
      justifyContent={"s"}
      align={"center"}
      width={"auto"}
    >
      <Flex
        position={"relative"}
        direction={"column"}
        w={"80%"}
        alignItems={"center"}
      >
        <Image
          alt="123"
          position={"absolute"}
          mt={["-30px","-43px"]}
          mr={[" 10px"," 25px"]}
          width={[16,24]}
          src={list[userIcon].src}
          key={"amor"}
        />
        <Image w={"526px"} src={body.src as any} key={"amor"} />
      </Flex>
      <Flex
        h={"50%"}
        width={"100%"}
        m={""}
        w={"20%"}
        direction={"column"}
        justifyContent={"space-between"}
      >
        {list.map((icon) => {
          return (
            <Image
              onClick={() => setUserIcon(icon.id)}
              cursor="pointer"
              alt="user"
              width={"24"}
              borderRadius={"50%"}
              src={icon.src}
              key={"amor"}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
