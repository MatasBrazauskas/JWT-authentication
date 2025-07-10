package JWT_group.JWT_backend.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AuthRequest
{
    @Setter @Getter
    @NotNull @NotEmpty(message = "Username cannot be empty")
    @Size(min = 1, max = 255, message = "Username must be between 1 and 255 characters")
    private String username;

    @Setter @Getter
    @NotNull @NotEmpty(message = "Password cannot be empty")
    @Size(min = 1, max = 255, message = "Password must be between 1 and 255 characters")
    private String password;

    @Setter @Getter
    @NotNull @NotEmpty(message = "Email cannot be empty")
    @Size(min = 1, max = 255, message = "Email must be between 1 and 255 characters")
    @Email(message = "Email must be valid")
    private String email;
}
