## 🏗 Passo 1: Criar um Banco de Dados
No MongoDB, o banco de dados é criado **automaticamente** quando você insere a primeira coleção com dados. Para selecionar (ou criar) um banco de dados chamado **`my_db`**, use:

```shell
use my_db
```
Se ele não existir, será criado quando você adicionar a primeira coleção.

---

## 📁 Passo 2: Criar uma Collection
No MongoDB, você **não precisa criar a collection explicitamente**. Ela é criada automaticamente quando você insere o primeiro documento. Mas, se quiser criar uma coleção manualmente, pode usar:

```shell
db.createCollection("usuarios")
db.createCollection("camisas")
```

---

## 📝 Passo 3: Inserir Documentos nas Collections
Agora vamos adicionar alguns **usuários** e **camisas** nas coleções.

### 🔹 Inserir um usuário na collection `usuarios`
```shell
db.usuarios.insertOne({
    "nome": "Alberto",
    "email": "alberto@email.com",
    "idade": 30
})
```

Ou inserir **vários usuários de uma vez** com `insertMany`:
```shell
db.usuarios.insertMany([
    {
        "nome": "Maria",
        "email": "maria@email.com",
        "telefone": "99999-9999"
    },
    {
        "nome": "Carlos",
        "email": "carlos@email.com",
        "idade": 25
    }
])
```

---

### 🔹 Inserir uma camisa na collection `camisas`
```shell
db.camisas.insertOne({
    "modelo": "Camiseta Preta",
    "tamanho": "M",
    "preco": 49.90
})
```

Ou inserir **várias camisas** ao mesmo tempo:
```shell
db.camisas.insertMany([
    {
        "modelo": "Camiseta Branca",
        "tamanho": "G",
        "preco": 59.90
    },
    {
        "modelo": "Camiseta Vermelha",
        "tamanho": "P",
        "preco": 39.90,
        "estoque": 15
    }
])
```

---

## 🔍 Passo 4: Consultar os Dados
Agora, para ver se os dados foram inseridos corretamente, basta rodar:

### **Listar todos os bancos de dados**
```shell
show dbs
```

### **Selecionar o banco de dados**
```shell
use my_db
```

### **Ver todas as coleções do banco**
```shell
show collections
```

### **Consultar todos os documentos de `usuarios`**
```shell
db.usuarios.find()
```

### **Consultar todos os documentos de `camisas`**
```shell
db.camisas.find()
```

---

## 🔥 Resumo
1. **Criar/selecionar o banco** → `use my_db`
2. **Criar collections (opcional)** → `db.createCollection("nome")`
3. **Inserir documentos** → `insertOne()` ou `insertMany()`
4. **Consultar os dados** → `find()`

No MongoDB, as coisas são bem flexíveis e você não precisa definir um esquema rígido como no SQL. Ele cria as coleções e o banco automaticamente conforme você insere os dados. 🚀
