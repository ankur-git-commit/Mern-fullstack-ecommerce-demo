import { Container, Row, Col } from "react-bootstrap"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="fixed-bottom bg-dark text-white">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>ProShop &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer

