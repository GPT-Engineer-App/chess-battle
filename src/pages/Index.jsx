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
  r: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rdt45.svg",
  n: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_ndt45.svg",
  b: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_bdt45.svg",
  q: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qdt45.svg",
  k: "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_kdt45.svg",
  p: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  R: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_rlt45.svg",
  N: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_nlt45.svg",
  B: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt45.svg",
  Q: "https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt45.svg",
  K: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt45.svg",
  P: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
};

const Index = () => {
  const [board, setBoard] = useState(initialBoard);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Chess Game</Heading>
        <Box>
          <SimpleGrid columns={8} spacing={0} border="1px solid black">
            {board.map((row, rowIndex) =>
              row.map((piece, colIndex) => (
                <Box
                  key={`${rowIndex}-${colIndex}`}
                  width="50px"
                  height="50px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor={(rowIndex + colIndex) % 2 === 0 ? "white" : "gray.500"}
                >
                  {piece && <Image src={pieceImages[piece]} alt={piece} boxSize="40px" />}
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