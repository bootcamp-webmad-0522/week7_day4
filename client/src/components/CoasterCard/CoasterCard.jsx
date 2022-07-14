import './CoasterCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CoasterCard = ({ imageUrl, title, _id }) => {

    return (
        <Card className="CoasterCard mb-4">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <hr />
                <Link to={`/detalles/${_id}`}>
                    <div className="d-grid">
                        <Button variant="dark" size="sm" as="div">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CoasterCard