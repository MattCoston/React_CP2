import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Maps from "./map";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, description, hours, address) {
  return {
    name,
    description,
    hours,
    address,
  };
}
const center = {
  lat: 33.5,
  lng: -101.9,
};

function handleDelete() {
  rows.shift();
  console.log("reached delete");
  console.log(rows);
  rows.map((row) => <Row key={row.name} row={row} />);
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.description}</TableCell>
          <TableCell align="right">{row.hours}</TableCell>
          <TableCell align="right">{row.address}</TableCell>
          <TableCell align="right">
            {rows.button}
            <button onClick={() => handleDelete()}>DELETE</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={3}>
                <Maps center={center} />
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </>
  );
}

const rows = [
  createData(
    "Quattro Gatti Ristorante e Pizzeria",
    "Gourmet pizzas, classic entrees & a tasting menu highlight this posh Italian cafe near the Capitol.",
    "4:30PM - 9PM",
    "908 Congress Ave, Austin, TX 78701"
  ),
  createData(
    "Consuela",
    "Women's label/boutique selling colorful, Mexican-inspired leather goods, such as bags & flip-flops.",
    "10AM - 6PM",
    "912 Congress Ave, Austin, TX 78701"
  ),
];

function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;
