from rest_framework import serializers
from API.models import Person, Company, Order, Batch, Roll


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


class BatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Batch
        fields = ['batch_id', 'order_id']


class RollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roll
        fields = ['roll_id', 'batch_id', 'medication_name', 'medication_packager', 'tray_filler', 'tray_checker',
                  'tray_checker_comment', 'photon_operator', 'photo_checker', 'disapproved_photos',
                  'corrections_employee', 'executed_corrections', 'corrections_checker', 'checked_in_GIS',
                  'final_packager', 'final_packaging_description', 'final_checker', 'released']

