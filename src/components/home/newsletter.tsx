export function Newsletter() {
  return (
    <section className="w-full flex flex-col md:flex-row bg-black text-white md:h-[750px]">
      {/* Left Content */}
      <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Sign up to our
          <br />
          newsletter today
        </h2>
        <p className="text-neutral-400 mb-10 max-w-md">
          Subscribe to our newsletter for the latest news and exclusive updates
          delivered to your inbox!
        </p>

        <form
          className="space-y-6 max-w-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="firstName" className="text-sm text-neutral-400">
                First name *
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First name"
                className="w-full bg-transparent border border-neutral-800 rounded-lg p-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="lastName" className="text-sm text-neutral-400">
                Last name *
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last name"
                className="w-full bg-transparent border border-neutral-800 rounded-lg p-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-neutral-400">
              Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="w-full bg-transparent border border-neutral-800 rounded-lg p-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-600 hover:bg-neutral-500 text-white font-medium py-3.5 rounded-lg transition-colors mt-2"
          >
            Sign up
          </button>
        </form>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative min-h-[500px] md:h-full">
        <img
          src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman working"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
