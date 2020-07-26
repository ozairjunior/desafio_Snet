import { Request, Response } from "express";
import { User } from "@entities/User";
import { validate } from "class-validator";
import { getRepository } from "typeorm";
import getUserIdFromJwt from "@utils/getId";

export class UserController {

    static list = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
    
        const users = await userRepository.find({
          select: ["id", "name", "email"],
        });
    
        if (!users) {
          res.status(404).send({ response: "No users found." });
        }
        res.send(users);
      };

    static index = async(req: Request, res: Response) => {
      const userRepository = getRepository(User);

      const id = getUserIdFromJwt(req);

      const user = await userRepository.findOne({
        select: ["id", "name", "email"],
        where: {id: id},
        relations: ["customers"],
      })

      res.send(user);
    }

    static edit = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
    
        const { email, name } = req.body;
    
        const user = await userRepository.findOne({
          where: { email: email },
          select: ["name", "email"],
        });
    
        if (!user) {
          res.status(404).send({ response: "User not found" });
        }
    
        const newUser = new User();
    
        newUser.email = email;
        newUser.name = name;
    
        res.status(204);
      };
    
    static create = async (req: Request, res: Response) => {
        const { name, password, email } = req.body;
    
        const user = new User();
    
        user.name = name;
        user.email = email;
        user.password = password;
    
        const errors = await validate(user);
    
        if (errors.length > 0) {
          res.status(400).send({ response: `Wrong formatting: ${errors}` });
          return;
        }
    
        user.hashPassword();
    
        const userRepository = getRepository(User);
    
        const existentUser = await userRepository.findOne({ email: user.email });
    
        if (existentUser) {
          res.status(401).send({ response: "User already exists" });
        }
    
        try {
          await userRepository.save(user);
        } catch (error) {
          res.status(400).send({ response: `Wrong formatting: ${error}` });
        }
    
        res.status(201).send({ response: "User created." });
      };
}