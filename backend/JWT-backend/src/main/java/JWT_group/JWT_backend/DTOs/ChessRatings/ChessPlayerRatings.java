package JWT_group.JWT_backend.DTOs.ChessRatings;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChessPlayerRatings
{
    private int rapid_rating;
    private int bullet_rating;
    private int blitz_rating;
}
