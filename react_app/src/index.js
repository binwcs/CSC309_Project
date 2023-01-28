import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReservationList() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.get('/api/reservations/')
            .then(res => {
                setReservations(res.data);
            })
    }, []);

    const handleApprove = (id) => {
        axios.post(`/api/reservations/${id}/approve/`)
            .then(res => {
                setReservations(reservations.map(reservation =>
                    reservation.id === id ? res.data : reservation
                ));
            })
    }

    const handleDeny = (id) => {
        axios.post(`/api/reservations/${id}/deny/`)
            .then(res => {
                setReservations(reservations.map(reservation =>
                    reservation.id === id ? res.data : reservation
                ));
            })
    }

    return (
        <div>
            {reservations.map(reservation => (
                <div key={reservation.id}>
                    <p>Name: {reservation.name}</p>
                    <p>Status: {reservation.status}</p>
                    <button onClick={() => handleApprove(reservation.id)}>Approve</button>
                    <button onClick={() => handleDeny(reservation.id)}>Deny</button>
                </div>
            ))}
        </div>
    )
}

export default ReservationList;