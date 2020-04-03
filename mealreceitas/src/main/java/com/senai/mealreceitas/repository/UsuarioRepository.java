package com.senai.mealreceitas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.mealreceitas.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	Usuario findByUsername(String username);
	
}
