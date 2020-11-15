import React from 'react';
import { Flex, Box, Divider, Text } from '@chakra-ui/react';
import { IconTimes } from '../../../../components/icons';

export interface OrderTabProps {
  no: number;
}
export const OrderTab: React.FunctionComponent<OrderTabProps> = ({ no }) => (
  <Flex borderWidth="2px" borderColor="gray.100" borderRadius="full">
    <Box as="button" px="2" py="1" d="flex" alignItems="center">
      <Text mr="2">#{no}</Text>
      <Text fontWeight="medium">12:23</Text>
    </Box>
    <Divider
      orientation="vertical"
      borderWidth="2px"
      borderColor="gray.100"
      m="0"
    />
    <Box as="button" px="3" py="1">
      <IconTimes />
    </Box>
  </Flex>
);
