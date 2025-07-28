package com.taskflow.backend.model;

import jakarta.persistence.*;
import java.util.List;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "passo_descricao_tarefa")
public class PassoDescricaoTarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String texto;

    private Integer ordem;

    // Ligação à descrição a que pertence
    @ManyToOne
    @JoinColumn(name = "descricao_tarefa_id", nullable = false)
    private DescricaoTarefa descricaoTarefa;

    // Imagens associadas ao passo
    @OneToMany(mappedBy = "passo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ImagemPasso> imagens;
}

