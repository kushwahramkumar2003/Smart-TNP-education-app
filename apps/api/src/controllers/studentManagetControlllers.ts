import { ApiError } from "../utils/apiError";
import asyncHandler from "../utils/asynchHandler";



const registerUser = asyncHandler(async (req, res, next) => {
    const { fullname, email, username, password } = req.body;

    // Check if any required field is empty
    if ([fullname, email, username, password].some(field => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }


    const user = await user.create({
        fullname,
        email,
        username: username.toLowerCase(),
        password,
       
    });
    if (!user) {
        throw new ApiError(500, "User creation failed. Please check and register again.");
    }
    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    const existUser = await User.findOne({email});
    if(!existUser){
        throw new ApiError(409,"User already exists")
    }
    const token = user.generateToken();
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7, 
    });
    return res.status(201).json({
        message: "User created successfully",
        user: createdUser,
    });
});

export { registerUser };
