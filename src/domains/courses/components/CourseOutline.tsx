import React, { use } from 'react';
// Cookery
import KitchenManagement from '@/domains/courses/contents/cookery/KitchenManagement';
import IndustryPlacement from '@/domains/courses/contents/cookery/IndustryPlacement';
import FSS from '@/domains/courses/contents/cookery/FSS';
// Hospitality
import DiplomaHospitality from '@/domains/courses/contents/hospitality/DiplomaHospitality';
import AdvancedDiplomaHospitality from '@/domains/courses/contents/hospitality/AdvancedDiplomaHospitality';
// Fitness
import CertificateIII from '@/domains/courses/contents/fitness/CertificateIII';
import CertificateIV from '@/domains/courses/contents/fitness/CertificateIV';
// Business
import CertificateIVBusiness from '@/domains/courses/contents/business/CertificateIVBusiness';
import DiplomaBusiness from '@/domains/courses/contents/business/DiplomaBusiness';
import AdvancedDiplomaBusiness from '@/domains/courses/contents/business/AdvancedDiplomaBusiness';
import GraduateDiplomaManagement from '@/domains/courses/contents/business/GraduateDiplomaManagement';
import CertificateIVHR from '../contents/humanResource/CertificateIVHR';
import CertificateIVPM from '../contents/project/CertificateIVPM';
import DiplomaPM from '../contents/project/DiplomaPM';
import AdvancedDiplomaPM from '../contents/project/AdvancedDiplomaPM';
import DiplomaHR from '../contents/humanResource/DiplomaHR';

function CourseOutline({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const mappingCourseTitle: { [key: string]: React.ReactNode } = {
    'sit40521-certificate-iv-in-kitchen-management': <KitchenManagement />,
    'industry-placement-work-placement': <IndustryPlacement />,
    fss: <FSS />,
    'sit50422-diploma-of-hospitality-management': <DiplomaHospitality />,
    'advanced-diploma-of-hospitality-management': (
      <AdvancedDiplomaHospitality />
    ),
    'industry-placement-hospitality-management': <IndustryPlacement />,
    'sis30321-certificate-iv-in-fitness': <CertificateIV />,
    'sis40221-certificate-iii-in-fitness': <CertificateIII />,
    'bsb40120-certificate-iv-in-business': <CertificateIVBusiness />,
    'bsb50120-diploma-of-business': <DiplomaBusiness />,
    'bsb60120-advanced-diploma-of-business': <AdvancedDiplomaBusiness />,
    'bsb80120-graduate-diploma-of-management': <GraduateDiplomaManagement />,
    'bsb40920-certificate-iv-in-project-management-practice': (
      <CertificateIVPM />
    ),
    'bsb50820-diploma-of-project-management-practice': <DiplomaPM />,
    'bsb60820-advanced-diploma-of-project-management-practice': (
      <AdvancedDiplomaPM />
    ),
    'bsb40420-certificate-iv-in-human-resource-management': <CertificateIVHR />,
    'bsb50320-diploma-of-human-resource-management': <DiplomaHR />,
    'bsb60320-advanced-diploma-of-human-resource-management': <></>,
  };

  return <>{mappingCourseTitle[id]}</>;
}

export default CourseOutline;
