FROM maven:3.6.3-jdk-11-slim
WORKDIR /discovery-service
COPY . .
RUN mvn clean package
CMD ["java", "-jar", "target/discovery-0.0.1-SNAPSHOT.jar"]