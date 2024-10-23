// import "@livekit/components-styles";
// import {
//   ControlBar,
//   GridLayout,
//   LiveKitRoom,
//   ParticipantTile,
//   RoomAudioRenderer,
//   VideoConference,
//   useTracks, FocusLayout,
// } from "@livekit/components-react";
// import axios from "axios";
// import React, {  useState } from "react";
//
// const serverUrl = "wss://smart-tnp-app-6ygycraq.livekit.cloud";
//
// const ClassSchedule: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null);
//   const [meetingId, setMeetingId] = useState<string | null>(null);
//   const [userName, setUserName] = useState<string>("");
//   const [isHost, setIsHost] = useState<boolean>(false);
//
//   const handleStartMeeting = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8081/api/v1/start-meeting",
//         {
//           userName,
//         },
//       );
//       setMeetingId(response.data.meetingId);
//       setToken(response.data.token);
//       setIsHost(true);
//     } catch (error) {
//       console.error("Error starting meeting:", error);
//     }
//   };
//
//   const handleJoinMeeting = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8081/api/v1/join",
//         {
//           roomName: meetingId,
//           userName,
//         },
//       );
//       setToken(response.data.token);
//     } catch (error) {
//       console.error("Error joining meeting:", error);
//     }
//   };
//
//   if (!token) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen">
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Enter your username"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             className="border p-2"
//           />
//         </div>
//         <div className="mb-4">
//           <button
//             onClick={handleStartMeeting}
//             className="bg-blue-500 text-white p-2 rounded"
//           >
//             Start Meeting
//           </button>
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Enter Meeting ID"
//             value={meetingId || ""}
//             onChange={(e) => setMeetingId(e.target.value)}
//             className="border p-2"
//           />
//         </div>
//         <div>
//           <button
//             onClick={handleJoinMeeting}
//             className="bg-green-500 text-white p-2 rounded"
//           >
//             Join Meeting
//           </button>
//         </div>
//       </div>
//     );
//   }
//
//   return (
//     <LiveKitRoom
//       video={true}
//       audio={true}
//       token={token}
//       serverUrl={serverUrl}
//       data-lk-theme="default"
//       style={{ height: "100vh" }}
//     >
//       <MyVideoConference />
//       {/*<FocusLayout/>*/}
//       <RoomAudioRenderer />
//       <ControlBar />
//     </LiveKitRoom>
//   );
// };
//
// function MyVideoConference() {
//   const tracks = useTracks([
//     { source: "camera", withPlaceholder: true },
//     { source: "screen_share", withPlaceholder: false },
//     {
//       source:Track.Source.Camera,withPlaceholder: true,
//     }
//   ]);
//
//   return (
//     <GridLayout
//       tracks={tracks}
//       style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
//     >
//       <ParticipantTile />
//     </GridLayout>
//   );
// }
//
// export default ClassSchedule;



import { Button } from '../../components/ui/button.tsx';

import ClassCard from '../../components/core/LiveClass/ClassCard.tsx';
import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog.tsx';
import { Label } from '../../components/ui/label.tsx';
import { Input } from '../../components/ui/input.tsx';
import { useMutation } from '@tanstack/react-query';
import { ToastAction } from '../../components/ui/toast.tsx';

import { useToast } from '../../components/ui/use-toast.ts';
import { useState } from 'react';
import { CreateNewLiveClass } from '../../services/live-class.ts';
import { VscLoading } from 'react-icons/vsc';

const ClassSchedule: React.FC = () => {
  const [ClassName,SetClassName] = useState<string>("")
  const [HostedBy,SetHostedBy] = useState<string>("")
  const {toast} = useToast();
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: {liveClassName:string,hostedBy:string}) => {
      return await CreateNewLiveClass(data);
    },
    onSuccess: async (data) => {
      console.log("Class:", data);
      toast({
        title: "Success",
        description: "New class Successfully created!",
        variant: "default",
        className: "text-green-500",
      });

    },
    onError: (error: Error) => {
      console.error("error occure ", error);
      if (error instanceof Error) {
        // Check if the error message indicates incorrect credentials or user not registered
        if (
          error.message === "Incorrect email or password." ||
          error.message === "User not registered."
        ) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
            className: "text-red-500",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        } else {
          // For other errors, display a generic error message
          toast({
            title: "Error",
            description:
              error.message || "An error occurred. Please try again.",
            variant: "destructive",
            className: "text-red-500",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
      }

      console.log("Error:", error);
    },
  });

  return (
    <div className=" flex flex-col p-4 max-md:flex-col">
      <div className="flex flex-row justify-between">
        <p className={"text-2xl font-semibold"}>Live classes</p>
        {/*<Button onClick={() => navigate("/mycourses/new")}>+ New Class</Button>*/}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">New Class</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>New Class</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Class Name
                </Label>
                <Input
                  value={ClassName}
                  onChange={(e)=>{
                    SetClassName(e.target.value);
                  }}
                  id="name"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Hosted By
                </Label>
                <Input
                  value={HostedBy}
                  onChange={(e)=>{
                    SetHostedBy(e.target.value)
                  }}
                  id="username"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                className={"disabled:cursor-not-allowed disabled:bg-slate-800"}
                disabled={isPending}
                type="submit" onClick={
                (e)=>{
                  e.preventDefault();
                  mutate({
                    liveClassName:ClassName,
                    hostedBy:HostedBy
                  })
                }
              }>
                {isPending ? (
                  <>
                    <VscLoading className="mr-2 animate-spin spin-in-180" />
                    <span>Login Attempting....</span>
                  </>
                ) : (
                  "Launch new class"
                )}

                </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="max-h-screen overflow-y-auto mt-4">
      <ClassCard/>
      </div>
    </div>
  )
}

export default ClassSchedule;
