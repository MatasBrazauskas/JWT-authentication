package JWT_group.JWT_backend.Repository;

import JWT_group.JWT_backend.Entities.User;
import jakarta.transaction.Transactional;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Lazy
@Repository
public interface LoginRepository extends JpaRepository<User, Long>
{
    @Transactional
    @Query(value = "SELECT * FROM users WHERE username = :username or email = :email", nativeQuery = true)
    public List<User> findUserWithSomeSameCredentials(@Param("username") String title,
                                                  @Param("password") String password,
                                                  @Param("email") String email);

    @Transactional
    @Query(value = "SELECT * FROM users WHERE username = :username and password = :password and email = :email", nativeQuery = true)
    public List<User> findUserWithAllSameCredentials(@Param("username") String title,
                                                  @Param("password") String password,
                                                  @Param("email") String email);
}
