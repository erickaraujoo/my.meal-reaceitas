package com.senai.mealreceitas.resource;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mtzzwr.odonto.dto.UserAccountCreddential;
import com.senai.mealreceitas.repository.UsuarioRepository;
import com.senai.mealreceitas.security.JwtAuthService;

@RestController
@RequestMapping("/api/v1")
public class UsuarioAuthentication {

	@Autowired
	private UsuarioRepository usuarioRepo;
	
	@Autowired
	private JwtAuthService jwtService;
	
	@Autowired
	private AuthenticationManager authManager;
	
	@PostMapping("/auth/login")
	public ResponseEntity<Map<Object, Object>> signIn(@RequestBody UserAccountCreddential credential) {
		
		
		
	}
	
}
