import Button from "@/components/Button";
import designImage1 from "@/assets/images/design-example-1.png";
import designImage2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container mx-auto">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image
            src={designImage1}
            alt="Design Image 1"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image
            src={designImage2}
            alt="Design Image 1"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute left-56 top-96 hidden md:block">
          <Pointer name="Andria" />
        </div>
        <div className="absolute right-80 top-40 hidden md:block">
          <Pointer name="Joe" color="red"/>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold text-neutral-950 ">
            $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldnt slow you down, Layers powerful features with an
          intuitive interface that boosts your creative flow.
        </p>
        <form
          className="mx-auto max-w-lg flex border border-white/15 rounded-full p-2 mt-8"
          action=""
        >
          <input
            className="bg-transparent px-4 flex-1"
            type="email"
            placeholder="Enter your email"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
