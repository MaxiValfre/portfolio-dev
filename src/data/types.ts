export interface CvContact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
}

export interface CvExperience {
  role: string;
  org: string;
  period: string;
  intro?: string;
  bullets: string[];
}

export interface CvSkill {
  heading: string;
  items: string;
}

export interface CvWorkPrinciple {
  title: string;
  description: string;
}

export interface CvData {
  title: string;
  role?: string;
  contact: CvContact;
  profile: string[];
  experience: CvExperience[];
  skills: CvSkill[];
  skillsNote?: string;
  comoTrabajo?: CvWorkPrinciple[];
  education: string[];
  idiomas?: string;
}
