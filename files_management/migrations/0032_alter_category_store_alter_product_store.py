# Generated by Django 5.0.7 on 2024-09-29 13:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files_management', '0031_alter_cetegoryimage_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='store',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='files_management.store'),
        ),
        migrations.AlterField(
            model_name='product',
            name='store',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='files_management.store'),
        ),
    ]
