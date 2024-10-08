import ChangePasswordContainer from "../../features/profile/components/ChangePasswordContainer/ChangePasswordContainer";
import DangerZone from "../../features/profile/components/DangerZone/DangerZone";
import ProfileInfo from "../../features/profile/components/ProfileInfo/ProfileInfo";
import TopBar from "../../shared/components/TopBar/TopBar";

export default function Profile() {
  return (
    <>
      <section className="grow max-w-full min-h-full overflow-x-hidden pb-4">
        <TopBar pageName={"Profile"} />
        <div className="mt-4 sm:mt-8 w-full flex flex-wrap px-4 sm:gap-x-4 gap-y-4">
          <div className="grow flex justify-center sm:w-auto w-full">
            <ProfileInfo />
          </div>
          <div className="grow flex flex-col items-center xl:items-start sm:w-auto w-full">
            <ChangePasswordContainer />
            <DangerZone />
          </div>
        </div>
      </section>
    </>
  );
}
