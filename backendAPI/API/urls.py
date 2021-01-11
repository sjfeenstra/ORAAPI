from django.urls import path, include
from rest_framework.routers import DefaultRouter
from API import views

router = DefaultRouter()
router.register(r'institute', views.InstituteViewSet)
router.register(r'department', views.DepartmentViewSet)
router.register(r'order', views.OrderViewSet)
router.register(r'batch', views.BatchViewSet)
router.register(r'batchrow', views.BatchRowViewSet)
router.register(r'pillstoadd', views.PillsToBeAddedViewSet)
router.register(r'orderbatch', views.OrderBatchViewSet)
router.register(r'batchChecks', views.BatchChecksViewSet)
router.register(r'roll', views.RollViewSet)
router.register(r'bag', views.BagViewSet)
router.register(r'missingpictures', views.MissingPicturesViewSet)
router.register(r'error', views.ErrorViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
