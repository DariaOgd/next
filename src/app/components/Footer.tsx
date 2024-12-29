export default function Footer() {
  return (
    <footer className="footer bg-black">
      <div className="flex flex-col items-center justify-center w-full gap-4 max-sm:gap-0 mb-5">
        <div className="flex flex-col items-center justify-center pt-2 p-1">
          <p className="text-center m-1 text-xl font-bold max-sm:text-center max-sm:mt-1 max-sm:text-lg">
            Matcha Bliss
          </p>
          <span className="text-center mt-1 text-graymatcha text-sm mx-44 max-md:mx-0 max-md:text-xs max-sm:text-opacity-75 max-sm:mt-1">
            Matcha Bliss is a Warsaw-based company founded in 2018, specializing in premium matcha and a curated selection of high-quality teas.
            Passionate about promoting the benefits of matcha and mindful tea drinking, we offer a variety of carefully sourced blends to elevate everyday rituals.
          </span>
        </div>
        <div className="text-center mt-1 text-xs text-slate-100 text-opacity-85 max-sm:mt-2 max-sm:text-xxs">
          <a className="" href="/privacy">Privacy Policy</a> <br />
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
      <p className="text-center mt-1 text-xxxs text-slate-300 text-opacity-65">
        © 2024 Matcha Bliss. All rights reserved.
      </p>
    </footer>
  );
}