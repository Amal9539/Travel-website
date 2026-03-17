
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TouristPlaces = () => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 9;

  const fetchPlaces = async (page) => {
    try {
      const res = await axios.get(
        `https://travel-website-5-62rm.onrender.com/places?page=${page}&limit=${limit}`
      );
      setPlaces(res.data.data);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPlaces(page);
  }, [page]);

  const click = (item) => {
    navigate(`/details/${item._id}`);
  };

  // ✅ Get unique categories from current page
  const categories = [...new Set(places.map((p) => p.category))];

  // ✅ Filter method
  const filteredPlaces = selectedCategory
    ? places.filter(
        (p) =>
          p.category?.trim().toLowerCase() ===
          selectedCategory.trim().toLowerCase()
      )
    : places;

  return (
    <div style={{ minHeight: "100vh", padding: "40px 0", background: "#f8f9fa" }}>
      <Container>

        {/* Title + Right Dropdown */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Tourist Places</h2>

          <Dropdown>
            <Dropdown.Toggle variant="success">
              {selectedCategory || "Select Category"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => setSelectedCategory("")}
              >
                All
              </Dropdown.Item>

              {categories.map((cat, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {filteredPlaces.map((i) => (
            <Col key={i._id} xs={12} sm={6} md={4}>
              <Card
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
                onClick={() => click(i)}
              >
                {i.image ? (
                  <Card.Img
                    variant="top"
                    src={`https://travel-website-5-62rm.onrender.com${i.image[0]}`}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ height: "180px", background: "#e9ecef" }} />
                )}

                <Card.Body>
                  <Card.Title>{i.place}</Card.Title>
                  <Card.Text>
                    <strong>District:</strong> {i.district}
                  </Card.Text>
                  <Card.Text>
                    <strong>Category:</strong> {i.category}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <div className="text-center mt-4">
          <Button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="me-2"
          >
            Prev
          </Button>

          <span>
            Page {page} of {totalPages}
          </span>

          <Button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="ms-2"
          >
            Next
          </Button>
        </div>

      </Container>
    </div>
  );
};

export default TouristPlaces;