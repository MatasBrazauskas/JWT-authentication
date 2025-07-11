package JWT_group.JWT_backend.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@ToString
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Setter @Getter
    @Column(name = "username", nullable = false, unique = true)
    @Size(min = 1, max = 255, message = "Username must be between 1 and 255 characters")
    private String username;

    @Setter @Getter
    @Column(name = "password", nullable = false)
    @Size(min = 1, max = 255, message = "Password must be between 1 and 255 characters")
    private String password;

    @Setter @Getter
    @Column(name = "email", nullable = false, unique = true)
    @Size(min = 1, max = 255, message = "Email must be between 1 and 255 characters")
    @Email(message = "Email must be valid")
    private String email;

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}