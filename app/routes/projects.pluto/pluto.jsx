import { Suspense, lazy, useMemo } from 'react';
import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundCCTVPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import {
  default as imageSprBackgroundCCTV,
  default as imageSprBackgroundCCTVLarge,
} from '~/assets/spr-cctv-background.jpeg';
import {
  default as imageSprStoryboarderDark,
  default as imageSprStoryboarderDarkLarge,
} from '~/assets/spr-dashboard.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import {
  default as imageSprLph,
  default as imageSprLphLarge,
} from '~/assets/spr-lph.png';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import {
  default as videoSprMotion,
  default as videoSprMotionLarge,
} from '~/assets/spr-salesman-trackers.mp4';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './pluto.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Sales Monitoring Dashboard';
const description =
  'I worked as the frontend lead on a major iteration of Pluto’s product. We took the platform in a bold new direction, focusing on becoming the best tool for monitoring sales.';
const roles = [
  'Front End Development',
  'UX and UI Design',
  'Mapping and Data Visualization',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Pluto = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://pluto.pt-bks.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageSprLessonBuilderDarkPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              In 2019, my client, PT Berca Kawan Sejati, purchased an application from a
              vendor. However, the application failed to align with the company’s business
              processes. Previously, PT Berca Kawan Sejati struggled with stock
              reconciliation and stock-taking, which led to significant discrepancies
              between physical stock and Excel records.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={`${imageSprLph} 1280w, ${imageSprLphLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageSprLph}
              alt="Daily report each sales person needs to fill out."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Salesman Daily Reports</ProjectSectionHeading>
              <ProjectSectionText>
                Each salesperson was required to fill out a daily report. However, the
                data was often inaccurate and incomplete. This made it difficult for the
                company to track sales performance and make informed decisions.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundCCTV} 1280w, ${imageSprBackgroundCCTVLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundCCTVPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>
                    Salesman Replayable Tracker
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    To address these issues, we developed a new application called the
                    Salesman Replayable Tracker. This application allowed salespeople to
                    track their sales performance, identify areas for improvement, and
                    make data-driven decisions. The application also provided real-time
                    insights into sales performance, enabling the company to make informed
                    decisions.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Dashboard Complexity</ProjectSectionHeading>
              <ProjectSectionText>
                The dashboard was complex and difficult to navigate. Salespeople found it
                difficult to understand the data and make informed decisions.
                Additionally, the dashboard was hard to maintain and update.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={theme}
              srcSet={`${imageSprStoryboarderDark} 1280w, ${imageSprStoryboarderDarkLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageSprStoryboarderDarkPlaceholder}
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <Suspense>
            <Earth
              className={styles.earth}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [0.34, 0.05, 0],
                    text: '18+ years old',
                    hidden: true,
                  },
                  {
                    position: [0.34, -0.38, 0],
                    text: 'Unique Barcodes',
                    hidden: true,
                  },
                  {
                    position: [0.34, 0.35, 0],
                    text: 'SKT',
                    hidden: true,
                  },
                  {
                    position: [0, 0, 0.15],
                    text: 'Cool Packaging',
                    hidden: true,
                  },
                  {
                    position: [0.34, 0.15, -0.15],
                    text: 'Rounded Corners',
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.75, 0.24],
                    text: 'Mantle',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.55, 0.24],
                    text: 'Outer core',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.35, 0.24],
                    text: 'Inner core',
                    delay: 800,
                    hidden: true,
                  },
                ],
                []
              )}
              scale={0.6}
            >
              <EarthSection
                scrim
                animations={['0:loop']}
                camera={[0, 0, 2.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>Live preview</ProjectSectionHeading>
                      <ProjectSectionText>
                        The platform allows for 3D models to be loaded in and viewed in a
                        way that is both interactive and easy to configure. This is a
                        great way to create engaging content for marketing.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 2.4]}
                meshes={['Atmosphere', 'EarthFull']}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[1.14, -1.39, 0.94]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Bringing 3D into marketing
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        The platform allows for 3D models to be loaded in and viewed in a
                        way that is both interactive and easy to configure. This is a
                        great way to create engaging content for marketing.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.17, 0.69, -1.47]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  '18+ years old',
                  'Unique Barcodes',
                  'SKT',
                  'Cool Packaging',
                  'Parícutin',
                  'Rounded Corners',
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Interactivity
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        The platform allows for 3D models to be loaded in and viewed in a
                        way that is both interactive and easy to configure. This is a
                        great way to create engaging content for marketing.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.81, 0.51, 0.43]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  '18+ years old',
                  'Unique Barcodes',
                  'SKT',
                  'Cool Packaging',
                  'Parícutin',
                  'Rounded Corners',
                ]}
              />
              <EarthSection
                scrimReverse
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              />
            </Earth>
          </Suspense>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Ultimately the project was successful after a few iterations. The platform
                were{' '}
                <Link href="https://pluto.pt-bks.com">
                  acquired by PT Berca Kawan Sejati
                </Link>{' '}
                and is now used by salespeople to track their sales performance.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
