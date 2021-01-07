from rest_framework import serializers
from API.models import Order, Batch, BatchPackagingProtocol, Roll, Bag, Error


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['order_NR', 'institute', 'department']


class BatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Batch
        fields = ['batch_NR', 'start_datetime', 'end_datetime', 'total_NR_bags', 'bags_checked', 'bags_rejected',
                  'NR_to_double_check', 'double_checked', 'inspector', 'checked_by', 'remarks']


class BatchPackagingProtocolSerializer(serializers.ModelSerializer):
    class Meta:
        model = BatchPackagingProtocol
        fields = ['machine_ID', 'run_day', 'week', 'line_clearance_by', 'line_clearance_remarks', 'start_check_by',
                  'start_check_remarks', 'label_check_by', 'label_check_remarks', 'PSS_check_by', 'PSS_check_remarks',
                  'tray_fill_by', 'tray_check_by', 'tray_fill_check_remarks', 'schouw_by', 'schouw_remarks',
                  'batch_validation', 'batch_validation_by', 'cargo_office_by', 'packaging_by', 'control_seal_by',
                  'end_check_by', 'leave_day', 'leave_time', 'forward_day', 'forward_time', 'Slick_start_day']


class RollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roll
        fields = ['roll_NR', 'batch_NR', 'patient', 'packaging_code']


class BagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bag
        fields = ['bag_NR', 'roll_NR', 'bag_type']


class ErrorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Error
        fields = ['error_NR', 'error', 'error_desc', 'free_text', 'day', 'date', 'time', 'corrected_by', 'checked_by']
