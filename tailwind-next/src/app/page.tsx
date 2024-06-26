import { SettingsTabs } from "./components/SettingsTabs";


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">
              Personal Info
            </h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">
              Cancel
            </button>
            <button type="submit" form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:violet-700">
              Save
            </button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full ">

        </form>
      </div>
    </>
  );
}
