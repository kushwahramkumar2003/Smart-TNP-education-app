import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import ProfileTab from "./EditMenus/ProfileTab";
import ComeToMeForTab from "./EditMenus/ComeToMeForTab";
import NeedHelpForTab from "./EditMenus/NeedHelpForTab";
import SocialMediaTab from "./EditMenus/SocialMediaTab";
import z from "zod";

const cometomefor = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(10),
  teacherProfileId: z.string(),
});
const needHelpFor = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(10),
  teacherProfileId: z.string(),
});

export const TeacherProfileSchema = z.object({
  bio: z.string().optional(),
  interests: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  location: z.string().optional(),
  comeToMeFor: z.array(cometomefor).optional(),
  needHelpFor: z.array(needHelpFor).optional(),
});

const EditProfile = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="profile" className="w-[400px]">
                <TabsList className="rounded-xl">
                  <TabsTrigger
                    value="profile"
                    className=" rounded-xl data-[state=active]:bg-blue-900 data-[state=active]:bg-opacity-15 data-[state=active]:text-blue-900 text-gray-600"
                  >
                    Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="cometomefor"
                    className="data-[state=active]:bg-blue-900 rounded-xl data-[state=active]:bg-opacity-15 data-[state=active]:text-blue-900 text-gray-600"
                  >
                    Come to Me For
                  </TabsTrigger>
                  <TabsTrigger
                    value="needhelpfor"
                    className="data-[state=active]:bg-blue-900 rounded-xl data-[state=active]:bg-opacity-15 data-[state=active]:text-blue-900 text-gray-600"
                  >
                    Need Help For
                  </TabsTrigger>
                  <TabsTrigger
                    value="socialmedia"
                    className="data-[state=active]:bg-blue-900 rounded-xl data-[state=active]:bg-opacity-15 data-[state=active]:text-blue-900 text-gray-600"
                  >
                    Social Media
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                  <ProfileTab />
                </TabsContent>
                <TabsContent value="cometomefor">
                  <ComeToMeForTab />
                </TabsContent>
                <TabsContent value="needhelpfor">
                  <NeedHelpForTab />
                </TabsContent>
                <TabsContent value="socialmedia">
                  <SocialMediaTab />
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfile;
