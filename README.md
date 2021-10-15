# httpPWI
 Aula de PWI sobre servidor HTTP

## HTTP 
- Protocolo de Transferências de Hipertexto - protocolo de canada de aplicação da Web;
- É implementado em dois programas: **cliente** e **servidor** (executados em sistemas finais diferentes e trocam mensagens HTTP);
- Usa TCP como protocolo de transporte.
## Conexão HTTP
- O cliente inicia uma conexão TCP com o servidor;
- Os processos do browser e do servidor acessam o TCP por meio das interfaces;
- O cliente **envia** mensagens de requisição HTTP para sua interface e **recebe** mensagens de resposta HTTP também da sua interface;
- O servidor HTTP recebe as mensagens de requisição da sua interface e envia mensagens de resposta.

## RTT
- O cliente envia um segmento TCP ao servidor;
- O servidor reconhece e responde com um segmento ao cliente;
- O cliente reconhece novamente para o servidor.

## Métodos HTTP
- Ao fazer uma requisição precisa-se **especificar** o método utilizado;
- Os métodos identificam qual ação deverá ser executada em um recurso;
- Principais métodos:
  1. GET: solicita a representação de um determinado recurso, porém não deve ser usaro para disparar uma ação como remover um usuário, por exemplo;
  2. POST: as informações enviadas no *body* da requisição são utilizadas para criar um novo recurso e também faz processamentos que não são diretamente relacionados a um recurso;
  3. DELETE: remove um recurso e retorna o status 204 caso não exista nenhum recusro para URI especificada;
  4. PUT: atualiza um recurso na URI especificada e caso o recurso não exista ele pode criar um (o POST pode lidar com recursos e fazer processamento de informações, diferentemente do PUT);
  5. HEAD: retorna informações sobre um recurso, semelhante ao GET porém o HEAD não retorna o recurso no corpo da requisição;