package com.senai.mealreceitas.repository;

import org.springframework.data.repository.CrudRepository;

import com.senai.mealreceitas.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

	Usuario findByUsername(String username);
	
}
