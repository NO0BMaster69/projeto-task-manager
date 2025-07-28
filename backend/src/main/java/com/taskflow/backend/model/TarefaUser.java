package com.taskflow.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "tarefa_user")
public class TarefaUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // Ligação ao utilizador
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Ligação à tarefa
    @ManyToOne
    @JoinColumn(name = "tarefa_id", nullable = false)
    private Tarefa tarefa;

    @Enumerated(EnumType.STRING)
    private Estado estado;

    private LocalDateTime dataAtribuicao;
    private LocalDateTime dataConclusao;

    public enum Estado {
        PENDENTE,
        EM_PROGRESO,
        CONCLUIDA
    }
}
