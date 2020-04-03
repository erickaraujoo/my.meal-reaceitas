package com.senai.mealreceitas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.senai.mealreceitas.model.Receita;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
	
	@Query(value = "SELECT * FROM tbl_receitas WHERE nome LIKE %:nome%", nativeQuery = true)
	List<Receita> findByLikeNome(@Param(value = "nome")String nome);
	
}
