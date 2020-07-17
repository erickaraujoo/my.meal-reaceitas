package com.senai.mealreceitas.repository;

import java.util.List;
import java.util.Set;

import org.hibernate.query.NativeQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.senai.mealreceitas.model.Receita;
import com.senai.mealreceitas.model.Usuario;

public interface ReceitaRepository extends JpaRepository<Receita, Long>, JpaSpecificationExecutor<Receita> {
	
	Page<Receita> findAll(Pageable paginacao);
	List<Receita> findByNomeContaining(String nome);
	Page<Receita> findByUsuario(Usuario usuario, Pageable paginacao);	

}
