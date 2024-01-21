package arden.weblab4.services.users;

import arden.weblab4.entities.users.User;
import arden.weblab4.exceptions.SuchUsernameExistsException;
import arden.weblab4.exceptions.UsernameNotFoundException;
import arden.weblab4.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository repository;

    public User save(User user) {
        return repository.save(user);
    }

    public User create(User user) {
        if (repository.existsByUsername(user.getUsername())) {
            throw new SuchUsernameExistsException("User " + user.getUsername() + " already exists");
        }

        return save(user);
    }

    public User getByUsername(String username) {
        return repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User " + username + " not found"));

    }

    public UserDetailsService userDetailsService() {
        return this::getByUsername;
    }
}
