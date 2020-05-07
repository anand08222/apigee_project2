pipeline{
    agent any
    tools{
        maven 'maven-3'
        jdk 'jdk'
        nodejs 'node'
    }
    stages{
        stage('project-checkout'){
            steps{
                git 'https://github.com/anand08222/apigee_project2.git'   
            }
        }
        stage('Policy-code-analysis'){
            steps{
                  sh 'npm install -g apigeelint'    
                  sh 'apigeelint -s common/apiproxy/ -f table.js'
            }
        }
        stage('Mocha-Test'){
            steps{
                sh 'npm install'
                sh 'npm i --save-dev nyc'
                sh 'npm test'
            //    sh 'npm run coverage'
            //    sh 'npm test test/mocha_test/*.js'
            }
        }
/**        stage('Code_Coverage_Analysis'){
            steps{
                sh 'npm i --save-dev nyc'
//sh 'npm run coverage'
            }
        }**/
        stage('Test-Prod deployment'){
            steps{
                sh 'mvn clean install -Ptest -D username=$apigee_username -D password=$apigee_password -D org=$apigee_org_name'
            }
        }
    }
}
