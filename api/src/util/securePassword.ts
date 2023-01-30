import bcrypt from 'bcrypt';

const saltRounds = 10;

const encryptPassword = async (password: string) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = async (password: string, hashPassword: string) => {
  try {
    return await bcrypt.compare(password, hashPassword);
  } catch (error) {
    console.log(error);
  }
};

export { encryptPassword, comparePassword };
