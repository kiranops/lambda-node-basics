# lambda-node-basics

# Description : 
    We will See how to invoke lambda function(python) using NodeJs(which is on Amazon EC2)
    
# Requirement
    1. AWS Account 
    2. lambda function configured with basic execution role with cloudwatch access. Python version 3.7 with handler name "lamdba_function.handler" ( Note : Handler name could be anything ) 
    3. EC2 Instance where Node has been installed with AWS-SDK module
    4. Create IAM Role to get lambda invoke access to EC2 and attach that role to EC2
    5. We are ready to deploy our application. For a reference check sample code of repo.
    
# Conclusion :
    We can invoke lambda function using Node and return some values and we can read those value using lambda function.
    
    
