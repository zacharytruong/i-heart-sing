import { Stack, Box, Text } from '@chakra-ui/react';

const Songs = () => (
  <Stack
    paddingBottom="20px"
    direction="column"
    justify="flex-start"
    align="flex-start"
    spacing="10px"
    overflow="hidden"
  >
    <Stack
      paddingX="20px"
      direction="column"
      justify="flex-start"
      align="center"
      spacing="30px"
    >
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="32px"
      >
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          width="250px"
          maxWidth="100%"
        >
          <Stack borderRadius="30px" height="170px" alignSelf="stretch">
            <Box
              borderRadius="15px"
              width="250px"
              height="170px"
              maxWidth="100%"
              boxShadow="0px 6px 15px 0px rgba(255, 255, 255, 0.15)"
            />
            <Box
              width="250px"
              height="170px"
              maxWidth="100%"
              background="rgba(35, 31, 32, 0.5)"
            />
            <Stack
              padding="5px"
              width="34px"
              height="34px"
              direction="column"
              justify="center"
              align="center"
              spacing="0px"
              borderColor="#FFFFFF"
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
            >
              <Box>
                <Stack width="24px" height="24px" />
                <Stack width="24px" height="24px" />
              </Box>
            </Stack>
            <Box>
              <span className="unsupported" />
              <span className="unsupported" />
            </Box>
          </Stack>
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            alignSelf="stretch"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="16px"
              letterSpacing="0.03em"
              color="#FFFFFF"
              alignSelf="stretch"
            >
              Có như không có (CNKC)
            </Text>
            <Stack
              direction="row"
              justify="space-between"
              align="flex-start"
              spacing="10px"
              alignSelf="stretch"
            >
              <Text
                fontFamily="Rounded Mplus 1c"
                fontWeight="regular"
                fontSize="14px"
                letterSpacing="0.03em"
                color="#FFFFFF"
              >
                Hiền Hồ
              </Text>
              <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="1px"
              >
                <Text
                  fontFamily="Rounded Mplus 1c"
                  fontWeight="regular"
                  fontSize="14px"
                  letterSpacing="0.03em"
                  color="Dark.Info/Warning"
                  width="9px"
                  alignSelf="stretch"
                >
                  4
                </Text>
                <Stack width="24px" height="24px" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          width="250px"
          maxWidth="100%"
        >
          <Stack borderRadius="30px" height="170px" alignSelf="stretch">
            <Box
              borderRadius="15px"
              width="250px"
              height="170px"
              maxWidth="100%"
              boxShadow="0px 6px 15px 0px rgba(255, 255, 255, 0.15)"
            />
            <Stack
              padding="5px"
              width="34px"
              height="34px"
              direction="column"
              justify="center"
              align="center"
              spacing="0px"
              borderColor="#FFFFFF"
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
            >
              <Box>
                <Stack width="24px" height="24px" />
                <Stack width="24px" height="24px" />
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            alignSelf="stretch"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="16px"
              letterSpacing="0.03em"
              color="#FFFFFF"
              alignSelf="stretch"
            >
              Gặp nhưng không ở lại (GNKOL)
            </Text>
            <Stack
              direction="row"
              justify="space-between"
              align="flex-start"
              spacing="10px"
              alignSelf="stretch"
            >
              <Text
                fontFamily="Rounded Mplus 1c"
                fontWeight="regular"
                fontSize="14px"
                letterSpacing="0.03em"
                color="#FFFFFF"
              >
                Hiền Hồ
              </Text>
              <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="1px"
              >
                <Text
                  fontFamily="Rounded Mplus 1c"
                  fontWeight="regular"
                  fontSize="14px"
                  letterSpacing="0.03em"
                  color="Dark.Info/Warning"
                  width="9px"
                  alignSelf="stretch"
                >
                  4
                </Text>
                <Stack width="24px" height="24px" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          width="250px"
          maxWidth="100%"
        >
          <Stack
            borderRadius="30px"
            height="170px"
            alignSelf="stretch"
            boxShadow="0px 6px 15px 0px rgba(255, 255, 255, 0.15)"
          >
            <Box
              borderRadius="30px"
              width="250px"
              height="170px"
              maxWidth="100%"
            />
            <Box
              borderRadius="15px"
              width="250px"
              height="170px"
              maxWidth="100%"
              background="rgba(32, 32, 32, 0.8)"
              backdropFilter="blur(8px)"
            />
            <Stack
              direction="column"
              justify="flex-start"
              align="flex-start"
              spacing="16px"
              width="160px"
            >
              <Stack
                paddingX="24px"
                paddingY="10px"
                borderRadius="15px"
                direction="column"
                justify="center"
                align="center"
                spacing="10px"
                overflow="hidden"
                height="50px"
                alignSelf="stretch"
                background="Dark.Gradient/Wiretap"
                boxShadow="0px 4px 5px 0px rgba(0, 0, 0, 0.25), 0px 4px 10px 0px rgba(0, 0, 0, 0.1)"
              >
                <Text
                  fontFamily="Rounded Mplus 1c"
                  fontWeight="extrabold"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color="M3.sys/light/on-primary"
                  textAlign="center"
                >
                  Ưu tiên
                </Text>
              </Stack>
              <Stack
                paddingX="24px"
                paddingY="10px"
                borderRadius="15px"
                direction="column"
                justify="center"
                align="center"
                spacing="10px"
                overflow="hidden"
                height="50px"
                alignSelf="stretch"
                background="Dark.Gradient/Flare"
                boxShadow="0px 4px 5px 0px rgba(0, 0, 0, 0.25), 0px 4px 10px 0px rgba(0, 0, 0, 0.1)"
              >
                <Text
                  fontFamily="Rounded Mplus 1c"
                  fontWeight="extrabold"
                  fontSize="16px"
                  letterSpacing="0.03em"
                  color="M3.sys/light/on-primary"
                  textAlign="center"
                >
                  Hát luôn
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            alignSelf="stretch"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="16px"
              letterSpacing="0.03em"
              color="#FFFFFF"
              alignSelf="stretch"
            >
              Ai chung tình được mãi (ACTDM)
            </Text>
            <Stack
              direction="row"
              justify="space-between"
              align="flex-start"
              spacing="10px"
              alignSelf="stretch"
            >
              <Text
                fontFamily="Rounded Mplus 1c"
                fontWeight="regular"
                fontSize="14px"
                letterSpacing="0.03em"
                color="#FFFFFF"
              >
                Đinh Tùng Huy
              </Text>
              <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="1px"
              >
                <Text
                  fontFamily="Rounded Mplus 1c"
                  fontWeight="regular"
                  fontSize="14px"
                  letterSpacing="0.03em"
                  color="Dark.Info/Warning"
                  width="9px"
                  alignSelf="stretch"
                >
                  4
                </Text>
                <Stack width="24px" height="24px" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="32px"
      >
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          width="250px"
          maxWidth="100%"
        >
          <Stack borderRadius="30px" height="170px" alignSelf="stretch">
            <Box
              borderRadius="15px"
              width="250px"
              height="170px"
              maxWidth="100%"
              boxShadow="0px 6px 15px 0px rgba(255, 255, 255, 0.15)"
            />
            <Stack
              padding="5px"
              width="34px"
              height="34px"
              direction="column"
              justify="center"
              align="center"
              spacing="0px"
              borderColor="#FFFFFF"
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
            >
              <Box>
                <Stack width="24px" height="24px" />
                <Stack width="24px" height="24px" />
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            alignSelf="stretch"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="16px"
              letterSpacing="0.03em"
              color="#FFFFFF"
              alignSelf="stretch"
            >
              Lối nhỏ (LN)
            </Text>
            <Stack
              direction="row"
              justify="space-between"
              align="flex-start"
              spacing="10px"
              alignSelf="stretch"
            >
              <Text
                fontFamily="Rounded Mplus 1c"
                fontWeight="regular"
                fontSize="14px"
                letterSpacing="0.03em"
                color="#FFFFFF"
              >
                Đen Vâu
              </Text>
              <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="1px"
              >
                <Text
                  fontFamily="Rounded Mplus 1c"
                  fontWeight="regular"
                  fontSize="14px"
                  letterSpacing="0.03em"
                  color="Dark.Info/Warning"
                  width="9px"
                  alignSelf="stretch"
                >
                  4
                </Text>
                <Stack width="24px" height="24px" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          width="250px"
          maxWidth="100%"
        >
          <Stack borderRadius="30px" height="170px" alignSelf="stretch">
            <Box
              borderRadius="15px"
              width="250px"
              height="170px"
              maxWidth="100%"
              boxShadow="0px 6px 15px 0px rgba(255, 255, 255, 0.15)"
            />
            <Stack
              padding="5px"
              width="34px"
              height="34px"
              direction="column"
              justify="center"
              align="center"
              spacing="0px"
              borderColor="#FFFFFF"
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
            >
              <Box>
                <Stack width="24px" height="24px" />
                <Stack width="24px" height="24px" />
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            alignSelf="stretch"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="16px"
              letterSpacing="0.03em"
              color="#FFFFFF"
              alignSelf="stretch"
            >
              Bước qua mùa cô đơn (BQMCD)
            </Text>
            <Stack
              direction="row"
              justify="space-between"
              align="flex-start"
              spacing="10px"
              alignSelf="stretch"
            >
              <Text
                fontFamily="Rounded Mplus 1c"
                fontWeight="regular"
                fontSize="14px"
                letterSpacing="0.03em"
                color="#FFFFFF"
              >
                Vũ
              </Text>
              <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="1px"
              >
                <Text
                  fontFamily="Rounded Mplus 1c"
                  fontWeight="regular"
                  fontSize="14px"
                  letterSpacing="0.03em"
                  color="Dark.Info/Warning"
                  width="9px"
                  alignSelf="stretch"
                >
                  4
                </Text>
                <Stack width="24px" height="24px" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          width="250px"
          maxWidth="100%"
        >
          <Stack borderRadius="30px" height="170px" alignSelf="stretch">
            <Box
              borderRadius="15px"
              width="250px"
              height="170px"
              maxWidth="100%"
              boxShadow="0px 6px 15px 0px rgba(255, 255, 255, 0.15)"
            />
            <Stack
              padding="5px"
              width="34px"
              height="34px"
              direction="column"
              justify="center"
              align="center"
              spacing="0px"
              borderColor="#FFFFFF"
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
            >
              <Box>
                <Stack width="24px" height="24px" />
                <Stack width="24px" height="24px" />
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            alignSelf="stretch"
          >
            <Text
              fontFamily="Rounded Mplus 1c"
              fontWeight="extrabold"
              fontSize="16px"
              letterSpacing="0.03em"
              color="#FFFFFF"
              alignSelf="stretch"
            >
              Bông hoa đẹp nhất (BHDN)
            </Text>
            <Stack
              direction="row"
              justify="space-between"
              align="flex-start"
              spacing="10px"
              alignSelf="stretch"
            >
              <Text
                fontFamily="Rounded Mplus 1c"
                fontWeight="regular"
                fontSize="14px"
                letterSpacing="0.03em"
                color="#FFFFFF"
              >
                Quân AP
              </Text>
              <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="1px"
              >
                <Text
                  fontFamily="Rounded Mplus 1c"
                  fontWeight="regular"
                  fontSize="14px"
                  letterSpacing="0.03em"
                  color="Dark.Info/Warning"
                  width="9px"
                  alignSelf="stretch"
                >
                  4
                </Text>
                <Stack width="24px" height="24px" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

export default Songs;
