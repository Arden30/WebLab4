package arden.weblab4.services.coordinates;

import arden.weblab4.entities.Coordinate;
import arden.weblab4.repositories.CoordinateRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CoordinateService {
    private final CoordinateRepository coordinateRepository;

    public List<Coordinate> getAllCoordinates(String username) {
        return coordinateRepository.findByUser(username);
    }

    public void addCoordinate(Coordinate coordinate) {
        coordinateRepository.save(coordinate);
    }

    public void deleteAllCoordinates(String username) {
        coordinateRepository.deleteByUser(username);
    }
}
