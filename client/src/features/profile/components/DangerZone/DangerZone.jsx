export default function DangerZone() {
  return (
    <>
      <div className="w-full sm:w-96 h-max bg-white rounded-lg shadow p-4 mt-4 sm:mt-8">
        <h4 className="font-bold text-strongRed mb-0">Danger Zone</h4>
        <button className="mt-4 w-full py-2 flex items-center justify-center text-strongRed text-sm border border-strongRed rounded-lg shadow transition duration-300 hover:bg-strongRed hover:text-white">
          Deactivate Account
        </button>
        <button className="mt-4 w-full py-2 flex items-center justify-center text-white text-sm border border-strongRed rounded-lg shadow transition duration-300 bg-strongRed hover:bg-transparent hover:text-strongRed">
          Delete Account
        </button>
      </div>
    </>
  );
}
