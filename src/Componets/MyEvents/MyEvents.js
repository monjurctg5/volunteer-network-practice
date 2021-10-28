import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const MyEvents = () => {
    const { user } = useFirebase()
    const [myEvents, setMyEvents] = useState([])
    const email = user?.email
    useEffect(() => {

        fetch(`http://localhost:5000/volunteer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyEvents(data);
            })

    }, [email])

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/volunteer/${id}`, { method: 'delete' }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("cancle successfully")
                    const reminningEvents = myEvents.filter(e => e._id !== id)
                    setMyEvents(reminningEvents)
                }
            })
    }

    return (
        <div className="container">
            {user?.email && <h1>{myEvents.length}</h1>}

            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    myEvents.map((event) =>
                        <Col   >
                            <Card className="p-2" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={event.img} height="200" />
                                <Card.Body className="bg-info" >
                                    <Card.Title>{event.EventTitle}</Card.Title>
                                    <Button variant="danger" onClick={() => handleDelete(event._id)}>cancle</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    )
                }

            </Row>


        </div>
    );
};

export default MyEvents;