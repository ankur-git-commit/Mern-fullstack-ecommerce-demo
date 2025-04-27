import bycrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bycrypt.hashSync('1234', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@email.com',
        password: bycrypt.hashSync('1234', 10),
        isAdmin: false
    },
    {
        name: 'Jane Wick',
        email: 'jane@email.com',
        password: bycrypt.hashSync('1234', 10),
        isAdmin: false
    },
]

export { users }