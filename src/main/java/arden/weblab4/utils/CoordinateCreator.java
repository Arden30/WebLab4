package arden.weblab4.utils;

import arden.weblab4.DTO.CoordinateDTO;
import arden.weblab4.entities.Coordinate;
import org.springframework.security.core.Authentication;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CoordinateCreator {
    private CoordinateCreator() {
    }

    public static Coordinate createCoordinate(CoordinateDTO coordinateDTO, Authentication authentication) {
        long startTime = System.nanoTime();
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        String currentTime = now.format(dateTimeFormatter);

        double x = coordinateDTO.getX();
        double y = coordinateDTO.getY();
        double r = coordinateDTO.getR();

        long executionTime = System.nanoTime() - startTime;

        Coordinate coordinate = new Coordinate();
        coordinate.setX(x);
        coordinate.setY(y);
        coordinate.setR(r);
        coordinate.setCurrTime(currentTime);
        coordinate.setExecutionTime(executionTime);
        coordinate.setResult(AreaChecker.checkHit(x, y, r));
        coordinate.setUser(authentication.getName());
        return coordinate;
    }
}
