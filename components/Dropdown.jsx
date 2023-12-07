
import UserLocal from "./UserLocal";

export default function Dropdown() {
  return (
    <div >

      <div className="bg-gray p-10 rounded-lg z-10">
        <div key="profile" className="h-14 gap-2 text-md">
          <p className="font-bold">Signed in as</p>
          <p className="font-bold">@ferBermudez</p>
        </div>
        <div key="settings" className="hover:text-blue-dark cursor-pointer text-gray-dark">My Settings</div>
        <div key="team_settings" className="hover:text-blue-dark cursor-pointer text-gray-dark">Team Settings</div>
        <div key="analytics" className="hover:text-blue-dark cursor-pointer text-gray-dark">Analytics</div>
        <div key="system" className="hover:text-blue-dark cursor-pointer text-gray-dark">System</div>
        <div key="configurations" className="hover:text-blue-dark cursor-pointer text-gray-dark">Configurations</div>
        <div key="help_and_feedback" className="hover:text-blue-dark cursor-pointer text-gray-dark">Help & Feedback</div>
        <div key="logout" color="danger" className="hover:text-blue-dark cursor-pointer text-gray-dark">
          Log Out
        </div>
      </div>
    </div>
  );
}
