package com.senai.mealreceitas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.mealreceitas.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
