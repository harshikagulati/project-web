import bcrypt from "bcrypt";

const hashPassword = async () => {
  const password = "client#02";

  const hashed = await bcrypt.hash(password, 8);

  console.log("Hashed Password:", hashed);
};

hashPassword();