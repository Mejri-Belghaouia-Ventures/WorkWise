package app.commerce.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import app.commerce.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email);
	
	@Query(value="select * from user where email=:email",nativeQuery=true)
	User getUserByemail(String email);
}
