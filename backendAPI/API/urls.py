from django.urls import path, include
from rest_framework.routers import DefaultRouter
from API import views

router = DefaultRouter()
router.register(r'people', views.PersonViewSet)
router.register(r'companies', views.CompanyViewSet)
router.register(r'orders', views.OrderViewSet)
router.register(r'batches', views.BatchViewSet)
router.register(r'rolls', views.RollViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
