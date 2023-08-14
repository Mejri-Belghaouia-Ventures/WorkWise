package app.commerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.commerce.dao.UserRepository;
import app.commerce.entities.User;


@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;
	
  public User getByEmail(String email) {
	  try {
		  return userRepo.getUserByemail(email);
	  }catch (Exception e) {
		return null;
	}
  }
}
