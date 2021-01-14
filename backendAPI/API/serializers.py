from rest_framework import serializers
from API.models import Institute, Department, Order, Batch, BatchRow, PillsToBeAdded, OrderBatch, BatchChecks, Roll, \
    Bag, MissingPictures, Error


class InstituteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institute
        fields = ['institute']


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['department', 'institute']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['order_NR', 'institute', 'order_released']


class BatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Batch
        fields = ['batch_NR', 'machine_ID', 'packaging_code', 'DB', 'leave_datetime', 'forward_datetime',
                  'remarks_end_control', 'checked_by', 'start_datetime', 'end_datetime', 'inspector', 'batch_started',
                  'total_NR_bags', 'bags_checked', 'total_NR_patients', 'bags_rejected', 'NR_to_double_check',
                  'double_checked']


class BatchRowSerializer(serializers.ModelSerializer):
    class Meta:
        model = BatchRow
        fields = ['batch_NR', 'department', 'split_NR', 'start_datetime', 'end_datetime', 'NR_patients', 'NR_bags',
                  'MC_CD', 'remarks']


class PillsToBeAddedSerializer(serializers.ModelSerializer):
    class Meta:
        model = PillsToBeAdded
        fields = ['pil_ID', 'medication_name', 'free_text']


class OrderBatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderBatch
        fields = ['order_NR', 'batch_NR']


class BatchChecksSerializer(serializers.ModelSerializer):
    class Meta:
        model = BatchChecks
        fields = ['batch_nr', 'PSS_check_by', 'PSS_check_remarks', 'tray_fill_by', 'tray_check_by',
                  'tray_fill_check_remarks', 'schouw_by', 'schouw_remarks',
                  'batch_validation', 'batch_validation_by', 'cargo_office_by', 'packaging_by', 'control_seal_by',
                  'end_check_by', 'internal_error', 'empty_bags_delivered', 'other_errors']


class RollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roll
        fields = ['roll_NR', 'batch_NR', 'patient']


class BagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bag
        fields = ['bag_NR', 'roll_NR', 'bag_type']


class MissingPicturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MissingPictures
        fields = ['bag_NR', 'patient', 'corrected_by', 'checked_by']


class ErrorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Error
        fields = ['bag_NR', 'error_NR', 'error', 'patient', 'error_desc', 'free_text', 'error_datetime', 'corrected_by',
                  'checked_by']



