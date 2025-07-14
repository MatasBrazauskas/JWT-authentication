package JWT_group.JWT_backend.DTOs;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class StockfishAPIRequest
{

    @Setter @Getter
    @NotNull(message = "FEN can't be null.")
    private String fen;

    @Setter @Getter
    @Min(value = 1, message = "Depth should be more than 1")
    @Max(value = 16, message = "Depth should be less than 16")
    private int depth;
}
