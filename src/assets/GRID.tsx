import { getConfigFileParsingDiagnostics } from 'typescript';

export const GRID: number[] = [];
const generateGrid = () => {
  for (let i = 0; i < 16; i++) {
    GRID.push(0);
  }
};

generateGrid();
