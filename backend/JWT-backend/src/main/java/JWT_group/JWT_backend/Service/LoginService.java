package JWT_group.JWT_backend.Service;

import JWT_group.JWT_backend.DTOs.AuthRequest;
import JWT_group.JWT_backend.DTOs.AuthResponse;
import JWT_group.JWT_backend.Entities.User;
import JWT_group.JWT_backend.Repository.LoginRepository;
import JWT_group.JWT_backend.Validation.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService
{
    private LoginRepository loginRepository;
    private final JwtUtil jwtUtil;

    public ResponseEntity<?> registeredUserJWT(AuthRequest auth)
    {
        var userList = loginRepository.findUserWithSomeSameCredentials(auth.getUsername(), auth.getPassword(), auth.getEmail());
        if(userList.isEmpty()){
            loginRepository.save(new User(auth.getUsername(), auth.getPassword(), auth.getEmail()));
        }
        return JWTGeneration(userList.isEmpty(), auth);
    }

    public ResponseEntity<?> loginJWT(AuthRequest auth)
    {
        var userList = loginRepository.findUserWithAllSameCredentials(auth.getUsername(), auth.getPassword(), auth.getEmail());
        return JWTGeneration(userList.size() == 1, auth);
    }

    private ResponseEntity<?> JWTGeneration(boolean generateJWT, AuthRequest auth)
    {
        if(generateJWT){
            final String jwt = jwtUtil.generateToken(auth.getUsername());
            return ResponseEntity.ok(new AuthResponse(jwt));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials (username, password, or email)");
    }
}
