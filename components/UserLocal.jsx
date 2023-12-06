import { User, Link } from "@nextui-org/react";

function UserLocal() {
  return (
    <>
      <User
        name="Fer Bermúdez"
        description={
          <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
            blfernand.fb@gmail.com
          </Link>
        }
        avatarProps={{
          src: "https://res.cloudinary.com/dm4wfkipp/image/upload/v1701800581/foto-cv_yynmsh.png",
        }}
      />
    </>
  );
}

export default UserLocal;
