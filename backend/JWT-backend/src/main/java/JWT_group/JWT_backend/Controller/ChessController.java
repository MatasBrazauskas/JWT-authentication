package JWT_group.JWT_backend.Controller;

import JWT_group.JWT_backend.DTOs.ChessRatings.ChessPlayerRatings;
import JWT_group.JWT_backend.DTOs.ChessRatings.PlayerStats;
import JWT_group.JWT_backend.DTOs.StockfishAPIRequest;
import JWT_group.JWT_backend.DTOs.StockfishAPIResponse;
import JWT_group.JWT_backend.Service.ChessService;
import JWT_group.JWT_backend.Validation.JwtUtil;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chess")
public class ChessController
{
    @Lazy
    @Autowired
    private ChessService chessService;

    @Lazy
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping()
    public ResponseEntity<?> getEval(@RequestHeader(name = "Authorization") String jwt, @Valid @RequestBody StockfishAPIRequest request)
    {
        if(!jwtUtil.validateToken(jwt.substring(7))){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("JWT issues.");
        }
        StockfishAPIResponse response =  chessService.getEvaluation(request);
        if(response == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/player/{username}")
    public ResponseEntity<?> getPlayersRating(@RequestHeader(name = "Authorization") String jwt, @NotBlank @PathVariable("username") String username)
    {
        if(!jwtUtil.validateToken(jwt.substring(7))){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("JWT issues.");
        }
        ChessPlayerRatings playersRatings = chessService.getPlayersRatings(username);
        if(playersRatings == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(playersRatings);
    }


}
