export const sendMessage = async (req, res) => {

 
try {
  
const {message, } = req.body;
const {id} = req.params;

const senderId = req.user._id;





} catch (error) {
  

res.status(500).json({ message: "Internal Server error." });

  console.log("Error in sendMessage controller", error.message);

}



}











export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);

    res.status(500).json({ message: "Server error." });
  }
};
