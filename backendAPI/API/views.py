from rest_framework import viewsets
from rest_framework.response import Response

from API.models import Institute, Department, Order, Batch, BatchRow, PillsToBeAdded, OrderBatch, BatchChecks, Roll, \
    Bag, MissingPictures, Error
from API.serializers import InstituteSerializer, DepartmentSerializer, OrderSerializer, BatchSerializer, \
    BatchRowSerializer, PillsToBeAddedSerializer, OrderBatchSerializer, BatchChecksSerializer, RollSerializer, \
    BagSerializer, MissingPicturesSerializer, ErrorSerializer


class InstituteViewSet(viewsets.ModelViewSet):
    queryset = Institute.objects.all()
    serializer_class = InstituteSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    filterset_fields = ('order_released',)


class OrderVrijgifteViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data={'order_released': True}, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


class BatchViewSet(viewsets.ModelViewSet):
    serializer_class = BatchSerializer

    def get_queryset(self):
        queryset = Batch.objects.all()
        order_NR = self.request.query_params.get('order_NR', None)
        if order_NR is not None:
            queryset = queryset.filter(orderbatch__order_NR=order_NR)
        return queryset


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
