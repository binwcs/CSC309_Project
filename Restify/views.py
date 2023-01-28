from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import ReservationSerializer
from django.shortcuts import render, get_object_or_404
from .models import Reservation


class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    @action(methods=['post'], detail=True)
    def approve(self, request, pk=None):
        reservation = self.get_object()
        reservation.status = 'approved'
        reservation.save()
        serializer = self.get_serializer(reservation)
        return Response(serializer.data)

    @action(methods=['post'], detail=True)
    def deny(self, request, pk=None):
        reservation = self.get_object()
        reservation.status = 'denied'
        reservation.save()
        serializer = self.get_serializer(reservation)
        return Response(serializer.data)

    @action(methods=['post'], detail=True)
    def update_status(self, request, pk=None):
        reservation = self.get_object()
        status = request.data.get('status')
        reservation.status = status
        reservation.save()
        serializer = self.get_serializer(reservation)
        return Response(serializer.data)