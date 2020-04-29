from django.urls import path, include
from .views import ArticleListView, ArticleDetailView, AnimalListView, AnimalDetailView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),
    path('animals/list', AnimalListView.as_view()),
    path('animals/<pk>', AnimalDetailView.as_view())
]
