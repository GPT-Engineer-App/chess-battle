import { Container, VStack, Heading, Box, SimpleGrid, Image } from "@chakra-ui/react";
import { useState } from "react";

const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const pieceImages = {
  r: "black-rook.png",
  n: "black-knight.png",
  b: "black-bishop.png",
  q: "black-queen.png",
  k: "black-king.png",
  p: "black-pawn.png",
  R: "white-rook.png",
  N: "white-knight.png",
  B: "white-bishop.png",
  Q: "white-queen.png",
  K: "white-king.png",
  P: "white-pawn.png",
};

const Index = () => {
  const [board, setBoard] = useState(initialBoard);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Chess Game</Heading>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <SimpleGrid columns={8} spacing={0} width="320px" height="320px">
            {board.map((row, rowIndex) =>
              row.map((piece, colIndex) => (
                <Box
                  key={`${rowIndex}-${colIndex}`}
                  width="40px"
                  height="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg={(rowIndex + colIndex) % 2 === 0 ? "gray.200" : "gray.600"}
                >
                  {piece && <Image src={`/images/${pieceImages[piece]}`} alt={piece} boxSize="36px" />}
                </Box>
              ))
            )}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;