import { prisma } from "@/database";
import type { Handler } from "express";
import { z } from "zod";
import {
  UserCreateOneSchema,
  UserUpdateOneSchema,
} from "@/prisma/generated/schemas";

export class UserController {
  getAllUsers: Handler = async (req, res, next) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  };

  getUserById: Handler = async (req, res, next) => {
    const id = z.coerce.number().parse(req.params.id);
    const user = await prisma.user.findUnique({ where: { id } });
    res.status(200).json(user);
  };

  createUser: Handler = async (req, res, next) => {
    const { data } = UserCreateOneSchema.parse(req.body);
    const newUser = await prisma.user.create({ data });
    res.status(201).json(newUser);
  };

  updateUser: Handler = async (req, res, next) => {
    const id = z.coerce.number().parse(req.params.id);
    const { data } = UserUpdateOneSchema.pick({ data: true }).parse(req.body);
    const updatedUser = await prisma.user.update({ where: { id }, data });
    res.status(200).json(updatedUser);
  };

  deleteUser: Handler = async (req, res, next) => {
    const id = z.coerce.number().parse(req.params.id);
    await prisma.user.delete({ where: { id } });
    res.status(204).send();
  };
}
