from rest_framework import serializers
from yesorno.models import YesOrNo, UserComment
from login.serializers import UserSerializer

class YesOrNoSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.id')
    pictureA = serializers.ImageField(use_url=True)
    pictureB = serializers.ImageField(use_url=True)
    class Meta:
        model = YesOrNo
        fields = ('id', 'created', 'author', 'title', 'mainTopic', 
                    'startTime', 'summary', 'textDescriptionA', 
                  'textDescriptionB', 'wordLimit', 'totalTimeLimit', 'pictureA', 
                  'pictureB', 'openStatus') 
    
#TODO : Need validate function for YesOrNo initialize (eg. time limit cannot be more than 200)

#TODO : Need to set up detail and main page

class UserCommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserComment
        fields = ('user', 'createdTime', 'comment')