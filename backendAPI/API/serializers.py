from rest_framework import serializers
from API.models import Person, Company, Order, OrderRow


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['person_id', 'first_name', 'last_name', 'phone']


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['company_id', 'company_name', 'contact']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['order_id', 'company_id', 'person_id']


class OrderRowSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderRow
        fields = ['row_id', 'order_id', 'medication_name', 'medication_packager', 'tray_filler', 'tray_checker',
                  'tray_checker_comment', 'photon_operator', 'photo_checker', 'disapproved_photos',
                  'corrections_employee', 'executed_corrections', 'corrections_checker', 'checked_in_GIS',
                  'final_packager', 'final_packaging_description', 'final_checker', 'released']

