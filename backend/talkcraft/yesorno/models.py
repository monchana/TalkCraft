from django.db import models


class YesOrNo(models.Model):
    objects = models.Manager()
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        'auth.User', related_name='yesorno', on_delete=models.CASCADE)
    title = models.CharField(max_length=50, blank=True, default='')
    mainTopic = models.CharField(max_length=100, blank=True, default='')
    startTime = models.DateTimeField()
    summary = models.TextField()
    textDescriptionA = models.TextField()
    textDescriptionB = models.TextField()
    # Need to set max and min Value
    wordLimit = models.IntegerField(default=150)
    # Need to set max and min value
    totalTimeLimit = models.DurationField(default=15)
    # categorySelection =
    pictureA = models.ImageField(blank=True, upload_to="yesorno/%Y/%m/%d")
    pictureB = models.ImageField(blank=True, upload_to="yesorno/%Y/%m/%d")
    # agreementBox =
    openStatus = models.BooleanField(default=False)

    class Meta:
        ordering = ('created', )

    def __str__(self):
        return str(self.author) + "_" + str(self.mainTopic)

    def count_YesOrNo_of(self):
        return YesOrNo.objects.filter(author=self.author).count()


# Need to do few more saving


class UserComment(models.Model):
    user = models.OneToOneField(to='user', on_delete=models.CASCADE)
    createdTime = models.DateTimeField(auto_now_add=True)
    comment = models.TextField()
    id = models.AutoField(primary_key=True)
