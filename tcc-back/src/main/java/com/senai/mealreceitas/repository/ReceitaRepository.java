package com.senai.mealreceitas.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.hibernate.query.NativeQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.senai.mealreceitas.model.Receita;
import com.senai.mealreceitas.model.Usuario;

public interface ReceitaRepository extends JpaRepository<Receita, Long>, JpaSpecificationExecutor<Receita> {
	
	Page<Receita> findAll(Pageable paginacao);
	Page<Receita> findByUsuarioAndExcluidoIsFalse(Usuario usuario, Pageable paginacao);	
	Optional<Receita> findByIdReceitaAndExcluidoIsFalse(Long idReceita);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE tbl_receitas SET excluido = 1 WHERE id_receita = :idReceita", nativeQuery = true)
	void deleteReceita(Long idReceita);

}
