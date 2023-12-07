import { User } from "@nextui-org/react";

function UserLocal() {
  return (
    <div className="hover:cursor-pointer">
      <User
        name="Fer Bermúdez"
        description={
          <p className="text-blue-dark text-sm">
            blfernand.fb@gmail.com
          </p>
        }
        avatarProps={{
          src: "https://res.cloudinary.com/dm4wfkipp/image/upload/v1701800581/foto-cv_yynmsh.png",
        }}
      />
    </div>
  );
}

export default UserLocal;
