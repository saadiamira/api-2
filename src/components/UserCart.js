import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCart = ({user}) => {
  return <div>
      <Card>
          <h1>{user.name[0]}</h1>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>name:{user.name}</Card.Title>
   <h4>name{user.username}</h4>
   <p>email:{user.email}</p>
   <p>setreet:{user.address.street}</p>
   <Link to={'/${user.id}' }><Button variant="primary">See DETAIL</Button></Link>
  </Card.Body>
</Card>
  </div>;
};

export default UserCart;
