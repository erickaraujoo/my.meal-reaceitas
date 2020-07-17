package com.senai.mealreceitas.dto;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_receitas")
public class ReceitaListagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_receita;
	
	private String nome;
	private String descricao;
	private String imagem;
	private int acessos;
	private Timestamp data_criacao;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_usuario")
	private UsuarioReceitaListagem usuario;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_receita")
	private List<AvaliacaoReceitaListagem> avaliacao;
	
/*	public ReceitaListagem(String nome, String descricao, String imagem, int acessos, Timestamp data_criacao,
			UsuarioReceitaListagem usuario, List<AvaliacaoReceitaListagem> avaliacao) {
		super();
		this.nome = nome;
		this.descricao = descricao;
		this.imagem = imagem;
		this.acessos = acessos;
		this.data_criacao = data_criacao;
		this.usuario = usuario;
		this.avaliacao = avaliacao;
	}*/

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

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public int getAcessos() {
		return acessos;
	}

	public void setAcessos(int acessos) {
		this.acessos = acessos;
	}

	public Timestamp getData_criacao() {
		return data_criacao;
	}

	public void setData_criacao(Timestamp data_criacao) {
		this.data_criacao = data_criacao;
	}

	public UsuarioReceitaListagem getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioReceitaListagem usuario) {
		this.usuario = usuario;
	}

	public List<AvaliacaoReceitaListagem> getAvaliacao() {
		return avaliacao;
	}

	public void setAvaliacao(List<AvaliacaoReceitaListagem> avaliacao) {
		this.avaliacao = avaliacao;
	}
	
}
