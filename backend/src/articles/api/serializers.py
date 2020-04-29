from rest_framework import serializers
from articles.models import Article, Animal


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'image')

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = ('id', 'name', 'description', 'img_url', 'clade', 'meaning')
