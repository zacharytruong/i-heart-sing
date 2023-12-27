import { Stack, Text, Box, Icon } from '@chakra-ui/react';

const SearchForm = () => (
  <Stack direction="column" justify="flex-start" align="center" spacing="10px">
    <Stack
      borderRadius="15px"
      direction="row"
      justify="flex-start"
      align="center"
      spacing="-2px"
      width="480px"
      height="53px"
      maxWidth="100%"
    >
      <Stack
        paddingX="13px"
        paddingY="7px"
        borderRadius="15px"
        direction="row"
        justify="flex-start"
        align="center"
        spacing="0px"
        overflow="hidden"
        flex="1"
        alignSelf="stretch"
        background="Dark.Accent - White"
      >
        <Stack
          direction="row"
          justify="space-between"
          align="center"
          spacing="0px"
          overflow="hidden"
          flex="1"
        >
          <Text
            fontFamily="Rounded Mplus 1c"
            fontWeight="extrabold"
            fontSize="16px"
            letterSpacing="0.03em"
            color="Dark.Gradient/Wiretap"
          >
            Tìm kiếm... (bài hát, ca sĩ)
          </Text>
          <Stack width="24px" height="24px" />
        </Stack>
        <Stack
          direction="column"
          justify="flex-start"
          align="center"
          spacing="0px"
          overflow="hidden"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="16px"
            overflow="hidden"
          >
            <Box width="0px" height="0px" />
            <Box width="0px" height="0px" />
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="0px"
            alignSelf="stretch"
          >
            <Stack
              direction="row"
              justify="flex-start"
              align="center"
              spacing="16px"
              overflow="hidden"
            >
              <Box width="0px" height="0px" />
              <Box width="0px" height="0px" />
            </Stack>
            <Stack flex="1" alignSelf="stretch">
              <span className="unsupported" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Stack
      direction="row"
      justify="flex-start"
      align="flex-start"
      spacing="10px"
      alignSelf="stretch"
    >
      <Stack
        paddingX="10px"
        paddingY="6px"
        borderRadius="8px"
        direction="row"
        justify="center"
        align="center"
        spacing="0px"
        borderColor="#FFFFFF"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        flex="1"
        background="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(4px)"
      >
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="12px"
          letterSpacing="0.03em"
          color="#FFFFFF"
          textAlign="center"
        >
          GNKOL
        </Text>
      </Stack>
      <Stack
        paddingX="10px"
        paddingY="6px"
        borderRadius="8px"
        direction="row"
        justify="center"
        align="center"
        spacing="0px"
        borderColor="#FFFFFF"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        flex="1"
        background="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(4px)"
      >
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="12px"
          letterSpacing="0.03em"
          color="#FFFFFF"
          textAlign="center"
        >
          XIN LOI
        </Text>
      </Stack>
      <Stack
        paddingX="10px"
        paddingY="6px"
        borderRadius="8px"
        direction="row"
        justify="center"
        align="center"
        spacing="0px"
        borderColor="#FFFFFF"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        background="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(4px)"
      >
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="12px"
          letterSpacing="0.03em"
          color="#FFFFFF"
          textAlign="center"
        >
          LN
        </Text>
      </Stack>
      <Stack
        paddingX="10px"
        paddingY="6px"
        borderRadius="8px"
        direction="row"
        justify="center"
        align="center"
        spacing="0px"
        borderColor="#FFFFFF"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        flex="1"
        background="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(4px)"
      >
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="12px"
          letterSpacing="0.03em"
          color="#FFFFFF"
          textAlign="center"
        >
          LOI NHO
        </Text>
      </Stack>
      <Stack
        paddingX="10px"
        paddingY="6px"
        borderRadius="8px"
        direction="row"
        justify="center"
        align="center"
        spacing="0px"
        borderColor="#FFFFFF"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        background="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(4px)"
      >
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="12px"
          letterSpacing="0.03em"
          color="#FFFFFF"
          textAlign="center"
        >
          BQN
        </Text>
      </Stack>
      <Stack
        paddingX="10px"
        paddingY="6px"
        borderRadius="8px"
        direction="row"
        justify="center"
        align="center"
        spacing="0px"
        borderColor="#FFFFFF"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        flex="1"
        background="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(4px)"
      >
        <Text
          fontFamily="Rounded Mplus 1c"
          fontWeight="extrabold"
          fontSize="12px"
          letterSpacing="0.03em"
          color="#FFFFFF"
          textAlign="center"
        >
          CNKC
        </Text>
      </Stack>
    </Stack>
    <Stack
      direction="column"
      justify="space-between"
      align="center"
      spacing="0px"
      height="244px"
      backdropFilter="blur(70px)"
    >
      <Stack
        paddingX="5px"
        direction="column"
        justify="space-between"
        align="center"
        spacing="11px"
        height="233px"
        alignSelf="stretch"
        backdropFilter="blur(70px)"
      >
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="6px"
        >
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              Q
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              W
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              E
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              R
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              T
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              Y
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              U
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              I
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              O
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              P
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="6px"
        >
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              A
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              S
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              D
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              F
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              G
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              H
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              J
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              K
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              L
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justify="center"
          align="center"
          spacing="6px"
          alignSelf="stretch"
        >
          <Stack
            paddingX="5px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            background="Dark.Gradient/Wiretap"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              color="Dark.Accent - White"
              textAlign="center"
            >
              123
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              Z
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              X
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              C
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              V
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              B
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              N
            </Text>
          </Stack>
          <Stack
            paddingX="11px"
            paddingY="7px"
            borderRadius="15px"
            direction="column"
            justify="center"
            align="center"
            spacing="10px"
            width="41px"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #e94057 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              M
            </Text>
          </Stack>
          <Stack
            paddingX="5px"
            paddingY="9px"
            borderRadius="14px"
            direction="row"
            justify="center"
            align="center"
            spacing="10px"
            flex="1"
            background="Dark.Gradient/Wiretap"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Icon />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="center"
          spacing="6px"
          alignSelf="stretch"
        >
          <Stack
            paddingX="4px"
            paddingY="13px"
            borderRadius="15px"
            direction="row"
            justify="center"
            align="center"
            spacing="10px"
            flex="1"
            background="Dark.Gradient/Wiretap"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Stack width="24px" height="24px" />
          </Stack>
          <Stack
            paddingX="15px"
            paddingY="7px"
            borderRadius="15px"
            direction="row"
            justify="space-between"
            align="center"
            spacing="10px"
            width="271px"
            maxWidth="100%"
            background="Light Primary"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Stack width="24px" height="24px" />
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              background="linear-gradient(0deg, #ed3f3e 0%, #f2be36 100%)"
              backgroundClip="text"
              textAlign="center"
            >
              Tiếng Việt
            </Text>
            <Stack width="24px" height="24px" />
          </Stack>
          <Stack
            paddingX="10px"
            paddingY="7px"
            borderRadius="15px"
            direction="row"
            justify="center"
            align="center"
            spacing="10px"
            background="Dark.Gradient/Wiretap"
            boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="24px"
              letterSpacing="0.03em"
              color="Dark.Accent - White"
              textAlign="center"
            >
              Tìm kiếm
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

export default SearchForm;
