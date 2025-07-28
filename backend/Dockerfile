FROM openjdk:21

WORKDIR /app

COPY wait-for-it.sh wait-for-it.sh
COPY JWT-backend/target/app.jar app.jar

RUN chmod +x wait-for-it.sh

EXPOSE 8080

CMD ["./wait-for-it.sh", "mysql:3306", "--", "java", "-jar", "app.jar"]

