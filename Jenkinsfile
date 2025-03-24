@Library('piper-lib-os') _

node() {
    stage('prepare') {
        setupCommonPipelineEnvironment script:this
    }

    stage('malwareScan') {
        onapsisExecuteScan script: this
    }
}