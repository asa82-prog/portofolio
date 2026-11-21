/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig, motion } from 'motion/react';
import { AboutEducation } from './components/AboutEducation';
import { ContactSection } from './components/ContactSection';
import { ExperienceRecognition } from './components/ExperienceRecognition';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';

const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-[#111315]">
        <Navbar />

        <main>
          <Hero />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
          >
            <AboutEducation />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
          >
            <ExperienceRecognition />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
          >
            <ProjectsSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
          >
            <SkillsSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
          >
            <ContactSection />
          </motion.div>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
