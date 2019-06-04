from django.contrib import admin
# Implement custom admin page
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username',]

admin.site.register(CustomUser, CustomUserAdmin)
