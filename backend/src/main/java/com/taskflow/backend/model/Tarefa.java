package com.taskflow.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "tarefa")
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String titulo;

    private String descricao;

    @Enumerated(EnumType.STRING)
    private Prioridade prioridade;

    private LocalDateTime dataCriacao;

    private LocalDateTime dataLimite;

    // Relação com Equipa
    @ManyToOne
    @JoinColumn(name = "equipa_id", nullable = false)
    private Equipa equipa;

    // Relação com TarefaUser
    @OneToMany(mappedBy = "tarefa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TarefaUser> atribuicoes;

    // Relação com DescricaoTarefa
    @OneToMany(mappedBy = "tarefa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DescricaoTarefa> descricoes;

    // Relação com Notificacao
    @OneToMany(mappedBy = "tarefa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Notificacao> notificacoes;

    // Relação com NotaTarefa
    @OneToMany(mappedBy = "tarefa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NotaTarefa> notas;

    public enum Prioridade {
        BAIXA,
        MEDIA,
        ALTA
    }
}

