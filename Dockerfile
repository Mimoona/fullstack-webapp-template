FROM openjdk:21
EXPOSE 8080
ADD backend/target/webapp.jar webapp.jar
ENTRYPOINT ["java", "-jar", "webapp.jar"]