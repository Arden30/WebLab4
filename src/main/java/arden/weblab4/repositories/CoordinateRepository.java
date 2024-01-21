package arden.weblab4.repositories;

import arden.weblab4.entities.Coordinate;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoordinateRepository extends JpaRepository<Coordinate, Long> {
    List<Coordinate> findByUser(String user);
    @Transactional
    void deleteByUser(String user);
}
