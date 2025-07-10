package JWT_group.JWT_backend.DTOs;

import lombok.*;

@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse
{
    @Setter @Getter
    private String jwt;
}
