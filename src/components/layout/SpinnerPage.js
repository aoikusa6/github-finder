import React from "react";
import { Box, Stack, Spinner, Text } from "@chakra-ui/react";
const SpinnerPage = () => {
  return (
    <Box>
      <Stack direction="row" spacing={4}>
        <Spinner size="xl" />
        <Spinner size="xl" />
        <Spinner size="xl" />
        <Spinner size="xl" />
        <Spinner size="xl" />
      </Stack>
      <Text fontSize="xl">Loading, please wait...</Text>
    </Box>
  );
};

export default SpinnerPage;
