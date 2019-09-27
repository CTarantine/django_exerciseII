from django.db import models

# Create your models here.


class User(models.Model):
    email = models.EmailField(max_length=30)
    username = models.CharField(max_length=30)


class Issue(models.Model):
    description = models.CharField(max_length=30)
    status = models.BooleanField()
    createdOn = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user')
