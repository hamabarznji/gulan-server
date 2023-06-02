const express = require('express')
const cors = require("cors");
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()


app.use(express.json())
app.use(cors()); 



async function main() {
const user=await  prisma.user.create({
    data: {
        name: 'Alice',
        email: 'hama@g mail.com',
        password: '123456',
        role: 'ADMIN',
        themeColor: true,

    }
    })
    console.log(user)
}

main().catch(e => {
    throw e
}).finally(async () => {
    await prisma.$disconnect()
} 
)

app.listen(process.env.PORT || 3002, () =>
    console.log(`Listening on port ${3001}`)
); 