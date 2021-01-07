from rest_framework import viewsets
from API.models import Order, Batch, BatchPackagingProtocol, Roll, Bag, Error
from API.serializers import OrderSerializer, BatchSerializer, BatchPackagingProtocolSerializer, RollSerializer, \
    BagSerializer, ErrorSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class BatchViewSet(viewsets.ModelViewSet):
    queryset = Batch.objects.all()
    serializer_class = BatchSerializer


class BatchPackagingProtocolViewSet(viewsets.ModelViewSet):
    queryset = BatchPackagingProtocol.objects.all()
    serializer_class = BatchPackagingProtocolSerializer


class RollViewSet(viewsets.ModelViewSet):
    queryset = Roll.objects.all()
    serializer_class = RollSerializer


class BagViewSet(viewsets.ModelViewSet):
    queryset = Bag.objects.all()
    serializer_class = BagSerializer


class ErrorViewSet(viewsets.ModelViewSet):
    queryset = Error.objects.all()
    serializer_class = ErrorSerializer
