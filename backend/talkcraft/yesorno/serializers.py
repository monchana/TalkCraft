from rest_framework import serializers
from yesorno.models import YesOrNo, UserComment
from login.serializers import UserSerializer

class YesOrNoSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    pictureA = serializers.ImageField(required= False, allow_empty_file = True, use_url=True)
    pictureB = serializers.ImageField(required= False, allow_empty_file = True, use_url=True)
    class Meta:
        model = YesOrNo
        fields = ('id', 'created', 'author', 'title', 'mainTopic', 
                    'startTime', 'summary', 'textDescriptionA', 
                  'textDescriptionB', 'wordLimit', 'totalTimeLimit', 'pictureA', 
                  'pictureB', 'openStatus') 
    
#TODO : Need validate function for YesOrNo initialize (eg. time limit cannot be more than 200)

#TODO : Need to set up detail and main page

class UserCommentSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')
    class Meta:
        model = UserComment
        ordering = ['-id']
        fields = ('user', 'createdTime', 'comment')