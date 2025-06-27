import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {BibliotecaService} from "../Services/BibliotecaService"

export async function BibliotecaController(app: FastifyInstance) {
  app.post(
    "/biblioteca",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const body = request.body as CreateLivroType;

      try {
        await BibliotecaService.register(body)
        return reply.code(201).send();
      }catch (error: any) {
        return reply.code(400).send({ erro: error.message })
    }

    }
  );

  app.get(
    "/biblioteca",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const biblioteca= await BibliotecaService.getAll();

    }
  );

  app.get(
    "/bibliotecas:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const params = request.params as { id: string };

    const livro = await BibliotecaService.getById(params.id);

    return reply.code(200).send(livro)

    }
  );
  app.get("/biblioteca:isbn", async (request: FastifyRequest, reply: FastifyReply) => {
    const params = request.params as { isbn: string };

    const livro = await BibliotecaService.getByIsbn(params.isbn);

    return reply.code(200).send(livro);

  }
);
  app.delete(
    "/biblioteca:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const params = request.params as { id: string };

      await BibliotecaService.deleteById(params.id);

      return reply.code(204).send();
      
    }
  );

  app.patch(
    "/biblioteca:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const params = request.params as { id: string };
    const body = request.body as { title: string };
    await BibliotecaService.updateTitle(params.id, body.title);

    return reply.code(200).send();


    }
  );
}
