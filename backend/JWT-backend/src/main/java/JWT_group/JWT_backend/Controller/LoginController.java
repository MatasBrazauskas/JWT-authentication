package JWT_group.JWT_backend.Controller;

import JWT_group.JWT_backend.DTOs.AuthRequest;
import JWT_group.JWT_backend.Service.LoginService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
@AllArgsConstructor
public class LoginController
{
    private final LoginService loginService;

    @PostMapping("/register")
    public ResponseEntity<?> authenticate(@Valid @RequestBody AuthRequest auth)
    {
        return loginService.registeredUserJWT(auth);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthRequest auth)
    {
        return loginService.loginJWT(auth);
    }
}
