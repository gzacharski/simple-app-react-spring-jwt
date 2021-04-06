FROM maven:3.6.3-jdk-11-slim
WORKDIR /gateway-service
COPY . .
RUN mvn clean package
CMD ["java", "-jar", "target/gateway-0.0.1-SNAPSHOT.jar"]