pipeline {
    agent any
    stages {

        stage('Source Code Management') {
            steps {
                // Checking out the source code from GitHub
                git branch: 'main', url: 'https://github.com/rkolarkar/SIT753_6.2HD.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install --save-dev webpack webpack-cli'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm install --save-dev chai mocha'
                sh 'npm install supertest --save-dev'
                sh 'npm run test & echo $! > app.pid &'
                sh 'kill $(cat app.pid)'
            }
        }
        stage('Deploying the application') {
            steps {
                sh 'npm run start & echo $! > app.pid &'
                
            }
        }
        stage('Stop Application') {
            steps {
                 sh 'kill $(cat app.pid)'
             }
        }
    }
    post {
        always {
            // Clean up after the pipeline
            cleanWs()
        }
    }
}
