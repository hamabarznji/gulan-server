export default function requireRoles(roles) {
    return (req, res, next) => {
        const { user } = req; // Assuming Passport puts the user in req.user

        if (user && roles.includes(user.role)) {
            next(); // User has one of the required roles, so proceed to the route
        } else {
            res.status(403).json({ message: "Access denied. Insufficient permissions." });
        }
    };
}


