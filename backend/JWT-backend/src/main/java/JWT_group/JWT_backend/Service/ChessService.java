package JWT_group.JWT_backend.Service;

import JWT_group.JWT_backend.DTOs.ChessRatings.ChessPlayerRatings;
import JWT_group.JWT_backend.DTOs.ChessRatings.PlayerStats;
import JWT_group.JWT_backend.DTOs.StockfishAPIRequest;
import JWT_group.JWT_backend.DTOs.StockfishAPIResponse;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class ChessService
{
    private final ModelMapper modelMapper;
    private final RestTemplate restTemplate;

    public ChessService(ModelMapper modelMapper, RestTemplate restTemplate)
    {
        this.modelMapper = modelMapper;
        this.restTemplate = restTemplate;
    }

    @Value("${stockfish.api}")
    private String stockfishURL;

    @Value("${chess.com.api}")
    private String chessComURL;

    public StockfishAPIResponse getEvaluation(StockfishAPIRequest request) {
        String url = UriComponentsBuilder.fromHttpUrl(stockfishURL)
                .queryParam("fen", request.getFen())
                .queryParam("depth", request.getDepth())
                .toUriString();

        try {
            ResponseEntity<StockfishAPIResponse> responseEntity = restTemplate.getForEntity(
                    url,
                    StockfishAPIResponse.class
            );

            if (responseEntity.getStatusCode().is2xxSuccessful() && responseEntity.getBody() != null) {
                return responseEntity.getBody();
            }
        } catch (Exception e) {
            System.err.println("Error calling Stockfish API: " + e.getMessage());
        }
        return null;
    }

    public ChessPlayerRatings getPlayersRatings(String userName)
    {
        String url = UriComponentsBuilder.fromHttpUrl(chessComURL).pathSegment("player", userName, "stats").toUriString();
        try{
            ResponseEntity<PlayerStats> responseEntity = restTemplate.getForEntity(
                    url,
                    PlayerStats.class
            );

            if(responseEntity.getStatusCode().is2xxSuccessful() && responseEntity.getBody() != null){
                return modelMapper.map(responseEntity.getBody(), ChessPlayerRatings.class);
            }
        }catch (Exception e){
            System.err.println("Error calling Chess.com API: " + e.getMessage());
        }
        return null;
    }
}
