package com.senai.mealreceitas.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.senai.mealreceitas.model.Categoria;
import com.senai.mealreceitas.model.Ingrediente;
import com.senai.mealreceitas.model.Receita;
import com.senai.mealreceitas.repository.ReceitaRepository;

@Service
public class ReceitaServiceImpl implements ReceitaService {

	@Autowired
	ReceitaRepository receitaRepo;

	@Override
	public Page<Receita> findByCriteria(Long categoria, String nome, String ingredientes, Pageable paginacao) {

		return receitaRepo.findAll(new Specification<Receita>() {

			@Override
			public Predicate toPredicate(Root<Receita> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

				List<Predicate> predicates = new ArrayList<>();

				if (nome != null) {
					
					Predicate receitaPdt = criteriaBuilder.like(root.get("nome"), "%" + nome + "%");
					Predicate teste = criteriaBuilder.and(receitaPdt);
					predicates.add(teste);
					
				}
				
				if (categoria != null) {
					
					Join<Receita, Categoria> joinCat = root.join("categorias", JoinType.INNER);
					Predicate categoriaPdt = criteriaBuilder.equal(joinCat.get("id_categoria"), categoria);
					Predicate teste2 = criteriaBuilder.and(categoriaPdt);
					predicates.add(teste2);
					
				}
				
				if(ingredientes != null) {
					
					String[] ingredientesArr = ingredientes.split(",");
					
					Join<Receita, Ingrediente> joinIng = root.join("ingredientes", JoinType.INNER);
					
					List<Predicate> ingPredicates = new ArrayList<>();
					
					for(int i = 0; i < ingredientesArr.length; i++) {
						
						ingPredicates.add(criteriaBuilder.like(joinIng.get("nome"), "%" + ingredientesArr[i] + "%"));
						
					}
					
					predicates.add(criteriaBuilder.or(ingPredicates.toArray(new Predicate[predicates.size()])));
					
				}

				return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));

			}
			
		}, paginacao);

	}

}
