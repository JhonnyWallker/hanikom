import { User, Link } from "@nextui-org/react";

function UserLocal() {
  return (
    <>
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
    </>
  );
}

export default UserLocal;
