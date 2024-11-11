from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from pets.views import PetViewSet
from medicamentos.views import MedicationViewSet, AssignmentViewSet

router = DefaultRouter()
router.register(r'pets', PetViewSet)
router.register(r'medications', MedicationViewSet)
router.register(r'assignments', AssignmentViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]