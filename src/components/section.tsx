"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Grainify } from "@/components/grainify";
import { Button } from "@/components/ui/button";
import { Gradient } from "@/components/gradient";
import { TextBadge } from "@/components/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";
import { SplashCursor } from "@/components/ui/splash-cursor";

const testimonials = [
  {
    author: {
      name: "Elena",
      handle: "@elenastroke",
      avatar: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/155_c69bfa3e-6dc1-4a69-9589-d37118861280.jpeg"
    },
    text: "Learning proper color theory transformed my paintings completely. I can now capture light and emotion in my work with so much more depth and intention."
  },
  {
    author: {
      name: "Marco",
      handle: "@marcoscanvas",
      avatar: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/154_9544e4dd-33c2-49fa-9bd1-4874cae0338d.jpeg"
    },
    text: "As a landscape artist, discovering complementary color palettes revolutionized my work. The techniques I've learned help me tell more compelling visual stories."
  },
  {
    author: {
      name: "Sophie",
      handle: "@sophiebrush",
      avatar: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/152_0ff311c2-7785-466c-ad0e-32ed06934a7d.jpeg"
    },
    text: "The composition techniques I've learned have elevated my portrait work immensely. Understanding form and structure has brought a new life to my subjects."
  },
  {
    author: {
      name: "Rafael",
      handle: "@rafaelpalette",
      avatar: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/151_254299d1-7ae3-45c5-a749-becc49066572.jpeg"
    },
    text: "Exploring the balance between intuition and technique has transformed my abstract work. I've found my unique voice while mastering fundamental principles."
  },
  {
    author: {
      name: "Isabella",
      handle: "@isabellaart",
      avatar: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/153_68a1bdce-d66c-4a05-9751-2be1c99a8f35.jpeg"
    },
    text: "Transitioning between digital and traditional mediums opened up endless possibilities. Each technique I learn builds upon the last, expanding my artistic horizons."
  }
];

