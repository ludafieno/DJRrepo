from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    image = models.CharField(max_length=2048, default="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png")

    def str(self):
        return self.title

class Animal(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    img_url = models.CharField(max_length=2048)
    clade = models.CharField(max_length=120)
    meaning = models.CharField(max_length=120, null=True)

    def str(self):
        return self.name