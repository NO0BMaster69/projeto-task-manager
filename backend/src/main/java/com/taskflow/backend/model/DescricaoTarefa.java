package com.taskflow.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "descricao_tarefa")
public class DescricaoTarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String titulo;

    // Ligação à tarefa
    @ManyToOne
    @JoinColumn(name = "tarefa_id", nullable = false)
    private Tarefa tarefa;

    // Lista de passos
    @OneToMany(mappedBy = "descricaoTarefa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PassoDescricaoTarefa> passos;
}

