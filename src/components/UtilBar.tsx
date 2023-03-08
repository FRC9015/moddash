export const UtilBar = () => {
  return (
    <div className="fixed z-50 flex w-screen bg-white bg-opacity-20 px-2 py-1 outline outline-1 outline-offset-0 outline-slate-100 backdrop-blur-lg">
      <button className="rounded bg-white bg-opacity-0 px-1 py-[0.125rem] text-sm font-medium text-gray-100 transition-all ease-in-out hover:bg-opacity-20">
        File
      </button>
    </div>
  );
};
