import { Stack, Box, Text } from '@chakra-ui/react';

const PlayingVideo = () => (
  <Stack
    borderRadius="15px"
    direction="column"
    justify="flex-start"
    align="flex-end"
    spacing="0px"
  >
    <Box
      borderRadius="50px"
      width="481px"
      height="61px"
      maxWidth="100%"
      filter="blur(30px)"
    />
    <Stack
      paddingTop="47px"
      paddingBottom="28px"
      borderRadius="15px"
      direction="column"
      justify="flex-start"
      align="flex-end"
      spacing="0px"
      background="#000000"
    >
      <Box width="481px" height="243px" maxWidth="100%" />
      <Stack
        direction="column"
        justify="flex-start"
        align="center"
        spacing="2px"
      >
        <Stack width="70px" height="70px">
          <Box
            borderRadius="3px"
            width="70px"
            height="70px"
            background="White"
          />
          <Box width="60px" height="62.07px" />
        </Stack>
        <Text
          fontFamily="Inter"
          fontWeight="bold"
          fontSize="12px"
          color="#FFFFFF"
          alignSelf="stretch"
          textAlign="center"
        >
          IUVK100
        </Text>
      </Stack>
    </Stack>
  </Stack>
);

export default PlayingVideo;
