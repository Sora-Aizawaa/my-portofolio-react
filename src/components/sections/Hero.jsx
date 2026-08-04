import profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-between gap-10"
    >
      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-2xl"
      >
        {/* Badge */}

        <div
          className="
          mb-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/30
          bg-cyan-400/10
          px-4
          py-2
          mt-20
        "
        >
          <span className="h-2 w-2 rounded-full bg-green-400 "></span>

          <span className="text-sm text-cyan-300 ">Available For Work</span>
        </div>

        <p className="text-lg text-gray-400">Hello 👋 I'm</p>

        <h1 className="mt-4 text-7xl font-bold">
          Sora
          <span className="text-cyan-400">Aizawaa</span>
        </h1>

        <div className="mt-4 flex gap-4">
          <div className="w-[2px] rounded-full bg-cyan-400" />

          <div>
            <div className="text-xl font-light text-cyan-400">
              <TypeAnimation
                sequence={[
                  "昊相澤",
                  1500,
                  "果てしない空のように、自由に成長し続ける",
                  2500,
                  "はてしないそらのように、じゆうにせいちょうしつづける",
                  2500,
                  '"Growing endlessly, free like the boundless sky"',
                  3000,
                  // '"Berkembang tanpa henti, bebas laksana langit yang tak berujung"',
                  // 3000,
                ]}
                speed={40}
                repeat={Infinity}
                cursor={true}
              />
            </div>
          </div>
        </div>

        <div className="mt-30 text-3xl font-semibold text-cyan-400">
          <TypeAnimation
            sequence={[
              "React Js",
              1500,
              "Laravel",
              1500,
              "Python",
              1500,
              "Next Js",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p
          className="
          mt-8
          max-w-xl
          leading-8
          text-gray-400
        "
        >
          Developer who loves programming. I thrive on creating impactful
          applications and solving challenging problems.
        </p>

        <div className="flex gap-5">
          {/* <Button variant="primary">Hire Me</Button>

          <Button variant="outline">Download CV</Button> */}
        </div>
        <div className="mt-14 flex gap-16">
          <div>
            <h2 className="text-4xl font-bold text-cyan-400">1+</h2>

            <p className="text-gray-400">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">2+</h2>

            <p className="text-gray-400">Years</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">100%</h2>

            <p className="text-gray-400">Passion</p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div
          className="
          absolute
          -inset-5
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
        />

        <img
          src={profile}
          alt="Profile"
          className="
              relative
              h-[420px]
              w-[420px]
              rounded-full
              border-4
              border-cyan-400
              object-cover
              duration-500
              hover:scale-105
              "
        />
      </motion.div>
    </section>
  );
}

export default Hero;
