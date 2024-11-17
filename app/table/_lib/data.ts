import studentData from '../../../assets/dataset/data.json';
import { StudentData } from './types';

// Get JSON dataset
export const getData = (): StudentData[] => {
  return studentData as StudentData[];
};
