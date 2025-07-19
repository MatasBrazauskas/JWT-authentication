package JWT_group.JWT_backend.DTOs.ChessRatings;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerStats
{
    private ChessPlayerStats chess_rapid;
    private ChessPlayerStats chess_bullet;
    private ChessPlayerStats chess_blitz;
}
