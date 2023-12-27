import { Link, Stack, Text } from '@chakra-ui/react';

const Navigation = () => (
  <Stack direction="row" justify="flex-start" align="flex-start" spacing="30px">
    <Link href="/">
      <Stack
        paddingX="2.5px"
        direction="column"
        justify="flex-start"
        align="center"
        spacing="3px"
      >
        <Stack
          padding="13px"
          borderRadius="50px"
          direction="row"
          justify="center"
          align="center"
          spacing="10px"
          borderStartWidth="2px"
          borderEndWidth="2px"
          borderTopWidth="2px"
          borderBottomWidth="2px"
          width="70px"
          height="70px"
          background="Dark.Gradient/Wiretap"
          boxShadow="M3/Elevation Light/3"
        >
          <Stack width="40px" height="40px">
            <Stack width="40px" height="40px" />
            <Stack width="40px" height="40px" filter="blur(7px)" />
          </Stack>
        </Stack>
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="14px"
          letterSpacing="0.03em"
          color="#FFFFFF"
        >
          Playlist
        </Text>
      </Stack>
    </Link>
    <Link href="/search">
      <Stack
        paddingX="2.5px"
        direction="column"
        justify="flex-start"
        align="center"
        spacing="3px"
      >
        <Stack
          padding="13px"
          borderRadius="50px"
          direction="row"
          justify="center"
          align="center"
          spacing="10px"
          width="70px"
          height="70px"
          boxShadow="M3/Elevation Light/3"
        >
          <Stack width="40px" height="40px" />
        </Stack>
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="14px"
          letterSpacing="0.03em"
          color="#FFFFFF"
        >
          Search
        </Text>
      </Stack>
    </Link>
    <Link href="/video">
      <Stack
        direction="column"
        justify="flex-start"
        align="center"
        spacing="3px"
      >
        <Stack
          padding="13px"
          borderRadius="50px"
          direction="row"
          justify="center"
          align="center"
          spacing="10px"
          width="70px"
          height="70px"
          boxShadow="M3/Elevation Light/3"
        >
          <Stack width="40px" height="40px" />
        </Stack>
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="14px"
          letterSpacing="0.03em"
          color="#FFFFFF"
        >
          Video
        </Text>
      </Stack>
    </Link>
    <Stack direction="column" justify="flex-start" align="center" spacing="3px">
      <Stack
        padding="13px"
        borderRadius="50px"
        direction="row"
        justify="center"
        align="center"
        spacing="10px"
        width="70px"
        height="70px"
        background="rgba(255, 255, 255, 0.1)"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 8px 3px rgba(0, 0, 0, 0.15), inset 0px 0px 10px 0px rgba(255, 255, 255, 0.1)"
      >
        <Stack width="40px" height="40px" />
      </Stack>
      <Text
        fontFamily="Rounded Mplus 1c"
        fontWeight="extrabold"
        fontSize="14px"
        letterSpacing="0.03em"
        color="#FFFFFF"
      >
        Dark
      </Text>
    </Stack>
  </Stack>
);

export default Navigation;
