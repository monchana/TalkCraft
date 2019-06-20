from rest_framework import serializers
from debate.models import Debate, DebateUserComment
from login.serializers import UserSerializer



#TODO : Need validate function for Debate initialize (eg. time limit cannot be more than 200)

#TODO : Need to set up detail and main page

class DebateUserCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DebateUserComment
        ordering = ['-id']
        fields = ('id', 'user', 'createdTime', 'content', 'post')
        
#Cast through hyperlinkedModelserializer or ModelSerializer  
class DebateSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    pictureA = serializers.ImageField(required= False, allow_empty_file = True, use_url=True)
    pictureB = serializers.ImageField(required= False, allow_empty_file = True, use_url=True)
   #It seeems linking through hyperlinkedrelated field is unnecessary
    #comments = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='debate:comment-detail',)
    class Meta:
        model = Debate
        fields = ('id', 'created', 'author', 'title', 'mainTopic', 
                    'startTime', 'summary', 'candidateA', 'candidateB', 'textA', 
                  'textB', 'wordLimit', 'totalTimeLimit', 'pictureA', 
                  'pictureB', 'openStatus', 'comments') 
    
