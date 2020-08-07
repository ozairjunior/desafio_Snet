import { Response, Request } from "express";
import { getRepository } from "typeorm";
import { Customer } from "@entities/Customer";
import { User } from "@entities/User";
import getUserIdFromJwt from "@utils/getId";

export class CustomerController{

    static edit = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, telephone, address, number, city, state, nation, cep } = req.body;
    
        const customerRepository = getRepository(Customer);
        const userId = getUserIdFromJwt(req);
    
        const customer = await customerRepository.findOne({
          where: {
            id: id,
            user: {
              id: userId,
            },
          },
        });

        if(!customer) {
          res.status(404).send({response: "Customer not found."})
        }
    
        customer.name = name;
        customer.telephone = telephone;
        customer.address = address;
        customer.number = number;
        customer.city = city;
        customer.state = state;
        customer.nation = nation;
        customer.cep = cep;
    
        try {
         await customerRepository.save(customer);
        } catch (error) {
          res.status(400).send({ response: `Wrong formatting: ${error}` });
        }
    
        res.status(204).send();
      };


    static list = async (req: Request, res: Response) => {
        const CustomerRepository = getRepository(Customer);
        const userId = getUserIdFromJwt(req);
    
        const customer = await CustomerRepository.find({
          where: { user: { id: userId } },
        });
    
        res.send(customer);
      };

    static index = async (req: Request, res: Response) => {
      const { id } = req.params;
    
      const CustomerRepository = getRepository(Customer);
      const userId = getUserIdFromJwt(req);
    
      const customer = await CustomerRepository.findOne({
        where: {
          id: id,
          user: {
            id: userId,
          },
        },
      });
    
      if (!customer) {
        res
          .status(404)
          .send({ response: "customer not found on your inventory." });
      }
      
      res.status(200).send(customer);
    };


    static delete = async (req: Request, res: Response) => {
      const { id } = req.params;
    
        const CustomerRepository = getRepository(Customer);
        const userId = getUserIdFromJwt(req);
    
        const customer = await CustomerRepository.findOne({
          where: {
            id: id,
            user: {
              id: userId,
            },
          },
        });
    
        if (!id) {
          res.status(404).send("customer not found on your inventory");
        }
    
        try {
          await CustomerRepository.remove(customer);
        } catch (error) {
          res.status(400).send({ response: `Wrong formatting: ${error}` });
        }
    
        res.status(204).send();
      };

    static create = async (req: Request, res: Response) =>{
        const{name, telephone, address, number, city, state, nation, cep} = req.body;

        const customerRepository = getRepository(Customer);
        const userRepository = getRepository(User)

        const customer = new Customer();

        customer.name = name;
        customer.telephone = telephone;
        customer.address = address;
        customer.number = number;
        customer.city = city;
        customer.state = state;
        customer.nation = nation;
        customer.cep = cep;

        const userId = getUserIdFromJwt(req);

        const user = await userRepository.findOne({ id: userId });

        if (!user){
            res.status(404).send({response:"User not found."});
        }

        customer.user = user;

         try{
             await customerRepository.save(customer);
             await userRepository.save(user);
         }catch( error ){
            res.status(400).send({ response: 'Wrong formatting: ${error}'});
         }

         res.status(204).send();
    };
}