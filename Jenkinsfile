@Library('piper-lib-os') _

node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }

    stage('malwareScan') {
        onapsisExecuteScan script: this
        sh "rm -f onapsisExecuteScan_errorDetails.json"
    }
}
