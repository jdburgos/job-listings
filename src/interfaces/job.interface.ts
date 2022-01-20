export interface IJobBase {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  tools: string[];
}

export interface IJob extends IJobBase {
  role: string;
  level: string;
  languages: string[];
}

export interface IJobMapped extends IJobBase {
  tags: string[];
}
