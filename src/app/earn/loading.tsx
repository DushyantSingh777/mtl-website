// Shown instantly while earn/page.tsx JS is being fetched
export default function EarnLoading() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero skeleton */}
      <section className="pt-24 md:pt-32 pb-10 px-4 sm:px-6 md:min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full space-y-6 animate-pulse">
          <div className="h-3 w-40 bg-[#1E1E24] rounded mx-auto" />
          <div className="h-12 md:h-16 w-3/4 bg-[#1E1E24] rounded mx-auto" />
          <div className="h-12 md:h-16 w-2/3 bg-[#1E1E24] rounded mx-auto" />
          <div className="h-4 w-96 max-w-full bg-[#1E1E24] rounded mx-auto" />
          <div className="h-4 w-80 max-w-full bg-[#1E1E24] rounded mx-auto" />
          <div className="flex gap-4 justify-center mt-4">
            <div className="h-12 w-36 bg-[#1E1E24] rounded-lg" />
            <div className="h-12 w-36 bg-[#1E1E24] rounded-lg" />
          </div>
        </div>
      </section>

      {/* Stats skeleton */}
      <section className="bg-[#1E1E24] py-10 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-black p-8 space-y-3">
              <div className="h-10 w-24 bg-[#1E1E24] rounded" />
              <div className="h-4 w-48 bg-[#1E1E24] rounded" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
