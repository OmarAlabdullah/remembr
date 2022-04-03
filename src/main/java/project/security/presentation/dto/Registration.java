package project.security.presentation.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class Registration {
    public int id;

    @NotBlank
    public String username;

    @Size(min = 5)
    public String password;

    @NotBlank
    public String firstname;

    @NotBlank
    public String lastname;

    @NotBlank
    public String email;

    @NotBlank
    public String role;
}
