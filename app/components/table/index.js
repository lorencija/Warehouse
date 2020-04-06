import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '../button/index';
import Style from './style.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich gsdtftsdf', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };
  // const handleChange = (event) => {
  //   setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
  //   console.log("checkedItems: ", checkedItems);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className={Style.table_header}>
            <TableCell>D/E</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">EAN</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <Checkbox
                  className={Style.checkbox}
                  color=""
                  checked={checked}
                  onChange={handleChange}
                />
                {/* {
              checkboxes.map(item => (                 
                      <Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange} />
              ))
          } */}
              </TableCell>
              <TableCell align="center">
                <div className={Style.row}>
                  <Button text="VIEW" link="/products" color="green" />
                  <Button text="EDIT" link="/products" color="red" />
                  <Button text="DELETE" link="/products" color="blue" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
