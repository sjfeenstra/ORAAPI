from django.urls import path, include
from rest_framework.routers import DefaultRouter
from API import views

router = DefaultRouter()
router.register(r'order', views.OrderViewSet)
router.register(r'batch', views.BatchViewSet)
router.register(r'BatchPackagingProtocol', views.BatchPackagingProtocolViewSet)
router.register(r'roll', views.RollViewSet)
router.register(r'bag', views.BagViewSet)
router.register(r'errpr', views.ErrorViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
