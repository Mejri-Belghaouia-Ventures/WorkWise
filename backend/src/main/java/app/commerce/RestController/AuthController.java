package app.commerce.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import app.commerce.dao.UserRepository;
import app.commerce.data.Credentials;
import app.commerce.entities.User;
import app.commerce.jwt.jwtTokenUtil;
import app.commerce.security.SecurityConfig;
import app.commerce.security.UserDetailsServiceImpl;
import net.minidev.json.JSONObject;

@RestController
@RequestMapping("/auth")
public class AuthController {
  
	@Autowired
	UserRepository userRepo;
	@Autowired
	SecurityConfig security;
	@Autowired
    UserDetailsServiceImpl userservice;
	@Autowired
	AuthenticationManager authenticationManager; 
	
	@Autowired
	jwtTokenUtil jwtTokenUtil;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody User user){
		user.setPassword(security.passwordEncoder().encode(user.getPassword()));
		userRepo.save(user);
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Credentials auth){
		try {
			if(userRepo.findByEmail(auth.getEmail())==null) {
				 return new ResponseEntity<String>("User not found",HttpStatus.CONFLICT);
			}
			Authentication authsuser =authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(auth.getEmail(),auth.getPassword()));
		}catch(Exception e) {
			return new ResponseEntity<String>("Incorrect email or password",HttpStatus.CONFLICT);
		}
		UserDetails user_det=userservice.loadUserByUsername(auth.getEmail());
		String token=jwtTokenUtil.generateToken(user_det);
		JSONObject res=new JSONObject();
		res.appendField("token", token);
		res.appendField("user", user_det);
		return ResponseEntity.ok().body(res);
	}

}

