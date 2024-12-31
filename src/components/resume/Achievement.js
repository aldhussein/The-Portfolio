import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex max-sm:flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Freela Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 sm:flex-col">
          <ResumeCard
            title="Aflax Restaurant."
            subTitle="Restaurant Website."
            result="Success"
            des="Aflax Restaurant offers a unique dining experience with fresh, locally sourced dishes 
            and exceptional service in a welcoming atmosphere.!"
          />
          <ResumeCard
            title="book Store Website."
            subTitle="Book Store Website."
            result="Success"
            des=" Book Store offers a curated selection of books for every reader, with a cozy atmosphere and personalized
            service to ignite your love for reading."
          />
          <ResumeCard
            title="E-commerce Website"
            subTitle="E-Commerce shopping Website"
            result="Success"
            des="My E-Commerce Store  offers a seamless shopping experience with a wide range of high-quality products, fast shipping,
            and unbeatable customer service."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
           title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2019 - Present)"
            result="WrolWide"
            des="Companies's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Web Developer Team - (2020 - 2022)"
            result="Remote"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Freelance - (2020 - 2023)"
            result="Remote"
            des="The Remote companies economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
