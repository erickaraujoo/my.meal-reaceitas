package com.senai.mealreceitas.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.senai.mealreceitas.model.ReceitaImagem;

public interface ReceitaImagemRepository extends JpaRepository<ReceitaImagem, Long> {

	@Transactional
	@Modifying
	@Query(value = "UPDATE tbl_receitas_imagens SET id_receita = :receita WHERE id_usuario = :usuario AND id_receita IS NULL",
			nativeQuery = true)
	void updateImagens(Long receita, Long usuario);
	
}
