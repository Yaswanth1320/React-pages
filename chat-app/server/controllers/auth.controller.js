
export const signup = async(req, res) => {
  try {
    const { userName,fullName,password,conformPassword,gender } = req.body;
  } catch (error) {
    console.log(error)
  }
};

export const login = (req, res) => {
  res.send("login user");
};

export const logout = (req, res) => {
  res.send("logout user");
};