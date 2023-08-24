const bcrypt = require('bcrypt')

const isPasswordValidCheck = async (password: string, userPassword: string) =>
    await bcrypt.compare(password, userPassword)

const hashUserPassword = (password: string) => bcrypt.hash(password, 10)

export { isPasswordValidCheck, hashUserPassword }
