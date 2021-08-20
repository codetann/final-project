import React from "react";
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useColorModeValue,
} from "@chakra-ui/react";

export function ResultsTable({ results }) {
  const bg = useColorModeValue("gray.100", "whiteAlpha.100");
  return (
    <Table bg={bg} shadow="md" borderRadius=".5rem" maxW="xl">
      <TableCaption>Results</TableCaption>
      <Thead>
        <Tr bg={bg}>
          <Th>Rank</Th>
          <Th>Restaurant</Th>
          <Th>Yes</Th>
          <Th>No</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {results.map((r, i) => (
          <Tr
            key={i}
            bg={i <= 2 ? "green.500" : "none"}
            // color={i <= 2 ? "white" : "none"}
          >
            <Td>{i + 1}</Td>
            <Td>{r.name}</Td>
            <Td>{r.yes}</Td>
            <Td>{r.no}</Td>
            <Td></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
