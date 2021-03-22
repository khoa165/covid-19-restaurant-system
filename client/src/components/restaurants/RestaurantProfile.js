import React from 'react';
import { Jumbotron, Container, Badge, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/Restaurants.scss';
import { ROUTE_EDIT_RESTAURANT } from '../../constants/routes';
import Charts from '../charts/Charts';
import Placeholder from '../../assets/images/res_placeholder.png';

const RestaurantProfile = ({
  restObj: {
    restaurant_name,
    avatar,
    address,
    dine_in,
    dine_outside,
    pickup,
    curbside_pickup,
    delivery,
    policy_notes,
    employee_capacity,
    customer_capacity,
    restaurant_email,
    restaurant_phone_number,
    _id,
  },
  user,
}) => {
  const booleanVals = [
    {
      val: dine_in,
      str: 'Dine in',
    },
    {
      val: dine_outside,
      str: 'Dine outside',
    },
    {
      val: pickup,
      str: 'Pickup',
    },
    {
      val: curbside_pickup,
      str: 'Curbside pickup',
    },
    {
      val: delivery,
      str: 'Delivery',
    },
  ];
  return (
    <div id='restaurant-profile'>
      <Jumbotron>
        <Container className='my-4'>
          <Row className='header-wrapper'>
            <Col xs='12' lg='3'>
              <div className='logo-wrapper'>
                <img
                  src={avatar ? avatar : Placeholder}
                  alt='Restaurant logo'
                />
              </div>
            </Col>
            <Col xs='12' lg='9'>
              <div className='basic-info'>
                <h1 className='header'>
                  {restaurant_name}
                  {user && user.is_admin && user.restaurant_id === _id && (
                    <Link to={ROUTE_EDIT_RESTAURANT}>
                      <i className='ml-5 fas fa-edit'></i>
                    </Link>
                  )}
                </h1>
                <p className='info-text'>{address}</p>
                <div className='badges'>
                  {booleanVals.map((v, k) =>
                    v.val ? (
                      <Badge color='light' key={k}>
                        {v.str} <i className='fas fa-check-square'></i>
                      </Badge>
                    ) : (
                      <Badge color='light' key={k}>
                        {v.str} <i className='fas fa-times-circle'></i>
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Row>
        <Col xs='12' lg='4'>
          <div className='left-panel'>
            <div className='contact-info'>
              <div className='msg-text'>
                <h1>Contact</h1>
                <p>Email: {restaurant_email}</p>
                <p>Tel: {restaurant_phone_number}</p>
              </div>
            </div>
            <div className='map-wrapper'></div>
          </div>
        </Col>
        <Col xs='12' lg='4'>
          <div className='middle-panel'>
            <div className='msg-text mb-4'>
              <h1>Data</h1>
              <p>Visualization of restaurant data over the past 7 days</p>
            </div>
            <Charts rid={_id} />
          </div>
        </Col>
        <Col xs='12' lg='4'>
          <div className='right-panel'>
            <div className='msg-text'>
              <h1>Policy</h1>
              <p>{policy_notes}</p>
            </div>
            <div className='msg-text mt-5'>
              <h1>Capacity</h1>
              <p>Employee capacity: {employee_capacity}</p>
              <p>Customer capacity: {customer_capacity}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RestaurantProfile;