import { TableCell, TableHead, TableRow } from '@material-ui/core';
import { FC } from 'react';
import { generateId } from '../../../utils';

interface IProps {
  headers: string[];
}

const CustomerTableHead: FC<IProps> = ({ headers }) => (
  <TableHead>
    <TableRow>
      {headers.map((header) => (
        <TableCell key={generateId()} align="center">
          {header}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default CustomerTableHead;
