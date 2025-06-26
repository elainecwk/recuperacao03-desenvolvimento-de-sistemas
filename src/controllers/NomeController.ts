import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


export async function NomeController(app: FastifyInstance) {
  app.post(
    "/nome-rota",
    async (request: FastifyRequest, reply: FastifyReply) => {

    }
  );

  app.get(
    "/nome-rota",
    async (request: FastifyRequest, reply: FastifyReply) => {

    }
  );

  app.get(
    "/nome-rota/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {

    }
  );

  app.delete(
    "/nome-rota/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      
    }
  );

  app.patch(
    "/nome-rota/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {

    }
  );
}
