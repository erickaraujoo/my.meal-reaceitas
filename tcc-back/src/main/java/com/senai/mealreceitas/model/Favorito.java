package com.senai.mealreceitas.model;

import javax.persistence.Column;
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
	@Column(name = "id_favorito")
	private long idFavorito;

	private String nome;
	
	@Column(name = "id_receita")
	private long idReceita;
	
	@Column(name = "id_usuario")
	private long idUsuario;

	public long getIdFavorito() {
		return idFavorito;
	}

	public void setIdFavorito(long idFavorito) {
		this.idFavorito = idFavorito;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public long getIdReceita() {
		return idReceita;
	}

	public void setIdReceita(long idReceita) {
		this.idReceita = idReceita;
	}

	public long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(long idUsuario) {
		this.idUsuario = idUsuario;
	}
	
}
