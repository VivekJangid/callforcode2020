from rest_framework import routers
from api.apiview import *

router = routers.DefaultRouter()
router.register('api/agent',AgentViewSet,'agentview')
router.register('api/skill',SkillViewSet,'skillview')
router.register('api/worker',WorkerViewSet,'workerview')
router.register('api/company',CompanyViewSet,'companyview')
router.register('api/jobs',JobsViewSet,'jobview')

urlpatterns = router.urls