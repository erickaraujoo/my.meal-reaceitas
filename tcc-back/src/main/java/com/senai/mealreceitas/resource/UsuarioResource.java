package com.senai.mealreceitas.resource;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.senai.mealreceitas.model.Usuario;
import com.senai.mealreceitas.repository.UsuarioRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class UsuarioResource {

	@Autowired
	UsuarioRepository usuarioRepo;
	
	@PostMapping("/usuarios/login")
	public ResponseEntity<Usuario> login(@Valid @RequestBody Usuario usuario) {
		
		Usuario usuarioAut = usuarioRepo.findByUsernameOrEmail(usuario.getUsername(), usuario.getEmail());
		
		if(usuarioAut != null) {
			
			if(usuarioAut.getPassword().equals(usuario.getPassword())) return ResponseEntity.ok(usuarioAut);
				
			else return new ResponseEntity("Usuario e/ou senha incorretos.", HttpStatus.UNAUTHORIZED);
			
		}else return new ResponseEntity("Usuário ou email não encontrado.", HttpStatus.UNAUTHORIZED);
		
	}
	
	@GetMapping("/usuarios/{idUsuario}")
	public ResponseEntity getUsuarioById(@PathVariable Long idUsuario) {
		Optional usuario = usuarioRepo.findById(idUsuario);
		return usuario.isPresent() ? ResponseEntity.ok(usuario.get()) : ResponseEntity.notFound().build();
	}
	
	@PostMapping("/usuarios")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario createUsuario(@Valid @RequestBody Usuario usuario) {
		Usuario novoUsuario = usuarioRepo.save(usuario);
		return novoUsuario;
	}
	
	@PutMapping("/usuarios/{idUsuario}")
	public ResponseEntity<Usuario> updateUsuario(@PathVariable Long idUsuario, @Valid @RequestBody Usuario usuario){
		Usuario usuarioAtual = usuarioRepo.findById(idUsuario).get();
		BeanUtils.copyProperties(usuario, usuarioAtual, "idUsuario");
		usuarioRepo.save(usuarioAtual);
		return ResponseEntity.ok(usuarioAtual);
	}
	
}
