package JWT_group.JWT_backend.Service;

import JWT_group.JWT_backend.DTOs.StockfishAPIRequest;
import JWT_group.JWT_backend.DTOs.StockfishAPIResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class ChessService
{
    @Value("${stockfish.api}")
    private String stockfishURL;

    private final RestTemplate restTemplate;

    public ChessService(RestTemplate restTemplate) {this.restTemplate = restTemplate;}

    public StockfishAPIResponse getData(StockfishAPIRequest request) {
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
            return null;

        } catch (Exception e) {
            System.err.println("Error calling Stockfish API: " + e.getMessage());
            return null;
        }
    }
}
