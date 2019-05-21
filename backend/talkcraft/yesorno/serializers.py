from rest_framework import serializers
from yesorno.models import YesOrNo, UserComment
from login.serializers import UserSerializer

class YesOrNoSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')
    pictureA = serializers.ImageField(use_url=True)
    pictureB = serializers.ImageField(use_url=True)
    class Meta:
        model = YesOrNo
        fields = ('id', 'created', 'author', 'title', 'mainTopic', 
                  'live', 'startTime', 'summary', 'textDescriptionA', 
                  'textDescriptionB', 'wordLimit', 'totalTimeLimit', 'pictureA', 
                  'pictureB') 
"""
    def create(self, validated_data):
            return yesorno_post = YesOrNo.objects.create(**validated_data)
"""     
    
#TODO : Need validate function for YesOrNo initialize (eg. time limit cannot be more than 200)
"""
class UserSerializer(serializers.ModelSerializer):
    meetings = serializers.PrimaryKeyRelatedField(many=True, queryset=Meeting.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'meetings')
"""

#TODO : Need to set up detail and main page

class UserCommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserComment
        fields = ('user', 'createdTime', 'comment')