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
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePieceClick = (piece, rowIndex, colIndex) => {
    if (piece) {
      setSelectedPiece(piece);
      setSelectedPosition([rowIndex, colIndex]);
    }
  };

  const handleSquareClick = (rowIndex, colIndex) => {
    if (selectedPiece && selectedPosition) {
      const newBoard = board.map((row, rIdx) =>
        row.map((col, cIdx) => {
          if (rIdx === selectedPosition[0] && cIdx === selectedPosition[1]) {
            return "";
          }
          if (rIdx === rowIndex && cIdx === colIndex) {
            return selectedPiece;
          }
          return col;
        })
      );
      setBoard(newBoard);
      setSelectedPiece(null);
      setSelectedPosition(null);
    }
  };

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
                  onClick={() => (piece ? handlePieceClick(piece, rowIndex, colIndex) : handleSquareClick(rowIndex, colIndex))}
                  border={selectedPosition && selectedPosition[0] === rowIndex && selectedPosition[1] === colIndex ? "2px solid red" : "none"}
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