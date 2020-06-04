package com.senai.mealreceitas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.mealreceitas.model.Ingrediente;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {

}
