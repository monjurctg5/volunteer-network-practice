import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Events = () => {
    const [events, setEvents] = useState([])
    const {user} = useFirebase()
    useEffect(() => {
        fetch('http://localhost:5000/Events')
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    }, [])
    const goInEvents = (index) => {
        const email = user?.email
        console.log(email)
        const data = events[index];
        data.email = email
        console.log(data)
        fetch(`http://localhost:5000/myEvents`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body :JSON.stringify(data)
        })
    }

    return (
        <div className="container">
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    events.map((event, index) =>
                    <Link to = "/volunteerRegister">
                        <Col onClick={() => goInEvents(index)} className="btn"  >
                            <Card className="p-2" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={event.img} height="200" />
                                <Card.Body className="bg-info" >
                                    <Card.Title>{event.EventTitle}</Card.Title>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>

                        </Col>
                        </Link>
                    )
                }

            </Row>


        </div>
    );
};

export default Events;