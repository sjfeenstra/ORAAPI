from API.models import Person, Company, Order, Batch, Roll
from API.serializers import PersonSerializer, CompanySerializer, OrderSerializer, BatchSerializer, RollSerializer
from rest_framework import viewsets


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class BatchViewSet(viewsets.ModelViewSet):
    queryset = Batch.objects.all()
    serializer_class = BatchSerializer


class RollViewSet(viewsets.ModelViewSet):
    queryset = Roll.objects.all()
    serializer_class = RollSerializer
