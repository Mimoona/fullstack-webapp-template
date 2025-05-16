FROM openjdk:21
EXPOSE 8080
ADD backend/target/groceryshop.jar groceryshop.jar
ENTRYPOINT ["java", "-jar", "groceryshop.jar"]

