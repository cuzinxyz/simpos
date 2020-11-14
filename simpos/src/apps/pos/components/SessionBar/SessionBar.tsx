import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import React from 'react';

import { IconBell } from '../../../../components/icons/output/IconBell';
import { IconWifi } from '../../../../components/icons/output/IconWifi';

const IconWrapper = styled(Flex)`
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
`;

export const SessionBar: React.FunctionComponent = () => (
  <Flex p={2}>
    <Box size="40px">
      <Image borderRadius="md" src="/logo.svg" />
    </Box>
    <Stack direction="row" spacing={2} alignItems="center" ml="auto">
      <IconWrapper>
        <IconWifi size="24" />
      </IconWrapper>
      <IconWrapper>
        <IconBell size="24" />
      </IconWrapper>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box>
          <Text fontSize="sm">Thu ngan</Text>
          <Heading size="sm">Hieu Tran</Heading>
        </Box>
        <Avatar size="sm" name="Hieu Tran" src="https://bit.ly/dan-abramov" />
      </Stack>
    </Stack>
  </Flex>
);
