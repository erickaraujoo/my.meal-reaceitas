package com.senai.mealreceitas.model;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.senai.mealreceitas.dto.UsuarioReceitaDetalhes;

@Entity
@Table(name = "tbl_receitas")
public class Receita {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_receita;
	
	private String nome;
	private String descricao;
	private String observacao;
	private String tempo_preparo;
	private String rendimento;
	private String imagem;
	private int acessos;
	private Timestamp data_criacao;
	
	@ManyToMany
	@JoinTable(name = "tbl_receitas_categorias",
			   joinColumns = @JoinColumn(name = "id_receita"),
			   inverseJoinColumns = @JoinColumn(name = "id_categoria"))
	private List<Categoria> categorias;
	
	@OneToMany
	@JoinColumn(name = "id_receita")
	@OnDelete(action = OnDeleteAction.CASCADE)
	private List<Ingrediente> ingredientes;
	
	@OneToMany
	@JoinColumn(name = "id_receita")
	@OnDelete(action = OnDeleteAction.CASCADE)
	private List<ModoPreparo> modo_preparo;
	
	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario usuario;

	public List<ModoPreparo> getModo_preparo() {
		return modo_preparo;
	}

	public void setModo_preparo(List<ModoPreparo> modo_preparo) {
		this.modo_preparo = modo_preparo;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public long getId_receita() {
		return id_receita;
	}

	public void setId_receita(long id_receita) {
		this.id_receita = id_receita;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public String getTempo_preparo() {
		return tempo_preparo;
	}

	public void setTempo_preparo(String tempo_preparo) {
		this.tempo_preparo = tempo_preparo;
	}

	public String getRendimento() {
		return rendimento;
	}

	public void setRendimento(String rendimento) {
		this.rendimento = rendimento;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public Timestamp getData_criacao() {
		return data_criacao;
	}

	public void setData_criacao(Timestamp data_criacao) {
		this.data_criacao = data_criacao;
	}

	public List<Ingrediente> getIngredientes() {
		return ingredientes;
	}

	public void setIngredientes(List<Ingrediente> ingredientes) {
		this.ingredientes = ingredientes;
	}

	public int getAcessos() {
		return acessos;
	}

	public void setAcessos(int acessos) {
		this.acessos = acessos;
	}

	public List<Categoria> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<Categoria> categorias) {
		this.categorias = categorias;
	}

}

