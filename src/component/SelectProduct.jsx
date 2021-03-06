import React from 'react';
import { connect } from 'react-redux';
import orderAction from '../action/orderAction';

@connect()
export default class SelectProduct extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.array,
  };

  componentDidMount() {
    if (this.props.products[0]) this.setProduct(this.props.products[0]);
  }

  setProduct(product) {
    this.props.dispatch(orderAction({ product }));
  }

  render() {
    return (
      <nav className="car-options">
        <ul className="cars">
          {
            this.props.products && this.props.products.length ?
              this.props.products.map((product) => {
                const defaultChecked = this.props.products[0].product_id === product.product_id;

                return (
                  <li key={product.product_id}>
                    <input type="radio"
                      id={product.display_name}
                      defaultChecked={defaultChecked}
                      name="product"
                    />

                  <label
                    htmlFor={product.display_name}
                    onClick={() => :: this.setProduct(product)}
                  >
                      {product.display_name}
                    </label>
                  </li>
                );
              })
            : 'No cars available'
          }
        </ul>
      </nav>
    );
  }
}
