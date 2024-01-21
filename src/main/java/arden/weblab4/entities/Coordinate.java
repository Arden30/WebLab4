package arden.weblab4.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "WebLab4Coordinates")
public class Coordinate implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double x;
    private Double y;
    private Double r;
    private String currTime;
    private Long executionTime;
    private boolean result;
    @Column(name = "username", nullable = false)
    private String user;
}
