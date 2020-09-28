import gql from 'graphql-tag';

interface PetType {
  id: number;
  code: string;
  description: string;
}

interface History {
  id: number;
  petType: PetType;
  amount: number;
}

export interface GridCell {
  id: number;
  x: number;
  y: number;
  lastPictureUrl: string;
  history: History[];
}

export interface GridCellData {
  gridCell: GridCell;
}

interface GridCellVars {
  x: number;
  y: number;
}

export const GET_GRID_CELL = gql`
  {
    query GridCell($x: Int!, $y: Int!) {
      gridCell(x: $x, y: $y) {
        lastPictureUrl
        history: {
          petType: {
            description
          }
          amount
        }
      }
    }
  }
`;
