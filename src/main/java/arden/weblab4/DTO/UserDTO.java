package arden.weblab4.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserDTO {
    @Size(min = 4, max = 50, message = "Username must have from 4 to 50 chars")
    @NotBlank(message = "Username can't be empty")
    private String username;

    @Size(min = 4, max = 50, message = "Password must have from 4 to 50 chars")
    @NotBlank(message = "Password can't be empty")
    private String password;
}
