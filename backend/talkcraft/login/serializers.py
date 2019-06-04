from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
#from django.contrib.auth.models import User
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
     # for rank
    rank = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ('username',)

    # for rank
    def get_rank(self, obj):
        # should bring these values from posts after they are implemented
        post_counts = 0  # should write a function to count the number of posts in yes/no and debate  and reset them every month then add them here
        like_counts = 0  # should write function to count number of likes and rest them every month
        report_counts = 0  # same as above
        user_rank = post_counts/5+like_counts/50-report_counts
        round(user_rank)

        return user_rank


# for handling sign up
class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = CustomUser
        fields = ('token', 'username', 'password')