export function Section() {
  return (
    <main className="container space-y-4 py-4 px-4">
            <SplashCursor />

      <section className="w-full flex flex-col rounded-3xl bg-accent text-accent-foreground relative isolate overflow-hidden sm:gap-y-16 gap-y-8 md:p-12 p-6">
        <Grainify className="opacity-25" />
        <div className="bg-[rgba(255,255,255,0)] bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] absolute inset-0 rounded-3xl -z-[1] opacity-10 [clip-path:circle(40%)]" />
        <motion.div
          animate={{ x: -30 }}
          initial={{ x: 250 }}
          transition={{ ease: "easeOut", type: "spring", duration: 2 }}
          whileHover={{}}
          className="absolute -z-[1]"
        >
          <Image alt="Image" src="/images/pen-hero.png" width={500} height={500} />
        </motion.div>
        <div className="flex justify-between items-center">
          <Image
            alt="Image"
            src="/images/reweb-logo.png"
            width={500}
            height={500}
            className="size-12 rounded-full invisible"
          />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="font-heading font-semibold tracking-tight text-balance sm:text-8xl text-center text-5xl">
            Elevate
            <br />
            Your Paint
          </h2>
          <h1 className="font-heading text-center text-pretty text-lg max-w-md text-muted-foreground">
            Master the art of painting with expert guidance. Discover perfect color combinations, professional techniques, and unlock your creative potential with our comprehensive painting platform.
          </h1>
        </div>
        <Button className="rounded-full mx-auto">Start painting today</Button>
      </section>
      <section className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 bg-card text-card-foreground overflow-hidden md:p-12 p-6">
        <Grainify />
        <Gradient className="absolute right-0" />
        <TextBadge text="DEMO" />
        <div className="flex flex-col gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            Master Traditional & Digital Art
          </h2>
        </div>
        <Image
          alt="Image"
          src="/images/original-a7d7f8ae075fda01e01f2c1e6e1cc5ff.png"
          width={800}
          height={500}
          className="mx-auto shadow-md rounded-2xl"
        />
      </section>
      <section className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 bg-card text-card-foreground overflow-hidden md:p-12 p-6">
        <Grainify />
        <Gradient className="absolute bottom-0 translate-y-1/2" />
        <div className="bg-[length:12px_12px] opacity-70 absolute inset-0 -z-[1] translate-x-1/2 -translate-y-1/2 [clip-path:ellipse(50%_50%_at_50%_50%)] bg-[linear-gradient(0deg,_rgba(255,255,255,0)_50%,_hsl(var(--muted))_50%)]" />
        <TextBadge text="FEATURES" />
        <div className="flex flex-col gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            For Artists & Creators
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-background shadow-md">
              <h3 className="font-heading text-2xl font-bold mb-4">Color Theory Mastery</h3>
              <p className="text-muted-foreground">
                Unlock the secrets of color harmony and composition. Learn how to create stunning palettes that evoke emotion and bring your artistic vision to life through expert color selection.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-background shadow-md">
              <h3 className="font-heading text-2xl font-bold mb-4">Advanced Brush Techniques</h3>
              <p className="text-muted-foreground">
                Master essential brushwork skills that transform your paintings. Learn professional techniques for creating texture, depth, and movement in your artwork.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl flex flex-col justify-between bg-background shadow-md">
            <div className="flex flex-col">
              <h3 className="font-heading text-2xl font-bold mb-4">Style Development</h3>
              <p className="text-muted-foreground mb-6">
                Develop your unique artistic voice through guided practice and exploration. Learn from various styles and techniques to create artwork that truly represents your creative vision.
              </p>
            </div>
            <Button className="rounded-full">
              Explore Painting Techniques
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <section
        id="solutions"
        className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 bg-card text-card-foreground overflow-hidden md:p-12 p-6"
      >
        <Grainify />
        <Gradient className="absolute top-0 -translate-y-1/2" />
        <TextBadge text="FEATURES" />
        <div className="flex flex-col sm:flex-row justify-between gap-x-16 gap-y-4">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl grow">
            For Art Studios
          </h2>
          <p className="max-w-md sm:text-right text-balance text-muted-foreground">
            Empower your art studio with professional tools and resources. Collaborate seamlessly, maintain consistent quality, and bring your creative projects to life faster than ever.
          </p>
        </div>
        <Card className="overflow-hidden border-none shadow-md">
          <Tabs defaultValue="item-1">
            <div className="w-full overflow-auto grid bg-muted">
              <TabsList className="mx-auto w-max flex-none inline-flex">
                <TabsTrigger value="item-1">Color Theory</TabsTrigger>
                <TabsTrigger value="item-2">Composition</TabsTrigger>
                <TabsTrigger value="item-3">Techniques</TabsTrigger>
                <TabsTrigger value="item-4">Materials</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="item-1" className="mt-0">
              <div className="p-8 grid gap-8 bg-background mt-0 lg:grid-cols-2">
                <div className="flex flex-col gap-4 order-2 lg:order-none justify-center">
                  <h3 className="text-2xl font-bold font-heading">Color Theory</h3>
                  <p className="text-muted-foreground">
                    Master the fundamentals of color theory and learn how to create harmonious palettes that bring your artwork to life with depth and emotion.
                  </p>
                  <Button className="w-fit rounded-full">Discover Painting Methods</Button>
                </div>
                <div className="relative rounded-xl overflow-hidden border">
                  <Image
                    alt="Color Theory"
                    src="/images/color-theory.png"
                    width={500}
                    height={300}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="item-2" className="mt-0">
              <div className="p-8 grid gap-8 bg-background mt-0 lg:grid-cols-2">
                <div className="flex flex-col gap-4 order-2 lg:order-none justify-center">
                  <h3 className="text-2xl font-bold font-heading">Composition</h3>
                  <p className="text-muted-foreground">
                    Learn the principles of artistic composition that will help you create balanced, engaging, and visually striking artwork every time.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden border">
                  <Image
                    alt="Composition"
                    src="/images/composition.png"
                    width={500}
                    height={300}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="item-3" className="mt-0">
              <div className="p-8 grid gap-8 bg-background mt-0 lg:grid-cols-2">
                <div className="flex flex-col gap-4 order-2 lg:order-none justify-center">
                  <h3 className="text-2xl font-bold font-heading">Techniques</h3>
                  <p className="text-muted-foreground">
                    Explore a wide range of painting techniques from traditional to contemporary, helping you expand your artistic repertoire and creative possibilities.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden border">
                  <Image
                    alt="Techniques"
                    src="/images/techniques.png"
                    width={500}
                    height={300}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="item-4" className="mt-0">
              <div className="p-8 grid gap-8 bg-background mt-0 lg:grid-cols-2">
                <div className="flex flex-col gap-4 order-2 lg:order-none justify-center">
                  <h3 className="text-2xl font-bold font-heading">Materials</h3>
                  <p className="text-muted-foreground">
                    Discover the best tools and materials for your artistic journey, from premium brushes to professional-grade paints and surfaces.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden border">
                  <Image
                    alt="Materials"
                    src="/images/materials.png"
                    width={500}
                    height={300}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </section>
      <section className="flex flex-col w-full rounded-3xl relative isolate bg-card text-card-foreground gap-y-8 overflow-hidden md:p-12 p-6">
        <Grainify />
        <Gradient className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2" />
        <div className="bg-[length:12px_12px] opacity-70 absolute inset-0 -z-[1] translate-x-1/2 -translate-y-1/2 [clip-path:ellipse(50%_50%_at_50%_50%)] bg-[repeating-linear-gradient(-45deg,_hsl(var(--muted)),_hsl(var(--muted))_6px,_rgba(255,255,255,0)_6px,_rgba(255,255,255,0)_30px)]" />
        <TextBadge text="TESTIMONIALS" />
        <TestimonialsSection
          title="What our users say"
          description="Explore the vibrant world of painting, where colors dance and emotions come alive on canvas, capturing the essence of artistic expression."
          testimonials={testimonials}
          className="bg-transparent p-0"
        />
      </section>
      <section className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 bg-card text-card-foreground overflow-hidden md:p-12 p-6">
        <Grainify />
        <Gradient className="absolute -translate-x-1/2 top-0 -translate-y-1/2 left-1/2" />
        <TextBadge text="Painting" />
        <div className="flex flex-col gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            Common Questions About Painting
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
            Explore essential knowledge about painting techniques, materials, and artistic development.
          </p>
          <Accordion type="single" collapsible className="mt-6 w-full divide-y">
            <FaqItem
              answer="Modern painting combines traditional techniques with contemporary approaches, allowing artists to blend classic skills with new mediums and styles."
              question="What makes modern painting unique?"
            />
            <FaqItem
              answer="Color theory is fundamental to painting, helping artists create mood, depth, and emotional impact through thoughtful color selection and combination."
              question="How important is color theory?"
            />
            <FaqItem
              answer="Professional artists select brushes based on their medium and technique, using both natural and synthetic fibers to achieve different effects."
              question="What brushes do professional artists use?"
            />
            <FaqItem
              answer="Absolutely! With proper guidance and practice, beginners can learn fundamental techniques and gradually develop their skills into more advanced methods."
              question="Can beginners learn professional techniques?"
            />
            <FaqItem
              answer="Your unique style develops naturally through practice, experimentation, and studying various techniques while staying true to your creative vision."
              question="How do I develop my own style?"
            />
          </Accordion>
        </div>
      </section>
      <section className="w-full flex flex-col rounded-3xl bg-accent text-accent-foreground relative isolate overflow-hidden gap-y-8 md:p-12 p-6">
        <Grainify className="opacity-25" />
        <div className="bg-[rgba(255,255,255,0)] bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] absolute inset-0 rounded-3xl -z-[1] opacity-10 [clip-path:circle(40%)]" />
        <Image
          alt="Image"
          src="/images/SphereRingStandingL.png"
          width={400}
          height={400}
          className="absolute -z-[1] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
        />

        <div className="flex flex-col items-center gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-center text-5xl sm:text-7xl">
            Unleash Your Artistic Potential
          </h2>
        </div>
        <Button className="rounded-full mx-auto">Start your artistic journey</Button>
      </section>
        <SplashCursor />
    </main>
  );
}
