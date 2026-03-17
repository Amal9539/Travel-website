import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const UpdateTouristPlace = () => {
  const { id } = useParams();
  const [place, setPlace] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState(''); // keep as string
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://travel-website-5-62rm.onrender.com/gettourist/${id}`)
      .then((places) => {
        setPlace(places.data.place);
        setLocation(places.data.location);
        setCategory(places.data.category)
        setDescription(places.data.description); // ensure string
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    axios
      .put(`https://travel-website-5-62rm.onrender.com/updatetourist/${id}`, {
        place,
        location,
        category,
        description // convert here
      })
      .then(() => {
        navigate('/touristplaces');
      });
  };

  return (
    <Container className="mt-5">
      <Card className="border-0 shadow" style={{ backgroundColor: '#f8f9fa' }}>
        <Card.Header
          style={{
            backgroundColor: '#e9ecef',
            borderBottom: '1px solid #dee2e6',
          }}
        >
          <h5 className="mb-0 fw-semibold text-dark">
            Update Tourist Place
          </h5>
        </Card.Header>

        <Card.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Name</Form.Label>
              <Form.Control
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-secondary">Price</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-secondary">Price</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button
                type="submit"
                style={{
                  backgroundColor: '#343a40',
                  border: 'none',
                  padding: '6px 20px',
                }}
              >
                Update
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateTouristPlace;
