from django.db import models

# Create your models here.
class Skill(models.Model):
    skill = models.CharField(max_length=50,  default='', unique=True)
    
class Agent(models.Model):
    agent_name = models.CharField(max_length=50)
    agent_contact = models.IntegerField(blank=False)
    agent_lat = models.DecimalField(max_digits=22, decimal_places=16,blank=False)
    agent_long = models.DecimalField(max_digits=22, decimal_places=16,blank=False)
    agent_aadhar = models.IntegerField(blank=False)
    agent_age = models.IntegerField()
    agent_sex = models.CharField(max_length=8)
    
    
class Worker(models.Model):
    worker_name = models.CharField(max_length=50)
    registered_under = models.ForeignKey(Agent,on_delete=models.CASCADE)
    worker_skills = models.ManyToManyField(Skill)
    worker_aadhar = models.IntegerField(blank=False)
    worker_age = models.IntegerField()
    worker_sex = models.CharField(max_length=8)
    
    
class Company(models.Model):
    comp_name = models.CharField(max_length=200)
    comp_desc = models.TextField()
    comp_lat = models.DecimalField(max_digits=22, decimal_places=16,blank=False)
    comp_long = models.DecimalField(max_digits=22, decimal_places=16,blank=False)
    comp_email = models.EmailField(max_length=100,unique=True)
    comp_contact = models.IntegerField(blank=False)
    
    
class Jobs(models.Model):
    required_employees = models.IntegerField()
    skills_required = models.ManyToManyField(Skill)
    job_title = models.CharField(max_length=200)
    job_desc = models.CharField(max_length=500)
    company_data = models.ForeignKey(Company,on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ('created_on',)
