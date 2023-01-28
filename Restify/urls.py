from django.urls import path, include
from rest_framework import routers
from .views import ReservationViewSet

router = routers.DefaultRouter()
router.register(r'reservations', ReservationViewSet)
reservation_viewset = ReservationViewSet.as_view({
    'post': 'update_reservation_status',
})

urlpatterns = [
    path('', include(router.urls)),
    path('reservations/int:reservation_id/update_status/', reservation_viewset, name='update_reservation_status'),
]
