# Generated by Django 2.2.2 on 2019-06-04 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yesorno', '0002_auto_20190604_1832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercomment',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
