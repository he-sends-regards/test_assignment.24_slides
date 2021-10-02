import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import customers from '../../mocks/customers';
import { generateId } from '../../utils';
import CustomerRow from './components/CustomerTableRow';
import CustomerTableHead from './components/CustomerTableHead';

const headers = [
  'ID',
  'Customer',
  'Slides',
  'Order Status',
  'Revisions',
  'Price',
  'PM',
  'Design Team',
  'Deadline',
];

const CustomerTable = () => (
  <TableContainer component={Paper}>
    <Table size="small" aria-label="a dense table">
      <CustomerTableHead headers={headers} />

      <TableBody>
        {customers.map((row) => (
          <CustomerRow key={generateId()} row={row} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CustomerTable;
