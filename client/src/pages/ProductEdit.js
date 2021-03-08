// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import ProductActions from "../redux/actions/ProductActions";

// END IMPORT ACTIONS

/** APIs

* actionsProduct.create
*	@description CRUD ACTION create
*
* actionsProduct.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsProduct.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.list
*	@description CRUD ACTION list
*

**/

class ProductEdit extends Component {
  // Init product
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsProduct.loadProduct(this.props.match.params.id);
    }
    
    this.props.actionsUser.loadUserList();
  }

  // Insert props product in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      product: props.product
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.product._id) {
      this.props.actionsProduct.saveProduct(this.state.product).then(data => {
        this.props.history.push("/products/");
      });
    } else {
      this.props.actionsProduct.createProduct(this.state.product).then(data => {
        this.props.history.push("/products/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Product Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="BasePrice"
            label="BasePrice"
            value={this.state.product.BasePrice || ""}
            onChange={Utils.handleChange.bind(this, "product")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.product.BasePrice && this.state.product.BasePrice === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.product.Name || ""}
            onChange={Utils.handleChange.bind(this, "product")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.product.Name && this.state.product.Name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="SKU"
            label="SKU"
            value={this.state.product.SKU || ""}
            onChange={Utils.handleChange.bind(this, "product")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.product.SKU && this.state.product.SKU === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m user with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="user">
              User
            </InputLabel>
            <Select
              value={this.state.product.user || ""}
              onChange={Utils.handleChangeSelect.bind(this, "product")}
              inputProps={{
                id: "user",
                name: "user"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUser && this.props.listUser.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/products/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsProduct: bindActionCreators(ProductActions, dispatch),
  };
};

// Validate types
ProductEdit.propTypes = { 
  actionsProduct: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    product: state.ProductEditReducer.product,
    listUser: state.ProductEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductEdit);
