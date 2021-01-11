from rest_framework import viewsets
from API.models import Order, Batch, BatchRow, PillsToBeAdded, OrderBatch, BatchChecks, Roll, Bag, MissingPictures, \
    Error
from API.serializers import OrderSerializer, BatchSerializer, BatchRowSerializer, PillsToBeAddedSerializer, \
    OrderBatchSerializer, BatchChecksSerializer, RollSerializer, BagSerializer, MissingPicturesSerializer, \
    ErrorSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class BatchViewSet(viewsets.ModelViewSet):
    queryset = Batch.objects.all()
    serializer_class = BatchSerializer


class BatchRowViewSet(viewsets.ModelViewSet):
    queryset = BatchRow.objects.all()
    serializer_class = BatchRowSerializer


class PillsToBeAddedViewSet(viewsets.ModelViewSet):
    queryset = PillsToBeAdded.objects.all()
    serializer_class = PillsToBeAddedSerializer


class OrderBatchViewSet(viewsets.ModelViewSet):
    queryset = OrderBatch.objects.all()
    serializer_class = OrderBatchSerializer


class BatchChecksViewSet(viewsets.ModelViewSet):
    queryset = BatchChecks.objects.all()
    serializer_class = BatchChecksSerializer


class RollViewSet(viewsets.ModelViewSet):
    queryset = Roll.objects.all()
    serializer_class = RollSerializer


class BagViewSet(viewsets.ModelViewSet):
    queryset = Bag.objects.all()
    serializer_class = BagSerializer


class MissingPicturesViewSet(viewsets.ModelViewSet):
    queryset = MissingPictures.objects.all()
    serializer_class = MissingPicturesSerializer


class ErrorViewSet(viewsets.ModelViewSet):
    queryset = Error.objects.all()
    serializer_class = ErrorSerializer
