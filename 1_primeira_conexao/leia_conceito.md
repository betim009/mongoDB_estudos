
| **Conceito**          | **SQL (Relacional)**                         | **MongoDB (NoSQL)**                          |
|----------------------|---------------------------------|---------------------------------|
| **Banco de Dados**   | Contém tabelas                   | Contém coleções                |
| **Tabela**           | Conjunto de linhas e colunas    | **Coleção** (collection) - Armazena documentos |
| **Linha (Registro)** | Um conjunto de colunas          | **Documento** - Armazenado em JSON/BSON |
| **Coluna**           | Define os tipos de dados        | Não existe um esquema fixo, cada documento pode ter campos diferentes |
| **Chave Primária**   | Campo único, geralmente `id` com `AUTO_INCREMENT` | Campo **`_id`** gerado automaticamente como `ObjectId` |
| **Relacionamento**   | Chaves estrangeiras (`FOREIGN KEY`) | Referências entre documentos (ou documentos aninhados) |
| **Consultas**        | `SELECT * FROM tabela WHERE condicao` | `db.colecao.find({ campo: valor })` |
| **Inserção de Dados**| `INSERT INTO tabela (coluna1, coluna2) VALUES (v1, v2)` | `db.colecao.insertOne({ campo1: v1, campo2: v2 })` |
| **Atualização de Dados** | `UPDATE tabela SET coluna = valor WHERE id = X` | `db.colecao.updateOne({ _id: X }, { $set: { campo: valor } })` |
| **Exclusão de Dados** | `DELETE FROM tabela WHERE id = X` | `db.colecao.deleteOne({ _id: X })` |
| **Indexação**        | `CREATE INDEX idx_nome ON tabela(coluna)` | `db.colecao.createIndex({ campo: 1 })` |
| **Joins**           | `JOIN` entre tabelas            | Usa **referências** ou **documentos aninhados** |
| **Transações**       | Comuns, garantindo consistência | Menos comuns, mas suportadas a partir do MongoDB 4.0 |
