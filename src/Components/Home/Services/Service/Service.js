import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ appoint }) => {
    const { name, place, time, appointment_fee, img
    } = appoint;
    return (
        <div className='col-md-4 mt-5'>
            <Card style={{ width: '22rem' }} className="rounded shadow bg-primary">
                <Card.Img variant='top' src={img}></Card.Img>
                <Card.Body className='card-body'>
                    <Card.Title>
                        <h3 className='name'>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <h5>Appointment Time: <span className='text-primary fw-normal'>{time}</span> </h5>
                        <p>Place: {place}</p>
                        <p>Appoinment Fee: <span className='text-danger fw-blod'>{appointment_fee}</span></p>
                    </Card.Text>
                    <Button variant="" className='submit-btn p-1' as={Link} to='/checkapoint' >Take An Appointment</Button>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;