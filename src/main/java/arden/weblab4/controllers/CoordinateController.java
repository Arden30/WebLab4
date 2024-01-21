package arden.weblab4.controllers;

import arden.weblab4.DTO.CoordinateDTO;
import arden.weblab4.entities.Coordinate;
import arden.weblab4.services.coordinates.CoordinateService;
import arden.weblab4.utils.CoordinateCreator;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coordinates")
@AllArgsConstructor
public class CoordinateController {
    private final CoordinateService coordinateService;

    @GetMapping
    public ResponseEntity<List<Coordinate>> getAllCoordinates(Authentication authentication) {
        return ResponseEntity.ok(coordinateService.getAllCoordinates(authentication.getName()));
    }

    @PostMapping
    public ResponseEntity<Coordinate> addCoordinate(@RequestBody CoordinateDTO coordinateDTO, Authentication authentication) {
        Coordinate coordinate = CoordinateCreator.createCoordinate(coordinateDTO, authentication);
        coordinateService.addCoordinate(coordinate);
        return new ResponseEntity<>(coordinate, HttpStatus.CREATED);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllCoordinates(Authentication authentication) {
        coordinateService.deleteAllCoordinates(authentication.getName());
        return new ResponseEntity<>("Coordinates were deleted", HttpStatus.OK);
    }
}
