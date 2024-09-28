import { Tooltip } from "@/components/react/Tooltip";
import { socials } from "../lib/data";

export const SocialChannels = () => {
  return (
    <div className="w-full h-max flex items-center justify-center gap-x-4 pb-10">
      {socials.map(({ id, name, icon_dark, path }) => (
        <Tooltip key={id} content={name} position="bottom">
          <a
            href={path}
            aria-label={name}
            target="_blank"
            className="flex items-center justify-center p-2 bg-transparent rounded-lg overflow-hidden transition duration-300 ease-out hover:dark:bg-[#292929] bg-[#d2d2d2]"
          >
            <img
              src={icon_dark}
              alt={name}
              className="w-8 h-8"
            />
          </a>
        </Tooltip>
      ))}
    </div>
  );
};
