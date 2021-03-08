// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS

// END IMPORT ACTIONS

/** APIs

* actionsUser.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsUser.list
*	@description CRUD ACTION list
*

**/


class UserList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsUser.loadUserList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsUser.deleteUser(this.state.idDelete).then(data => {
      this.props.actionsUser.loadUserList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "mail",
        type: "string",
        label: "Mail"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "password",
        type: "string",
        label: "Password"
      }, 
      {
        id: "roles",
        type: "string",
        label: "Roles"
      }, 
      {
        id: "surname",
        type: "string",
        label: "Surname"
      }, 
      {
        id: "username",
        type: "string",
        label: "Username"
      },
    ];
    const link = "/access/";

    return (
      <div>
        <h1>User List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Mail</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Roles</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/access/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.mail }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.password }</TableCell>
                <TableCell align="right">{ row.roles }</TableCell>
                <TableCell align="right">{ row.surname }</TableCell>
                <TableCell align="right">{ row.username }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/access/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
  };
};

// Validate types
UserList.propTypes = { 
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.UserListReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
