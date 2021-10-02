import { TableCell, TableRow } from '@material-ui/core';
import { FC } from 'react';
import customers from '../../../mocks/customers';
import { countDurationToDate } from '../../../utils';

interface IProps {
  row: typeof customers[0];
}

const getRowHighlightColorClassnameByCustomer = (customer: {
  subscribed: boolean;
  user: { hasCredits: boolean };
}) => {
  if (customer.subscribed) return 'highlighted-green';
  if (customer.user.hasCredits) return 'highlighted-yellow';
  return '';
};

const CustomerRow: FC<IProps> = ({ row }) => {
  const computedDeadline = countDurationToDate(new Date(row.deadline));
  const isDeadlineOverdued = String(computedDeadline.format('D[d] h[h] m[m]')).startsWith('-');
  const formattedDeadline = isDeadlineOverdued
    ? computedDeadline.format('D[d] h[h] m[m]').replace('-', '')
    : computedDeadline.format('D[d] h[h] m[m]');

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      className={getRowHighlightColorClassnameByCustomer(row)}
    >
      <TableCell align="center">{row.id}</TableCell>
      <TableCell component="th" scope="row">
        <span className={row.user.suspended ? 'red-text' : ''}>{row.user.name}</span>
      </TableCell>
      <TableCell align="center">{row.slides}</TableCell>
      <TableCell align="center">{row.status}</TableCell>
      <TableCell align="center">{row.revisions}</TableCell>
      <TableCell align="center">{row.price}</TableCell>
      <TableCell align="center">{row.manager}</TableCell>
      <TableCell align="center">{row.team}</TableCell>
      <TableCell align="center">
        <span className={isDeadlineOverdued ? 'red-text' : ''}>{formattedDeadline}</span>
      </TableCell>
    </TableRow>
  );
};

export default CustomerRow;
