package com.senai.mealreceitas.model;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_usuarios")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_usuario;

	private String nome;
	private String email;
	
	@Column(name = "usuario")
	private String username;
	
	@Column(name = "senha")
	private String password;
	
	private Timestamp data_criacao;
	private Timestamp data_desativacao;
	//private String role;

	public long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(long id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Timestamp getData_criacao() {
		return data_criacao;
	}

	public void setData_criacao(Timestamp data_criado) {
		this.data_criacao = data_criado;
	}

	public Timestamp getData_desativacao() {
		return data_desativacao;
	}

	public void setData_desativacao(Timestamp data_desativado) {
		this.data_desativacao = data_desativado;
	}

/*	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}*/

}