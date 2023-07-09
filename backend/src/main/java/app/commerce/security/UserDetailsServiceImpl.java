package app.commerce.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import app.commerce.dao.UserRepository;
import app.commerce.entities.User;


@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	UserRepository userRepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> user=userRepo.findByEmail(username);
		if(user==null) {
			throw new UsernameNotFoundException("user not found");
		}
		
		return user.map(MyUserDetails::new).get();
	}

}
