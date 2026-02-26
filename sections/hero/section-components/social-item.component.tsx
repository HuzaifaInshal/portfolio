import Link from "next/link";
import { Fragment } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import toast from "react-hot-toast";
import { userData } from "@/config-and-data/user.data";
import { cn } from "@/utils/cn.util";
import { IoMailOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const SocialItem = ({
  variant
}: {
  variant: "facebook" | "linkedin" | "github" | "instagram" | "phone" | "mail";
}) => {
  function returnLink() {
    let link;
    switch (variant) {
      case "facebook":
        link = userData.socials.facebook;
        break;
      case "github":
        link = userData.socials.github;
        break;
      case "instagram":
        link = userData.socials.instagram;
        break;
      case "linkedin":
        link = userData.socials.linkedIn;
      case "mail":
        link = userData.emailTo;
        break;
      default:
        link = "";
        break;
    }
    return link;
  }

  const classNames = cn(
    "[&_svg]:size-8 hover:text-pink-500 cursor-pointer hover:rotate-[20deg] transition-all"
  );

  const content = (
    <Fragment>
      {variant === "github" && (
        <>
          <FaGithub />
        </>
      )}
      {variant === "linkedin" && (
        <>
          <FaLinkedin />
        </>
      )}
      {variant === "instagram" && (
        <>
          <FaInstagram />
        </>
      )}
      {variant === "facebook" && (
        <>
          <FaFacebook />
        </>
      )}
      {variant === "phone" && (
        <>
          <FaPhone />
        </>
      )}
      {variant === "mail" && (
        <>
          <MdEmail />
        </>
      )}
    </Fragment>
  );

  if (variant === "phone") {
    return (
      <button
        onClick={() => {
          navigator.clipboard
            .writeText("+923302546626")
            .then(() => toast.success("Phone Number copied to clipboard"))
            .catch((err) => console.error("Failed to copy:", err));
        }}
        className={classNames}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={returnLink()} target={"_blank"} className={classNames}>
      {content}
    </Link>
  );
};

export default SocialItem;
