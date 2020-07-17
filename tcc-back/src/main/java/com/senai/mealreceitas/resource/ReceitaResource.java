package com.senai.mealreceitas.resource;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.senai.mealreceitas.dto.ReceitaListagem;
import com.senai.mealreceitas.model.Receita;
import com.senai.mealreceitas.model.Usuario;
import com.senai.mealreceitas.repository.ReceitaRepository;
import com.senai.mealreceitas.service.ReceitaService;
import com.senai.mealreceitas.upload.FirebaseStorageService;
import com.senai.mealreceitas.upload.UploadInput;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class ReceitaResource {

	@Autowired
	private ReceitaRepository receitaRepo;
	
	@Autowired
	private ReceitaService receitaServ;
	
	@Autowired
	private FirebaseStorageService storageServ;

	@GetMapping("/receitas")
	public Page<Receita> getReceitaByFiltros(@RequestParam(name = "category", required = false) Long categoria,
											 @RequestParam(name = "search", required = false) String nome,
											 @RequestParam(name = "ingredients", required = false) String ingredientes, 
											 Pageable paginacao) {
		
		return receitaServ.findByCriteria(categoria, nome, ingredientes, paginacao);
		
	}

	@GetMapping("/receitas/{id_receita}")
	public ResponseEntity getReceita(@PathVariable Long id_receita) {
		Optional receita = receitaRepo.findById(id_receita);
		return receita.isPresent() ? ResponseEntity.ok(receita.get()) : ResponseEntity.notFound().build();
	}

	@GetMapping("usuario/{id_usuario}/receitas")
	public Page<Receita> getReceitaUsuario(@PathVariable Long id_usuario, Pageable paginacao){
		Usuario usuario = new Usuario();
		usuario.setId_usuario(id_usuario);
		return receitaRepo.findByUsuario(usuario, paginacao);
	}

	@PostMapping("/receitas")
	@ResponseStatus(HttpStatus.CREATED)
	public Receita createReceita(@Valid @RequestBody Receita receita) {
		Receita novaReceita = receitaRepo.save(receita);
		return novaReceita;
	}
	
	@PostMapping("/receitas/imagem")
	public String saveImagem(@RequestBody UploadInput imagem) {
		String url = storageServ.upload(imagem);
		System.out.println(url);
		return url;
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
