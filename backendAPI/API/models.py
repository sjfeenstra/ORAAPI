from django.db import models


class Person(models.Model):
    person_id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    phone = models.IntegerField()


class Company(models.Model):
    company_id = models.IntegerField(primary_key=True)
    company_name = models.CharField(max_length=40)
    contact = models.ForeignKey(Person, on_delete=models.RESTRICT)


class Order(models.Model):
    order_id = models.IntegerField(primary_key=True)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    person_id = models.ForeignKey(Person, on_delete=models.RESTRICT)


class OrderRow(models.Model):
    row_id = models.IntegerField(primary_key=True)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    medication_name = models.CharField(max_length=40)
    # This field is filled by the ID of the MO in question
    medication_packager = models.IntegerField()
    # This field is filled by the ID of the MO in question
    tray_filler = models.IntegerField
    # This field is filled by the ID of the MO in question
    tray_checker = models.IntegerField
    tray_checker_comment = models.CharField(max_length=1000)
    # This field is filled by the ID of the MO in question
    photon_operator = models.IntegerField
    # This field is filled by the ID of the MO in question
    photo_checker = models.IntegerField
    disapproved_photos = models.CharField(max_length=500)
    # This field is filled by the ID of the MO in question
    corrections_employee = models.IntegerField
    executed_corrections = models.CharField(max_length=1000)
    # This field is filled by the ID of the MO in question
    corrections_checker = models.IntegerField
    checked_in_GIS = models.BooleanField
    # This field is filled by the ID of the MO in question
    final_packager = models.IntegerField
    final_packaging_description = models.CharField(max_length=500)
    # This field is filled by the ID of the MO in question
    final_checker = models.IntegerField
    released = models.BooleanField
