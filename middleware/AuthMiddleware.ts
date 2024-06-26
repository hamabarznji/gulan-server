import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import prisma from "../PrismaInstance"


const jwtOptions = {
    secretOrKey: process.env.JWT_SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

passport.use(new JwtStrategy(jwtOptions, async (payload: any, done: VerifiedCallback) => {

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: payload.id,
            },
        });
        
        if (user) {
            return done(null, user);
        }
        return done(null, false);

    } catch
    (error) {
        return done(error, false);
    }
}));

export default passport
