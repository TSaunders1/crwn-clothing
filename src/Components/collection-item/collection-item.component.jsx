/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/actions/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, dispatchAddItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
      <CustomButton onClick={() => dispatchAddItem(item)} inverted> Add to Cart </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAddItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
