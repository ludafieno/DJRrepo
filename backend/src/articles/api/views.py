from rest_framework.generics import ListAPIView, RetrieveAPIView
from articles.models import Article, Animal
from .serializers import ArticleSerializer, AnimalSerializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class AnimalListView(ListAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class AnimalDetailView(RetrieveAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer