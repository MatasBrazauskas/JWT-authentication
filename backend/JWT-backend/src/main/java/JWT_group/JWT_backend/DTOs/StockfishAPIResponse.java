package JWT_group.JWT_backend.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class StockfishAPIResponse
{
    @Setter @Getter
    private boolean success;

    @Setter @Getter
    private float evaluation;

    @Setter @Getter
    private Integer mate;

    @Setter @Getter
    private Integer depth;

    @Setter @Getter
    private String bestmove;

    @Setter @Getter
    private String continuation;
}
