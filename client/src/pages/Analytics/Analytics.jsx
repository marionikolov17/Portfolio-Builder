import TopBar from "../../shared/components/TopBar/TopBar";

export default function Analytics() {
  return (
    <>
      <section className="grow max-w-full min-h-full overflow-x-hidden">
        <TopBar pageName={"Analytics"} />
        <div className="w-full px-3 sm:px-10">
          <div className="mt-8 w-full flex flex-wrap items-center lg:justify-start justify-center gap-x-4 gap-y-4">
            {/* Total Visitors */}
            <div className="w-80 h-32 bg-white rounded-lg shadow py-2 px-4 flex flex-col justify-center">
                <h4 className="font-bold">Total Visitors</h4>
                <h2 className="mt-2 font-bold text-4xl">11 003</h2>
                <p className="text-sm text-slate-400">For all time</p>
            </div>
            {/* New Visitors */}
            <div className="w-80 h-32 bg-white rounded-lg shadow py-2 px-4 flex flex-col justify-center">
                <h4 className="font-bold">New Visitors</h4>
                <h2 className="mt-2 font-bold text-4xl"><span className="text-green-500 me-2">+</span>1023</h2>
                <p className="text-sm text-slate-400">Last 7 days</p>
            </div>
            {/* Average Time */}
            <div className="w-80 h-32 bg-white rounded-lg shadow py-2 px-4 flex flex-col justify-center">
                <h4 className="font-bold">Average session</h4>
                <h2 className="mt-2 font-bold text-4xl flex items-center">1m 49s <span className="ms-2 text-sm text-green-500">(+1m 02s)</span></h2>
                <p className="text-sm text-slate-400">Last 7 days</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
