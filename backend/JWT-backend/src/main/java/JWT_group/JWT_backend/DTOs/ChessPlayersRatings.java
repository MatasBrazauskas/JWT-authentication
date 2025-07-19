package JWT_group.JWT_backend.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChessPlayersRatings
{
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    private class best
    {
        private int rating;
    }

    private best chess_rapid;
    private best chess_blitz;
    private best chess_bullet;
}
