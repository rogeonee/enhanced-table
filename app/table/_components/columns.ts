import { ColumnDef } from '@tanstack/react-table';
import { StudentData } from '../_lib/types';

export const columns: ColumnDef<StudentData>[] = [
  {
    accessorKey: 'Student_ID',
    header: 'Student ID',
    size: 80,
  },
  {
    accessorKey: 'Age',
    header: 'Age',
    size: 80,
  },
  {
    accessorKey: 'Gender',
    header: 'Gender',
    size: 80,
  },
  {
    accessorKey: 'Heart_Rate',
    header: 'Heart Rate',
    size: 120,
  },
  {
    accessorKey: 'Blood_Pressure_Systolic',
    header: 'Systolic BP',
    size: 150,
  },
  {
    accessorKey: 'Blood_Pressure_Diastolic',
    header: 'Diastolic BP',
    size: 150,
  },
  {
    accessorKey: 'Stress_Level_Biosensor',
    header: 'Stress (Biosensor)',
    size: 180,
  },
  {
    accessorKey: 'Stress_Level_Self_Report',
    header: 'Stress (Self-Report)',
    size: 180,
  },
  {
    accessorKey: 'Physical_Activity',
    header: 'Physical Activity',
    size: 150,
  },
  {
    accessorKey: 'Sleep_Quality',
    header: 'Sleep Quality',
    size: 150,
  },
  {
    accessorKey: 'Mood',
    header: 'Mood',
    size: 120,
  },
  {
    accessorKey: 'Study_Hours',
    header: 'Study Hours',
    size: 120,
  },
  {
    accessorKey: 'Project_Hours',
    header: 'Project Hours',
    size: 120,
  },
  {
    accessorKey: 'Health_Risk_Level',
    header: 'Health Risk Level',
    size: 120,
  },
];
