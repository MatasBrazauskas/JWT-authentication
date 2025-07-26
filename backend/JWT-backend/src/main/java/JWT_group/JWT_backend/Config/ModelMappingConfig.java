package JWT_group.JWT_backend.Config;

import JWT_group.JWT_backend.DTOs.ChessRatings.ChessPlayerRatings;
import JWT_group.JWT_backend.DTOs.ChessRatings.PlayerStats;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Configuration
@Component
public class ModelMappingConfig
{
    @Bean
    public ModelMapper modelMapper()
    {
        ModelMapper modelMapper = new ModelMapper();

        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT).setSkipNullEnabled(true);

        modelMapper.createTypeMap(PlayerStats.class, ChessPlayerRatings.class).
                addMapping(pl -> pl.getChess_rapid().getLast().getRating(), ChessPlayerRatings::setRapid_rating).
                addMapping(pl -> pl.getChess_blitz().getLast().getRating(), ChessPlayerRatings::setBlitz_rating).
                addMapping(pl -> pl.getChess_bullet().getLast().getRating(), ChessPlayerRatings::setBullet_rating);

        return modelMapper;
    }
}
