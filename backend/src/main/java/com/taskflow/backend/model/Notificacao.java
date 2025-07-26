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
@Table(name = "notificacao")
public class Notificacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String mensagem;

    @Enumerated(EnumType.STRING)
    private Tipo tipo;

    private LocalDateTime data;

    private boolean lida;

    // Relação com a tarefa associada (opcional ou não)
    @ManyToOne
    @JoinColumn(name = "tarefa_id", nullable = false)
    private Tarefa tarefa;

    // Utilizador destinatário da notificação
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public enum Tipo {
        INFORMATIVA,
        ALERTA,
        AVISO
    }
}

