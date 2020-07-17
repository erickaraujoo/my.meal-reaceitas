package com.senai.mealreceitas.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.senai.mealreceitas.model.Receita;

@Service
public interface ReceitaService {

	Page<Receita> findByCriteria(Long categoria, String nome, String ingredientes, Pageable paginacao);
	
}
