import { Biblioteca } from "@prisma/client";
import { prisma } from "../prisma/client";
import { randomUUID } from "node:crypto";





 class biblioteca {
    register(body: CreateLivroType) {
      throw new Error("Method not implemented.");
    }

    public async create(  biblioteca: CreateLivroType) {
        const LivroExiste= await prisma.biblioteca.findUnique({
            where: {id: id}
            
        });
        if (LivroExiste !== null) {
            throw new Error("Já existe um livro com esse username.")
        }

        const Biblioteca ={
            id:  randomUUID(),
            isbn: biblioteca.isbn,
            title: biblioteca.title,
            authors: biblioteca.authors,
            publication_year: biblioteca.publication_year,
            page_count: biblioteca.page_count,
            created_at : new Date(),
            updated_at : new Date(),
            is_active: true,
         } as Biblioteca;

         await prisma.biblioteca.create({data: Biblioteca})

    }

    public async getAll() {
        return await prisma.biblioteca.findMany({
            where: { is_active: true },
            

        })

    }

    public async getById(id: string) {
        return await prisma.biblioteca.findUnique({
            where: { id: id }
        })

    }
    public async getByIsbn(isbn: string) {
        return await prisma.biblioteca.findUnique({
            where: { isbn: isbn }
        })
    }

    public async deleteById(id: string) {
        const livroExist = await prisma.biblioteca.findUnique({ where: { id: id } })
        if (!livroExist) {
            throw new Error ("Não existe um livro com esse ID");
        }
        await prisma.biblioteca.delete({
            where: { id: id },
    })
}
    public async updateTitulo({ id, titulo }: { id: string; titulo: string; }) {
        await prisma.biblioteca.update({
            where: { id: id },
            data: {
                title: titulo,
                updated_at: new Date()
            }
    })
    
}
}


export const BibliotecaService = new BibliotecaService();