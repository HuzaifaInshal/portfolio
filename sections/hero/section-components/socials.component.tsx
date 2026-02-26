import SocialItem from "./social-item.component";

const Socials = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <SocialItem variant="linkedin" />
      <SocialItem variant="github" />
      <SocialItem variant="facebook" />
      <SocialItem variant="instagram" />
      <SocialItem variant="phone" />
      <SocialItem variant="mail" />
    </div>
  );
};

export default Socials;
