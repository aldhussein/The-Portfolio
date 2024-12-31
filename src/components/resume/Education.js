import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CS102:Computer Science II"
            subTitle="E- Learning  (2020 - 2024)"
            result="3.90/4"
            des="E-learning offers flexible, accessible, and interactive online education, empowering learners to acquire new skills and knowledge at their own pace.."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="E- Learning (2017 - 2020)"
            result="4.75/5"
            des="E-learning offers flexible, accessible, and interactive online education, empowering learners to acquire new skills and knowledge at their own pace."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Hanti-Wadaag Primary and Secondary School (2012 - 2019)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Freelancing - (2020 - Present)"
            result="Worl Wide"
            des="Freelancing hiring process is an important part of our culture. Companies care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2022 - 2023)"
            result="WorldWide"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Freelancing - (2020 - 2022)"
            result="WorlWide"
            des="The Freelace oppoturnities has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education