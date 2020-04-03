package com.senai.mealreceitas.resource;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.senai.mealreceitas.model.Receita;
import com.senai.mealreceitas.repository.ReceitaRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class ReceitaResource {

	@Autowired
	private ReceitaRepository receitaRepo;
	
	@GetMapping("/receitas")
	public List<Receita> getReceitas(){
		return receitaRepo.findAll();
	}
	
	@GetMapping("/receitas/{id_receita}")
	public ResponseEntity getReceita(@PathVariable Long id_receita) {
		Optional receita = receitaRepo.findById(id_receita);
		return receita.isPresent() ? ResponseEntity.ok(receita.get()) : ResponseEntity.notFound().build();
	}
	
	@GetMapping("/receitas/nome/{nome}")
	public List<Receita> getReceitaNome(@PathVariable String nome){
		return receitaRepo.findByLikeNome(nome);
	}
	
	@PostMapping("/receitas")
	@ResponseStatus(HttpStatus.CREATED)
	public Receita createReceita(@Valid @RequestBody Receita receita) {
		Receita novaReceita = receitaRepo.save(receita);
		return novaReceita;
	}
	
	@PutMapping("/receitas/{id_receita}")
	public ResponseEntity<Receita> updateReceita(@PathVariable Long id_receita, @Valid @RequestBody Receita receita) {
		Receita receitaAtual = receitaRepo.findById(id_receita).get();
		BeanUtils.copyProperties(receita, receitaAtual, "id_receita");
		receitaRepo.save(receitaAtual);
		return ResponseEntity.ok(receitaAtual);
	}
	
	@DeleteMapping("/receitas/{id_receita}")
	public void deleteReceita(@PathVariable Long id_receita) {
		receitaRepo.deleteById(id_receita);
	}
}










