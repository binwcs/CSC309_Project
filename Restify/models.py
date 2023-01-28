from django.db import models


class Reservation(models.Model):
    PENDING = 'pending'
    DENIED = 'denied'
    EXPIRED = 'expired'
    APPROVED = 'approved'
    CANCELED = 'canceled'
    TERMINATED = 'terminated'
    COMPLETED = 'completed'
    RESERVATION_STATUS = (
        (PENDING, 'pending'),
        (DENIED, 'denied'),
        (EXPIRED, 'expired'),
        (APPROVED, 'approved'),
        (CANCELED, 'canceled'),
        (TERMINATED, 'terminated'),
        (COMPLETED, 'completed'),
    )
    status = models.CharField(max_length=20, choices=RESERVATION_STATUS, default=PENDING)
    # other fields such as start_date, end_date, property, user, etc.
