import { HiBookmarkSlash } from "react-icons/hi2";

const NoSearchResultsUI = () => {
  return (
    <section className="py-20 px-6 bg-primary-bg">
      <div className="max-w-md mx-auto flex flex-col items-center justify-center text-center gap-6 rounded-3xl bg-white/5 p-12 backdrop-blur-md">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/10">
          <HiBookmarkSlash className="w-10 h-10 text-violet-500" />
        </div>
        <h2 className="text-3xl font-bold text-violet-700">No recipes found</h2>
        <p className="text-violet-400 text-base leading-relaxed">
          We couldn’t find any recipes matching your search.
        </p>
      </div>
    </section>
  );
};

export default NoSearchResultsUI;