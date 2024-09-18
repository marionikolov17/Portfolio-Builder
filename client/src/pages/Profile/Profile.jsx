import ChangePasswordContainer from "../../features/profile/components/ChangePasswordContainer/ChangePasswordContainer";
import ProfileInfo from "../../features/profile/components/ProfileInfo/ProfileInfo";
import TopBar from "../../shared/components/TopBar/TopBar";

export default function Profile() {
  return (
    <>
      <section className="grow max-w-full min-h-full overflow-x-hidden pb-4">
        <TopBar pageName={"Profile"} />
        <div className="mt-8 w-full flex flex-wrap px-4 gap-y-2">
          <div className="grow flex justify-center sm:w-auto w-full">
            {/* Profile Info */}
            <ProfileInfo />
          </div>
          <div className="grow">
            <ChangePasswordContainer />
          </div>
        </div>
      </section>
    </>
  );
}
