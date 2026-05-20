import { isEmpty, keys } from "lodash";
import CustomLink from "@/components/ui/custom/link";
import { capitalizeString, extractUsername } from "@/utils/helpers/string";

const Contacts = ({ social_links }) => {
  if (isEmpty(social_links)) {
    return null;
  }

  return (
    <div className="my-[3.75rem] mb-8 text-sm">
      <div>
        <h2 className="mb-[0.7rem] text-readcv-primary">Hunt me via</h2>
        <div className="mt-6 ml-4 flex flex-col gap-6 sm:ml-0">
          {keys(social_links)
            ?.sort()
            ?.map((key) => {
              const link = social_links[key];

              if (isEmpty(link)) {
                return null;
              }

              const username = extractUsername(link);

              return (
                <div className="grid sm:grid-cols-3" key={key}>
                  <div>
                    <span className="text-readcv-grey">
                      {capitalizeString(key)}
                    </span>
                  </div>
                  <div>
                    <CustomLink
                      className="text-readcv-primary"
                      label={username}
                      url={link}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
