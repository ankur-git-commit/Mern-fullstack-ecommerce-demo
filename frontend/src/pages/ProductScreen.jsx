import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import products from "../products"
import Rating from "../components/Rating"

function ProductScreen() {
    const { id: productID } = useParams()
    const product = products.find((p) => p._id === productID)

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews}`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {`Price: $${product.price}`}
                        </ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup
                            variant="flush"
                            className="py-3 d-flex justify-content-center gap-3"
                        >
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>${product.price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0
                                            ? "In Stock"
                                            : "Out of Stock!"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-center">
                                <Button
                                    type="button"
                                    size="lg"
                                    disabled={product.countInStock === 0}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
