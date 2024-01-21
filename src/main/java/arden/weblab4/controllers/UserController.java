package arden.weblab4.controllers;

import arden.weblab4.DTO.UserDTO;
import arden.weblab4.exceptions.SuchUsernameExistsException;
import arden.weblab4.services.users.AuthenticationService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
@AllArgsConstructor
public class UserController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<String> signUp(@RequestBody @Valid UserDTO request) {
        try {
            return ResponseEntity.ok(authenticationService.signUp(request).getJwt());
        } catch (SuchUsernameExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/auth")
    public ResponseEntity<String> signIn(@RequestBody @Valid UserDTO request) {
        try {
            return ResponseEntity.ok(authenticationService.signIn(request).getJwt());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
