# Generated by Django 5.0.6 on 2024-07-16 13:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('files_management', '0002_rename_user_image_user_id_image_additional_id'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
    ]
