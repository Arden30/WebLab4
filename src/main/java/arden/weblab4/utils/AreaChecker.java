package arden.weblab4.utils;

public class AreaChecker {
    private AreaChecker() {}

    public static boolean checkHit(double x, double y, double r) {
        boolean rectangle = false;
        boolean triangle = false;
        boolean circle = false;

        if (x >= -r/2 && x <= 0 && y >= 0 && y <= r) {
            rectangle = true;
        }
        if (x >= 0 && x <= r/2 && y >= -r/2 && y <= 0 && y >= x - r/2) {
            triangle = true;
        }
        if (x >= 0 && y >= 0 && x*x + y*y <= r*r/4) {
            circle = true;
        }
        return rectangle || triangle || circle;
    }
}
