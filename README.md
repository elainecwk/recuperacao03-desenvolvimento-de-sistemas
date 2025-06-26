
# Recuperação Avaliativa III - Prática

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Desenvolvimento de Sistemas
- Docente - Gustavo Roberto de Souza

## Orientações Gerais
- A avaliação deverá ser realizada individualmente.
- Está PROIBIDO o uso de qualquer Inteligência Artifical ou consulta na internet.
- Qualquer indício (Código que não apresentado em sala) de uso de IA a recuperação será ZERADA
- Não é permitido o uso do celular durante a realização da atividade.
- Conceitos de Backend e Interação com Banco de dados.
- A entrega deverá ser feita no AVA. Deve ser enviado apenas o link do repositório do github.

## Passo-a-Passo (Clonar e Entrega)
1. Você deve fazer um fork desse repositório, na parte superior dessa página clique na botão de fork. 
2. Depois disso, você deve clonar o repositório para o seu computador, usando o seguinte comando.
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o seguinte comando `git clone <url_do_repositório>`
3. Abra no seu VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar você precisa comittar e enviar novamente para o github suas modificações.
   1. Primeiro precisamos adicionar as alterações ao stage, usando o comando  `git add .`.
   2.  Depois disso, você vai de fato commitar, usando o comando `git commit -m "sua mensagem"`.
   3.  Por fim, você precisa fazer push para o github, com o comando `git push origin master`.
6. Por fim, você deve copiar o link do seu repositório e fazer o envio no AVA. 
   1. Você deve adicionar como comentário na entrega do AVA.

## Atividade
Você como desenvolvedor foi contratado para realizar a criação de um sistema de controle de livros para o
Senai. A primeira parte que é o frontend, ficou com outra equipe e já está praticamente pronta. Sendo assim,
ficou de sua responsabilidade construir o backend e banco de dados da aplicação. Você deve desenvolver um CRUD
aonde o deve ser possível realizar as operações básicas de Criação, Leitura, Atualização e Deleção.

- Deve permitir Cadastrar um Livro;
- Deve permitir Buscar todos os Livros;
- Deve permitir Buscar um Livro especifico pelo seu Id ou ISBN (Campo obrigatório);
- Deve permitir Atualizar somente o Titulo (Campo obrigatório) do livro;
- Deve permitir Delete o desenvolvedor por ID;


As informações devem ser persistidas (armazenadas), no banco de dados; Na deleção você escolhe se prefere
deletar de fato a informação ou somente desativar. Caso queira desativar, lembre-se de adicionar o campo
is_active ou algo parecido do tipo boolean.


## Sugestão de dados do Livro

```
  id: String;
  isbn: String;
  title: String;
  authors: String[];
  publication_year: String;
  page_count: String;
  created_at: Date;
  updated_at: Date;
  is_active: Boolean // SE FOR APENAS DESATIVAR
```