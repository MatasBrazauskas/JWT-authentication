package JWT_group.JWT_backend.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@ToString
@Table(name = "users")
@NoArgsConstructor // Keep explicit @NoArgsConstructor if you have custom constructors, to ensure JPA has one
@AllArgsConstructor // For your custom constructor (username, password, email)
public class User {

    @Id @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Correct for MySQL AUTO_INCREMENT
    @Column(name = "id")
    private Long id; // Recommended: Use wrapper type Long for primary key

    @Setter @Getter
    @Column(name = "username", nullable = false, unique = true) // 'unique = true' enforces DB uniqueness
    @Size(min = 1, max = 255, message = "Username must be between 1 and 255 characters")
    // Removed @UniqueElements as it's for collections, and unique=true handles DB constraint
    private String username;

    @Setter @Getter
    @Column(name = "password", nullable = false)
    @Size(min = 1, max = 255, message = "Password must be between 1 and 255 characters")
    private String password;

    @Setter @Getter
    @Column(name = "email", nullable = false, unique = true) // 'unique = true' enforces DB uniqueness
    @Size(min = 1, max = 255, message = "Email must be between 1 and 255 characters")
    @Email(message = "Email must be valid")
    private String email;

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}