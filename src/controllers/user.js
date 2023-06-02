const UserService=require('../services/user');
const jwt=require('jsonwebtoken');
class UserController{
        
     
 
        async getUsers(req,res){
             try {
              const users = await UserService.getUsers();
              
              res.json(users);
            } catch (error) {
              console.error('Error retrieving users:', error);
              res.status(500).json({ error: 'Internal Server Error' });
            }
          }

          async login(req, res){
            
            try{
              const { email, password } = req.body;

              const user = await UserService.login({email, password});
              if(!user||user.password !== password){
                return res.status(401).json({ error: 'Invalid Credentials' });
              }
              
              const token = jwt.sign({ id: user.id,role:user.role }, 'mbsT', ); 
                  res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // Expires in 1 hour
                
              return res.json({id:user.id, token, role:user.role });
            }
            catch(error){
              res.status(500).json({ error: 'Internal Server Erronnnnr' });
            }

        } 
          async get(req, res){
            
            try{
              const contentType = req.headers["cookie"]
              
              return res.json({user:"contentType"});

            }
            catch(error){
              res.status(500).json({ error: 'Internal Server Erronnnnr' });
            }

        } 
      }

module.exports=new UserController();
     
        

 