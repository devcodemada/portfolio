import { useEffect, useRef, useState } from 'react';
import {
  default as gamestackTexture,
  default as gamestackTextureLarge,
} from '~/assets/athena-checkin.png';
import {
  default as gamestackTexture2,
  default as gamestackTexture2Large,
} from '~/assets/athena-dashboard.png';
import bksCompanyWebsiteTexture from '~/assets/bks-company-profile.png';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import { default as plutoMobileDashboardTexture } from '~/assets/pluto-mobile-enduser-old.png';
import { default as plutoMobileLoginTexture } from '~/assets/pluto-mobile-old.png';
import plutoPocketAITexture from '~/assets/pluto-pocket-chat-ai.jpg';
import plutoPocketTexture from '~/assets/pluto-pocket-dashboard.jpg';
import smmCompanyWebsiteTexture from '~/assets/smm-company-profile.png';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import styles from './home.module.css';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Sales monitoring dashboard"
        description="Design and development for a sales monitoring dashboard built in React"
        buttonText="View project"
        buttonLink="/projects/pluto"
        model={{
          type: 'laptop',
          alt: 'Pluto sales dashboard',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Attendance tracking"
        description="A mobile app for attendance tracking and employee management with a focus on user experience called Athena-Z"
        buttonText="View website"
        buttonLink="https://repo.pt-bks.com/athena/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="BKS company website"
        description="Company website for Berca Kawan Sejati, a company that provides solutions for the growing cigarette distribution in Indonesia"
        buttonText="View website"
        buttonLink="https://www.pt-bks.com/"
        model={{
          type: 'laptop',
          alt: 'Pluto sales dashboard',
          textures: [
            {
              srcSet: `${bksCompanyWebsiteTexture} 1280w, ${bksCompanyWebsiteTexture} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Salesperson reporting platform"
        description="Design and development for a salesperson mobile app built in React Native called Pluto"
        buttonText="View project"
        buttonLink="/projects/pluto-mobile"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${plutoMobileDashboardTexture} 375w, ${plutoMobileDashboardTexture} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${plutoMobileLoginTexture} 375w, ${plutoMobileLoginTexture} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="SMM company website"
        description="Company website for Berca Kawan Sejati, a company that provides solutions for the growing cigarette industry in Indonesia"
        buttonText="View website"
        buttonLink="https://pt-smm.com/"
        model={{
          type: 'laptop',
          alt: 'Pluto sales dashboard',
          textures: [
            {
              srcSet: `${smmCompanyWebsiteTexture} 1280w, ${smmCompanyWebsiteTexture} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Pluto Pocket edition"
        description="Develop a mobile app for salesperson to manage their sales and customer data with a focus on user experience called Pluto Pocket. AI chatbot included."
        buttonText="Under development"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${plutoPocketTexture} 375w, ${plutoPocketTexture} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${plutoPocketAITexture} 375w, ${plutoPocketAITexture} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
