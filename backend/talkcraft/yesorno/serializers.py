from rest_framework import serializers
from yesorno.models import YesOrNo, UserComment
from login.serializers import UserSerializer



#TODO : Need validate function for YesOrNo initialize (eg. time limit cannot be more than 200)

#TODO : Need to set up detail and main page

class UserCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserComment
        ordering = ['-id']
        fields = ('id', 'user', 'createdTime', 'content', 'post')
        
#Cast through hyperlinkedModelserializer or ModelSerializer  
class YesOrNoSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    pictureA = serializers.ImageField(required= False, allow_empty_file = True, use_url=True)
    pictureB = serializers.ImageField(required= False, allow_empty_file = True, use_url=True)
   #It seeems linking through hyperlinkedrelated field is unnecessary
    #comments = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='yesorno:comment-detail',)
    class Meta:
        model = YesOrNo
        fields = ('id', 'created', 'author', 'title', 'mainTopic', 
                    'startTime', 'summary', 'textDescriptionA', 
                  'textDescriptionB', 'wordLimit', 'totalTimeLimit', 'pictureA', 
                  'pictureB', 'openStatus', 'comments') 
    