from django.db import models
from login.models import CustomUser

class Debate(models.Model):
    objects = models.Manager()
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        CustomUser, related_name='debate', on_delete=models.CASCADE)
    title = models.CharField(max_length=50, blank=True, default='')
    mainTopic = models.CharField(max_length=100, blank=True, default='')
    startTime = models.DateTimeField()
    summary = models.TextField()

    candidateA = models.CharField(max_length=30, blank=True, default='')
    candidate = models.CharField(max_length=30, blank=True, default='')
    textDescriptionA = models.TextField()
    textDescriptionB = models.TextField()
    # Need to set max and min Value
    wordLimit = models.IntegerField(default=150)
    # Need to set max and min value
    totalTimeLimit = models.DurationField(default=15)
    # categorySelection =
    pictureA = models.ImageField(blank=True, upload_to="debate/%Y/%m/%d")
    pictureB = models.ImageField(blank=True, upload_to="debate/%Y/%m/%d")
    # agreementBox =
    openStatus = models.BooleanField(default=False)
 #   post_hit = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ('created', )

    def __str__(self):
        return str(self.author) + "_" + str(self.mainTopic)

    def count_Debate_of(self):
        return Debate.objects.filter(author=self.author).count()
'''
    @property
    def update_counter(self):
        self.post_hit = self.post_hit +1
        self.savgite()
'''
# Need to do few more saving


class UserComment(models.Model):
    objects = models.Manager()
    post = models.ForeignKey(Debate, related_name='comments', on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    createdTime = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length = 200, blank=True, default='')
#    id = models.AutoField(primary_key=True)
    like = models.IntegerField(null= True, default = 0)
