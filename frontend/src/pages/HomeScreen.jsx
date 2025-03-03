import axios from 'axios'
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

function HomeScreen(){
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('/api/products')
                setProducts(data)
            } catch(error) {
                throw new console.error("Error fetching products:", error);
            }
        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(item => (
                    <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                       <Product product={item}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen