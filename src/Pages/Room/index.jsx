import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const RoomPage = () => {
    const {roomId}=useParams();
    const myMeeting = async(element)=>{
        const appID = 450218297;
        const serverSecret= "cc9396df43afb0357d9186c573ce4815" ;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,roomId,Date.now().toString(),"rahul");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `http://localhost:3000/room/${roomId}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }
  return (
    <div>
        <div ref={myMeeting} />
    </div>
  )
}

export default RoomPage