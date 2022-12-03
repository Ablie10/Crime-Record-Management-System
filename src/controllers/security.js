const security = require('../models/security');
const User = require('../models/user');

const createsecurity = async (req, res) =>{
    const content = req.body;
    const user = await User.findById(content.userId);

    console.log(User);
    try{
        const security =await security.create({user: content.userId, ...content});

        user.security = user.security.concat(security._id)
        await user.save();

        return res.status(201).json({ data: security});
    }
    catch (error) {
        console.log(error);
        return res.status(500).end();
    }
};
const getOnesecurity = async (req, res) => {
    const id = req.params.id
    try {
      const user = await User.findOne({ });
      if (!user) {
        return res.status(400).json({ message: 'user not found' });
     }
      return res.status(201).json({ data: user });
   } catch (error) {
      console.log(error);
      return res.status(500).end();
   }
  };

  const deleteOnesecurity = async (req, res) => {
    const id = req.params.id
    const userId = req.body.userId;
    try {
      const security = await security.findOneAndRemove({ _id: id, user: userId 
  });

  if (!security) {
    return res.status(400).json({ message: 'security not found' });
  }
  return res.status(201).json({ message: 'deleted successfully', 
     data: security });
      } catch (error) {
  console.log(error);
  return res.status(500).end();
            }
         };


    


module.exports={
    createsecurity,
    getOnesecurity,
    deleteOnesecurity
   
    
};
