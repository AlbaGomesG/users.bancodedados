CREATE DATABASE cadastro

\c cadastro

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE SET NULL,
    content VARCHAR(250) NOT NULL,
    image VARCHAR(250) NOT NULL,
    localization VARCHAR(200)
);

INSERT INTO users (name, email) VALUES 
    ('Giovanna Alba', 'giovannaalba@email.com'),
    ('Marcelo Carboni', 'marcelo@email.com'),
    ('Eduardo Correia', 'eduardo@email.com'),
    ('Felipe Santos', 'felipe@email.com'),
    ('Ana Souza', 'ana.souza@email.com'),
    ('Bruno Lima', 'bruno.lima@email.com'),
    ('Carla Mendes', 'carla.mendes@email.com'),
    ('Daniel Torres', 'daniel.torres@email.com'),
    ('Elisa Martins', 'elisa.martins@email.com'),
    ('Felipe Rocha', 'felipe.rocha@email.com'),
    ('Gabriela Alves', 'gabriela.alves@email.com'),
    ('Henrique Duarte', 'henrique.duarte@email.com'),
    ('Isabela Ferreira', 'isabela.ferreira@email.com'),
    ('João Pires', 'joao.pires@email.com'),
    ('Karina Silva', 'karina.silva@email.com'),
    ('Lucas Andrade', 'lucas.andrade@email.com'),
    ('Mariana Costa', 'mariana.costa@email.com'),
    ('Nicolas Barros', 'nicolas.barros@email.com'),
    ('Olivia Ramos', 'olivia.ramos@email.com'),
    ('Pedro Nunes', 'pedro.nunes@email.com'),
    ('Quezia Prado', 'quezia.prado@email.com'),
    ('Rafael Cunha', 'rafael.cunha@email.com'),
    ('Sabrina Lopes', 'sabrina.lopes@email.com'),
    ('Thiago Moreira', 'thiago.moreira@email.com'),
    ('Úrsula Campos', 'ursula.campos@email.com'),
    ('Vinícius Monteiro', 'vinicius.monteiro@email.com'),
    ('William Reis', 'william.reis@email.com'),
    ('Yasmin Teixeira', 'yasmin.teixeira@email.com'),
    ('Zeca Moura', 'zeca.moura@email.com'),
    ('Amanda Brito', 'amanda.brito@email.com'),
    ('Bernardo Silva', 'bernardo.silva@email.com'),
    ('Camila Fontes', 'camila.fontes@email.com'),
    ('Diego Sampaio', 'diego.sampaio@email.com'),
    ('Eduarda Luz', 'eduarda.luz@email.com'),
    ('Fernando Vieira', 'fernando.vieira@email.com'),
    ('Giovana Peixoto', 'giovana.peixoto@email.com'),
    ('Hugo Tavares', 'hugo.tavares@email.com'),
    ('Ingrid Macedo', 'ingrid.macedo@email.com'),
    ('Juliano Batista', 'juliano.batista@email.com'),
    ('Kelly Cardoso', 'kelly.cardoso@email.com'),
    ('Leonardo Braga', 'leonardo.braga@email.com'),
    ('Manuela Borges', 'manuela.borges@email.com'),
    ('Nathan Ferreira', 'nathan.ferreira@email.com'),
    ('Patrícia Azevedo', 'patricia.azevedo@email.com'),
    ('Rodrigo Assis', 'rodrigo.assis@email.com'),
    ('Sofia Martins', 'sofia.martins@email.com'),
    ('Tiago Barcellos', 'tiago.barcellos@email.com'),
    ('Vanessa Paiva', 'vanessa.paiva@email.com'),
    ('Wesley Guedes', 'wesley.guedes@email.com'),
    ('Yago Santana', 'yago.santana@email.com');


    INSERT INTO posts (user_id, content, image, localization) VALUES
    (1, 'Volêi Renata perde o primeiro jogo da série melhor de três eliminatória contra o Joinville', 'https://img.band.com.br/image/2025/04/07/e-a-primeira-derrota-do-volei-renata-apos-cinco-jogos-disputados-em-um-periodo-de-um-mes-e-meio-162517_400x300.webp', 'Ginásio do Taquaral, Campinas-SP'),
    (2, 'Explorando as belezas desse lugar maravilhoso!', 'https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2019/11/fernando-de-noronha.jpg', 'Fernando de Noronha, Brasil'),
    (3, 'Esse hambúrguer merece um prêmio! 🍔😋', 'https://s2-receitas.glbimg.com/uZoXHzIDFTxAJI3hKEB33W_tJ8A=/0x0:1600x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/k/4/TBIY6SQPeZy45CEDjE0w/hamburguer-artesanal-receita.jpg', 'Campinas-SP');

    INSERT INTO posts (user_id, content, image, localization) VALUES
    (3, 'Goddes Core é a tendência de maquiagem mais elegante de 2025', 'https://www.uai.com.br/uainoticias/wp-content/uploads/2025/04/Goddes-Core_resized-1140x570.jpg', 'Espanha'),
    (2, 'Grêmio reclama de possível pênalti na derrota para o Flamengo', 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/04/Reclamacao-penalti-Gremio-x-Flamengo-scaled-aspect-ratio-512-320.jpg', 'Porto Alegre - RS'),
    (2, 'Matos volta a ser o nº 1 do Brasil nas duplas e fica perto de maior marca', 'https://tenisbrasil.uol.com.br/wp-content/uploads/2025/04/matos-rio-open-sozinho-2025-1024x683.jpg', 'Londres - Ingleterra'),
    (1, 'Ações da Vivara sobem 8% após lucro de R$ 299 mi no 4º tri, alta de 91,9%', 'https://classic.exame.com/wp-content/uploads/2024/03/VIVARA.jpg?ims=750x/filters:quality(85):format(webp)', 'Brasil')

    ALTER TABLE wizards ADD COLUMN photo TEXT;