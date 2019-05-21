from django.contrib.auth.models import User
import test
import json
import requests

newusers = [("admin", "adminpasswd")]
newusers = newusers + test.create_users(10)
for (username, pwd) in newusers:
    user = User.objects.create_user(username, password=pwd)
    user.save()
    print("\tCreated user {0}".format(username))

print("Initialization Successful!")
