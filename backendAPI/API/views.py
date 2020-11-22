from API.models import Person, Company, Order, OrderRow
from API.serializers import PersonSerializer, CompanySerializer, OrderSerializer, OrderRowSerializer
from rest_framework import viewsets


class PersonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class CompanyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderRowViewSet(viewsets.ModelViewSet):
    queryset = OrderRow.objects.all()
    serializer_class = OrderRowSerializer
