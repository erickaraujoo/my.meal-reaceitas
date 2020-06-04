/*package com.senai.mealreceitas.resource;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.mealreceitas.dto.UsuarioAccountCredential;
import com.senai.mealreceitas.model.Usuario;
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
	public ResponseEntity<Map<Object, Object>> signIn(@RequestBody UsuarioAccountCredential credential) {
		
		try {
			
			UsernamePasswordAuthenticationToken user = 
					new UsernamePasswordAuthenticationToken(credential.getUsername(), credential.getPassword());
			authManager.authenticate(user);
			List<String> roles = new ArrayList<>();
			Usuario usuario = new Usuario();
			usuario = usuarioRepo.findByUsername(credential.getUsername());
			roles.add(usuario.getRole());
			String token = jwtService.createToken(credential.getUsername(), roles);
			Map<Object, Object> jsonResponse = new HashMap<>();
			jsonResponse.put("username", credential.getUsername());
			jsonResponse.put("token", token);
			
			return ResponseEntity.ok(jsonResponse);
			
		}catch(Exception e) {
			System.out.println(e);
		}
		
		return null;
		
	}
	
}*/
