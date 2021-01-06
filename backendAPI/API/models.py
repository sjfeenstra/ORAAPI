from django.db import models


# class Person(models.Model):
#     person_id = models.IntegerField(primary_key=True)
#     first_name = models.CharField(max_length=40)
#     last_name = models.CharField(max_length=40)
#     phone = models.IntegerField()
#
#
# class Company(models.Model):
#     company_id = models.IntegerField(primary_key=True)
#     company_name = models.CharField(max_length=40)
#     contact = models.ForeignKey(Person, on_delete=models.RESTRICT)
#
#
# class Order(models.Model):
#     order_id = models.IntegerField(primary_key=True)
#     company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
#     person_id = models.ForeignKey(Person, on_delete=models.RESTRICT)
#
#
# class Batch(models.Model):
#     batch_id = models.IntegerField(primary_key=True)
#     order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
#
#
# class Roll(models.Model):
#     roll_id = models.IntegerField(primary_key=True)
#     batch_id = models.ForeignKey(Batch, on_delete=models.CASCADE)
#     medication_name = models.CharField(max_length=40)
#     # This field is filled by the ID of the MO in question
#     medication_packager = models.IntegerField()
#     # This field is filled by the ID of the MO in question
#     tray_filler = models.IntegerField()
#     # This field is filled by the ID of the MO in question
#     tray_checker = models.IntegerField()
#     tray_checker_comment = models.CharField(max_length=1000)
#     # This field is filled by the ID of the MO in question
#     photon_operator = models.IntegerField()
#     # This field is filled by the ID of the MO in question
#     photo_checker = models.IntegerField()
#     disapproved_photos = models.CharField(max_length=500)
#     # This field is filled by the ID of the MO in question
#     corrections_employee = models.IntegerField()
#     executed_corrections = models.CharField(max_length=1000)
#     # This field is filled by the ID of the MO in question
#     corrections_checker = models.IntegerField()
#     checked_in_GIS = models.BooleanField()
#     # This field is filled by the ID of the MO in question
#     final_packager = models.IntegerField()
#     final_packaging_description = models.CharField(max_length=500)
#     # This field is filled by the ID of the MO in question
#     final_checker = models.IntegerField()
#     released = models.BooleanField()


class Order(models.Model):
    Order_NR = models.IntegerField()
    Institute = models.CharField(max_length=40)
    Department = models.CharField(max_length=40)


class Batch(models.Model):
    batch_NR = models.CharField(max_length=30)
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    total_NR_bags = models.IntegerField()
    bags_checked = models.IntegerField()
    bags_rejected = models.IntegerField()
    NR_to_double_check = models.IntegerField()
    double_checked = models.IntegerField()
    inspector = models.CharField(max_length=40)
    checked_by = models.CharField(max_length=40)
    remarks = models.CharField(max_length=100)


class OrderBatch(models.Model):
    order_NR = models.ForeignKey(Order, on_delete=models.RESTRICT)
    batch_NR = models.ForeignKey(Batch, on_delete=models.RESTRICT)


