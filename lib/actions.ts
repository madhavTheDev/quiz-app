import { dbConnect, User } from "@/db";
import { User as UserType } from "@clerk/nextjs/server"

export const createUser = async (clerkUser : UserType) => {
    const isAuthenticated = !!clerkUser;
    // console.log(clerkUser);
    if (isAuthenticated) {
        const _connection = await dbConnect();
        const currentUser = await User.find({ clerkId: clerkUser?.id });
        console.log(currentUser)
        if (currentUser.length === 0) {
            //create the user
            const [clerkId, clerkEmail, clerkUserName, clerkFirstName, clerkLastName, clerkImageUrl] =
                [clerkUser.id, clerkUser.emailAddresses[0]?.emailAddress, clerkUser.username, clerkUser.firstName, clerkUser.lastName, clerkUser.imageUrl]

            await User.create({
                clerkId,
                email: clerkEmail,
                firstName: clerkFirstName ?? "",
                lastName: clerkLastName ?? "",
                imageUrl: clerkImageUrl
            })
        }
        else {
            console.log('User alread exists');
        }
    }
}