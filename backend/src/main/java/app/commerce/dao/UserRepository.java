package app.commerce.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import app.commerce.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email);
}
