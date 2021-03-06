import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




connectDb();

export default async (req, res) => {
    const { email, password } = req.body

    try {
        //1) check if user exists with provide email
        const user = await User.findOne({ email }).select('+password')
        //2) --if not return error
        if (!user) {
            return res.status(404).send('no user exists with thet email')
        }

        // 3) check to see users password matches the one in DB
        const passwordsMatch = await bcrypt.compare(password, user.password)
        // 4) --if so, generate token
        if (passwordsMatch) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
            // 5) sent token to client
            res.status(200).json(token)
        } else {
            res.status(401).send('passwords do not match')
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('error loggin in user. Please try again later')
    }
}