class BatchPackagingProtocol(models.Model):
    REMARK_LENGTH = 200
    BY_LENGTH = 40
    MON = "MONDAY"
    TUE = "TUESDAY"
    WED = "WEDNESDAY"
    THU = "THURSDAY"
    FRI = "FRIDAY"
    SAT = "SATURDAY"
    SUN = "SUNDAY"
    DAYS_IN_WEEK_CHOICES = [
        (MON, "Maandag"),
        (TUE, "Dinsdag"),
        (WED, "Woensdag"),
        (THU, "Donderdag"),
        (FRI, "Vrijdag"),
        (SAT, "Zaterdag"),
        (SUN, "Zondag")
    ]

    machine_ID = models.CharField(max_length=10)
    run_day = models.CharField(
        max_length=10,
        choices=DAYS_IN_WEEK_CHOICES
    )
    week = models.IntegerField()
    line_clearance_by = models.CharField(max_length=BY_LENGTH)
    line_clearance_remarks = models.CharField(max_length=REMARK_LENGTH)
    start_check_by = models.CharField(max_length=BY_LENGTH)
    start_check_remarks = models.CharField(max_length=REMARK_LENGTH)
    label_check_by = models.CharField(max_length=BY_LENGTH)
    label_check_remarks = models.CharField(max_length=REMARK_LENGTH)
    PSS_check_by = models.CharField(max_length=BY_LENGTH)
    PSS_check_remarks = models.CharField(max_length=REMARK_LENGTH)
    tray_fill_by = models.CharField(max_length=BY_LENGTH)
    tray_check_by = models.CharField(max_length=BY_LENGTH)
    tray_fill_check_remarks = models.CharField(max_length=REMARK_LENGTH)
    schouw_by = models.CharField(max_length=BY_LENGTH)
    schouw_remarks = models.CharField(max_length=REMARK_LENGTH)
    batch_validation = models.BooleanField()
    batch_validation_by = models.CharField(max_length=BY_LENGTH)
    cargo_office_by = models.CharField(max_length=BY_LENGTH)
    packaging_by = models.CharField(max_length=BY_LENGTH)
    control_seal_by = models.CharField(max_length=BY_LENGTH)
    end_check_by = models.CharField(max_length=BY_LENGTH)
    leave_day = models.CharField(
        max_length=10,
        choices=DAYS_IN_WEEK_CHOICES
    )
    leave_time = models.TimeField()
    forward_day = models.CharField(
        max_length=10,
        choices=DAYS_IN_WEEK_CHOICES
    )
    forward_time = models.IntegerField()
    Slick_start_day = models.DateField()


class Roll(models.Model):
    roll_NR = models.IntegerField()
    batch_NR = models.ForeignKey(Batch, on_delete=models.CASCADE)
    patient = models.CharField(max_length=40)
    packaging_code = models.CharField(max_length=40)


class Bag(models.Model):
    PRE_BAG = "PREBAG"
    MED_BAG = "MEDICATIONBAG"
    AFTER_BAG = "AFTERBAG"
    BAG_CHOICES = [
        (PRE_BAG, "Voorloopzakje"),
        (MED_BAG, "Medicatiezakje"),
        (AFTER_BAG, "Naloopzakje")
    ]

    bag_NR = models.IntegerField()
    roll_NR = models.ForeignKey(Roll, on_delete=models.CASCADE)
    bag_type = models.CharField(
        max_length=15,
        choices=BAG_CHOICES
    )


class Errors(models.Model):
    TOO_MUCH = "TOO_MUCH"
    TOO_LITTLE = "TOO_LITTLE"
    TOO_EARLY = "TOO_EARLY"
    TOO_LATE = "TOO_LATE"
    ERROR_CHOICES = [
        (TOO_MUCH, "Te veel"),
        (TOO_LITTLE, "Te weinig"),
        (TOO_EARLY, "Te vroeg"),
        (TOO_LATE, "Te laat")
    ]

    MON = "MONDAY"
    TUE = "TUESDAY"
    WED = "WEDNESDAY"
    THU = "THURSDAY"
    FRI = "FRIDAY"
    SAT = "SATURDAY"
    SUN = "SUNDAY"
    DAYS_IN_WEEK_CHOICES = [
        (MON, "Maandag"),
        (TUE, "Dinsdag"),
        (WED, "Woensdag"),
        (THU, "Donderdag"),
        (FRI, "Vrijdag"),
        (SAT, "Zaterdag"),
        (SUN, "Zondag")
    ]

    error_NR = models.IntegerField()
    error = models.CharField(
        max_length=10,
        choices=ERROR_CHOICES
    )
    error_desc = models.CharField(max_length=100)
    free_text = models.CharField(max_length=100)
    day = models.CharField(
        max_length=10,
        choices=DAYS_IN_WEEK_CHOICES
    )
    date = models.DateField()
    time = models.TimeField()
    corrected_by = models.CharField(max_length=40)
    checked_by = models.CharField(max_length=40)
