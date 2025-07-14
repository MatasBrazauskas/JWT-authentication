package JWT_group.JWT_backend.Controller;

import JWT_group.JWT_backend.DTOs.StockfishAPIRequest;
import JWT_group.JWT_backend.DTOs.StockfishAPIResponse;
import JWT_group.JWT_backend.Service.ChessService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chess")
@AllArgsConstructor
public class ChessController
{
    private final ChessService chessService;

    @PostMapping()
    public ResponseEntity<?> getDate(@Valid @RequestBody StockfishAPIRequest request)
    {
        StockfishAPIResponse response =  chessService.getData(request);
        if(response == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
