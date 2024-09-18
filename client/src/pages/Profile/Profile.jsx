import ProfileInfo from "../../features/profile/components/ProfileInfo/ProfileInfo";
import TopBar from "../../shared/components/TopBar/TopBar";

export default function Profile() {
  return (
    <>
      <section className="grow max-w-full min-h-full overflow-x-hidden pb-4">
        <TopBar pageName={"Profile"} />
        <div className="mt-8 flex flex-wrap px-4 gap-x-4 gap-y-4">
          <div className="grow flex justify-center">
            {/* Profile Info */}
            <ProfileInfo />
          </div>
          <div className="grow"></div>
        </div>
      </section>
    </>
  );
}
