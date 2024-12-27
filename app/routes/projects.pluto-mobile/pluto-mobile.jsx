import { Fragment } from 'react';
import BksSalesForce from '~/assets/bks-salesforce.jpg';
import plutoMobileEndUserOld from '~/assets/pluto-mobile-enduser-old.png';
import plutoMobileOld from '~/assets/pluto-mobile-old.png';
import {
  default as sliceBackground,
  default as sliceBackgroundLarge,
} from '~/assets/pluto-mobile-sales.png';
import videoPluto from '~/assets/pluto.mp4';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './pluto-mobile.module.css';

const title = 'Pluto Mobile';
const description =
  'Pluto Mobile is a mobile application that uses for sales personnel to manage their sales pipeline and customer relationships. I worked on the design of the application, focusing on the user experience and interface design.';
const roles = ['Project Management', 'UI/UX Design', 'Frontend Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PlutoMobile = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://bks-repo.s3.ap-southeast-3.amazonaws.com/pluto.apk"
          linkLabel="Download APK"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Useful Features</ProjectSectionHeading>
              <ProjectSectionText>
                Pluto Mobile is a mobile application that uses for sales personnel to
                manage their sales pipeline and customer relationships. I worked on the
                design of the application, focusing on the user experience and interface
                design.
              </ProjectSectionText>
              <ProjectSectionText>
                The application has a number of features to help sales personnel manage
                their sales pipeline and customer relationships. These include a dashboard
                that shows the sales pipeline, a customer database, and a calendar for
                scheduling appointments.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${plutoMobileEndUserOld} 350w, ${plutoMobileEndUserOld} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${plutoMobileOld} 350w, ${plutoMobileOld} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                Users can now see who is working on a shared layer in real-time, and can
                see the user's profile. This makes it easier to collaborate and
                communicate with other users.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={`${videoPluto} 800w, ${videoPluto} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Our happy client is PT. Berca Kawan Sejati, a company that provides
                cigarettes distribution services. They are very satisfied with the results
                of the project and have seen a significant increase in sales since the
                application was launched. They have also received positive feedback from
                their sales personnel, who find the application easy to use and very
                helpful in managing their sales pipeline and customer relationships. The
                client is now planning to expand the application to other areas of their
                business. We are very proud of the work we have done on this project and
                are excited to see how it will continue to help our client grow their
                business.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={BksSalesForce}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
