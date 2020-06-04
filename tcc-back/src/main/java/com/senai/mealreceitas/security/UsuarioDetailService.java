/*package com.senai.mealreceitas.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.senai.mealreceitas.model.Usuario;
import com.senai.mealreceitas.repository.UsuarioRepository;

@Service
public class UsuarioDetailService implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
		
		Usuario usuario = usuarioRepo.findByUsername(username);
		UserDetails userDetails = new User(username, usuario.getPassword(), AuthorityUtils.createAuthorityList(usuario.getRole()));
		return userDetails;
	}
	
}*/
