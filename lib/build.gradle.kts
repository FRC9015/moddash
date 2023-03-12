plugins {
    id("java")
    id("edu.wpi.first.GradleJni").version("1.0.0")
    id("edu.wpi.first.GradleVsCode").version("1.1.0")
    id("edu.wpi.first.NativeUtils").version("2023.11.1").apply(false)
    id("edu.wpi.first.wpilib.repositories.WPILibRepositoriesPlugin").version("2020.2")
    id("edu.wpi.first.WpilibTools").version("1.0.0")
}

group = "com.moddash.lib"
version = "1.0-SNAPSHOT"



allprojects {
    repositories {
        mavenCentral()
        mavenLocal()
    }
wpilibRepositories.addAllReleaseRepositories(project)
wpilibRepositories.addAllDevelopmentRepositories(project)
}

dependencies {
    implementation("edu.wpi.first.cameraserver:cameraserver-java:2023.+")
    implementation("edu.wpi.first.ntcore:ntcore-java:2023.+")
    implementation("edu.wpi.first.wpilibj:wpilibj-java:2023.+")
    implementation("edu.wpi.first.wpiutil:wpiutil-java:2023.+")
    implementation("edu.wpi.first.wpimath:wpimath-java:2023.+")
    implementation("edu.wpi.first.wpilibNewCommands:wpilibNewCommands-java:2023.+")

    testImplementation("org.junit.jupiter:junit-jupiter-api:5.8.1")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.8.1")
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}