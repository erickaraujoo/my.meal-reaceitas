package com.senai.mealreceitas.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_favoritos")
public class Favorito {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_favorito;

	private String nome;
	private long id_receita;
	private long id_usuario;

	public long getId_favorito() {
		return id_favorito;
	}

	public void setId_favorito(long id_favorito) {
		this.id_favorito = id_favorito;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public long getId_receita() {
		return id_receita;
	}

	public void setId_receita(long id_receita) {
		this.id_receita = id_receita;
	}

	public long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(long id_usuario) {
		this.id_usuario = id_usuario;
	}

}
